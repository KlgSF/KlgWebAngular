import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ClientspartnersComponent } from './clientspartners/clientspartners.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HiringComponent } from './hiring/hiring.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, ServicesComponent, ClientspartnersComponent, AboutComponent, ContactComponent, HiringComponent, LandingpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'klgwebangular';
}
