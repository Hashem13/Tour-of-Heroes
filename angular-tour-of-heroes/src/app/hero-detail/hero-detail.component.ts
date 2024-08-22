import {Component, Input} from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  /* . . . */
  NgFor,NgIf
  /* . . . */
} from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule,CommonModule,NgFor,NgIf],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})

export class HeroDetailComponent {
  @Input() hero?: Hero;
}
