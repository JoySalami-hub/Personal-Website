import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private readonly http = inject(HttpClient);
  private readonly formEndpoint = 'https://formsubmit.co/ajax/dammisalami@gmail.com';

  readonly model = {
    name: '',
    email: '',
    message: '',
  };

  readonly submitted = signal(false);
  readonly sending = signal(false);
  readonly sendError = signal(false);

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      Object.values(form.controls).forEach((control) =>
        control.markAsTouched(),
      );
      return;
    }
    this.submitted.set(false);
    this.sendError.set(false);
    this.sending.set(true);

    this.http.post(this.formEndpoint, {
      name: this.model.name,
      email: this.model.email,
      message: this.model.message,
      _subject: `Portfolio message from ${this.model.name}`,
      _template: 'table',
    }).subscribe({
      next: () => {
        this.submitted.set(true);
        form.resetForm();
        this.sending.set(false);
      },
      error: () => {
        this.sendError.set(true);
        this.sending.set(false);
      },
    });
  }
}
