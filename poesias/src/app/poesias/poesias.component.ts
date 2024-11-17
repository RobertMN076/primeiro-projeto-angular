import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-poesias',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './poesias.component.html',
  styleUrl: './poesias.component.css'
})
export class PoesiasComponent {

}
