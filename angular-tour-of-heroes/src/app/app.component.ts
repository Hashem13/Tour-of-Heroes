import {Component} from '@angular/core';
import { HeroesComponent } from "./heroes/heroes.component";
import { MessagesComponent } from './messages/messages.component';
import { RouterLink, RouterLinkActive,RouterOutlet } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroesComponent,MessagesComponent,
    RouterLink,RouterOutlet, RouterLinkActive],
})
export class AppComponent {
  title = 'Tour of Heroes';
}