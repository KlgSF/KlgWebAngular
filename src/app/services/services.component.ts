import { Component } from '@angular/core';
import { ServicecardComponent } from './servicecard/servicecard.component';

@Component({
  selector: 'services',
  standalone: true,
  imports: [ServicecardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  public serviceData = [
    {
      id:1,
      imageUrl: 'assets/service1.jpg',
      title: 'Metodologías ágiles',
      description:
        'Aplicamos métodos de ingeniería del software basados en el desarrollo iterativo e incremental...',
    },
    {
      id:2,
      imageUrl: 'assets/service2.jpg',
      title: 'Equipos de Especialístas',
      description:
        'Analistas, programadores y diseñadores acordes a su necesidad. De este modo el cliente pone sus...',
    },
    {
      id:3,
      imageUrl: 'assets/service3.jpg',
      title: 'Somos su socio tecnológico',
      description:
        'Enfóquese en su Core Business, nosotros nos ocupamos del desarrollo, mantenimiento y soporte...',
    },
  ];

}
