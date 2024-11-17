import { Component } from '@angular/core';
import { PoesiasComponent } from '../poesias/poesias.component';
import { RouterLink, RouterLinkActive, RouterOutlet, Route } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PoesiasComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}


