import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-my-rabbits',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './my-rabbits.component.html',
  styleUrl: './my-rabbits.component.css'
})
export class MyRabbitsComponent {

}
