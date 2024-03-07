import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private router: Router) { }

  scrollToSection(sectionId: string): void {
    const navbarHeight = 150; // Altura de la barra de navegación
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const targetOffset = targetSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    }
  }

  redirectToHiring(): void {
    this.router.navigateByUrl('/hiring');
  }
}
