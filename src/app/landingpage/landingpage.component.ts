import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';
import { ClientspartnersComponent } from '../clientspartners/clientspartners.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [HomeComponent, ServicesComponent, ClientspartnersComponent, AboutComponent, ContactComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
