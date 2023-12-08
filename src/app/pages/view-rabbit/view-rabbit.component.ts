import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { rabbits } from '../../shared/rabbit.interface';

@Component({
  selector: 'app-view-rabbit',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './view-rabbit.component.html',
  styleUrl: './view-rabbit.component.css'
})
export class ViewRabbitComponent implements OnInit {
  
  rabbits: rabbits | undefined

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    const rabbitID = this.route.snapshot.params['id']
    
  }
}
