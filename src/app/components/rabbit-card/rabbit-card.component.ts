import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { rabbits } from '../../shared/rabbit.interface';


@Component({
  selector: 'app-rabbit-card',
  standalone: true,
  imports: [NgbPaginationModule, SlicePipe, RouterModule, CurrencyPipe],
  templateUrl: './rabbit-card.component.html',
  styleUrl: './rabbit-card.component.css'
})
export class RabbitCardComponent {

  @Input() rabbits: rabbits[] = []

  collectionSize: number = this.rabbits.length
  page: number = 1
  pageSize = 8
  
  ngOnInit(): void {
    
  }
}
