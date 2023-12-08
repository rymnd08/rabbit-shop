import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-rabbits',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './my-rabbits.component.html',
  styleUrl: './my-rabbits.component.css'
})
export class MyRabbitsComponent {

}
