import { AsyncPipe, CurrencyPipe, SlicePipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Subscription } from 'rxjs';
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

  collectionSize = 0
  page = 1
  pageSize = 8

  subscription!: Subscription

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.subscription = this.rabbits$.subscribe(rabbits =>{
      if(rabbits != undefined){
        this.collectionSize = rabbits?.length
      }
    })
  }
}
