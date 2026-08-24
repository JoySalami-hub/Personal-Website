import { Component, HostListener, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly sanitizer = inject(DomSanitizer);
  readonly links: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  readonly resumeUrl = 'Joy_Damilola_Salami_2026_CV.pdf';
  readonly certificatesUrl = 'AWS Certified Solutions Architect - Associate certificate.pdf';
  readonly resumeSafeUrl: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(this.resumeUrl);
  readonly certificatesSafeUrl: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(this.certificatesUrl);

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly resumeOpen = signal(false);
  readonly certificatesOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeResume();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  openResume(event: Event): void {
    event.preventDefault();
    this.closeMenu();
    this.resumeOpen.set(true);
  }

  closeResume(): void {
    this.resumeOpen.set(false);
  }

  
  openCertificates(event: Event): void {
    event.preventDefault();
    this.closeMenu();
    this.certificatesOpen.set(true);
  }

  closeCertificates(): void {
    this.certificatesOpen.set(false);
  }
}
