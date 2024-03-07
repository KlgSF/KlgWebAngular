import { Component, inject } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'about',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  public profile1 = "assets/profile1.png"

  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer)

  constructor() {
    this.matIconRegistry.addSvgIcon(
      'linkedIn_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedIn_icon.svg')
    )
  }
}
