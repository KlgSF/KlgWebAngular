import { Component } from '@angular/core';

@Component({
  selector: 'home-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  public logoPath = "assets/whitelogo2.png"
}
