import { AsyncPipe, CurrencyPipe, SlicePipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { rabbits } from '../../shared/rabbit.interface';


@Component({
  selector: 'app-rabbit-card',
  standalone: true,
  imports: [NgbPaginationModule, SlicePipe, RouterModule, CurrencyPipe, AsyncPipe],
  templateUrl: './rabbit-card.component.html',
  styleUrl: './rabbit-card.component.css'
})
export class RabbitCardComponent implements OnChanges {

  @Input() rabbits$!:  BehaviorSubject<rabbits[] | null>

  collectionSize: number = 0
  page: number = 1
  pageSize = 8

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.rabbits$.subscribe(rabbits =>{
      console.log(rabbits)
    })
  }

  ngOnInit(): void {
    
  }
}
