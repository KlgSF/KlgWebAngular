import { Component, Input } from '@angular/core';

@Component({
  selector: 'servicecard',
  standalone: true,
  imports: [],
  templateUrl: './servicecard.component.html',
  styleUrl: './servicecard.component.css'
})
export class ServicecardComponent {
  @Input() imageUrl = '';
  @Input() title = '';
  @Input() description = '';
}
