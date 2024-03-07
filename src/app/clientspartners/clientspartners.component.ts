import { Component } from '@angular/core';

@Component({
  selector: 'clientspartners',
  standalone: true,
  imports: [],
  templateUrl: './clientspartners.component.html',
  styleUrl: './clientspartners.component.css'
})
export class ClientspartnersComponent {
  dragging = false;
  x = 0;

  handleMouseDown(): void {
    this.dragging = true;
  }

  handleMouseMove(event: MouseEvent): void {
    if (this.dragging) {
      this.x += event.movementX;
    }
  }

  handleMouseUp(): void {
    this.dragging = false;
  }

  public image1 = "assets/clientspartners/Macondo.jpg"
  public image2 = "assets/clientspartners/Sistema Siges.jpg"
}
