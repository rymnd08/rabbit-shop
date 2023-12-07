import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

export type rabbits = {
  RabbitID: number
  UserID: number
  Name: string
  Age: number
  Color: string
  Description: string
  UploadDate: string
}

@Component({
  selector: 'app-rabbit-card',
  standalone: true,
  imports: [NgbPaginationModule, SlicePipe, RouterModule, CurrencyPipe],
  templateUrl: './rabbit-card.component.html',
  styleUrl: './rabbit-card.component.css'
})
export class RabbitCardComponent {

  rabbits: rabbits[] = []

  collectionSize: number = this.rabbits.length
  pageSize: number = 8  
  page: number = 1
  
  ngOnInit(): void {
    const rabbits = [
      {
        RabbitID: 1,
        UserID: 123,
        Name: "Fluffy",
        Age: 2,
        Color: "White",
        Description: "A cute and fluffy bunny.",
        UploadDate: "2023-12-07",
      },
      {
        RabbitID: 2,
        UserID: 456,
        Name: "Thumper",
        Age: 1,
        Color: "Brown",
        Description: "Loves to hop around and thump its hind legs.",
        UploadDate: "2023-12-07",
      },
      {
        RabbitID: 3,
        UserID: 789,
        Name: "Snowball",
        Age: 3,
        Color: "Gray",
        Description: "Enjoys playing in the snow and digging burrows.",
        UploadDate: "2023-12-07",
      },
      {
        RabbitID: 4,
        UserID: 123,
        Name: "Cottontail",
        Age: 2,
        Color: "Spotted",
        Description: "Known for its distinctive spotted fur.",
        UploadDate: "2023-12-07",
      },
      {
        RabbitID: 5,
        UserID: 456,
        Name: "Nibbles",
        Age: 1,
        Color: "Black",
        Description: "Loves nibbling on fresh veggies.",
        UploadDate: "2023-12-07",
      },
      {
        RabbitID: 5,
        UserID: 456,
        Name: "Nibbles",
        Age: 1,
        Color: "Black",
        Description: "Loves nibbling on fresh veggies.",
        UploadDate: "2023-12-07",
      },
      {
        RabbitID: 5,
        UserID: 456,
        Name: "Nibbles",
        Age: 1,
        Color: "Black",
        Description: "Loves nibbling on fresh veggies.",
        UploadDate: "2023-12-07",
      },
      {
        RabbitID: 5,
        UserID: 456,
        Name: "Nibbles",
        Age: 1,
        Color: "Black",
        Description: "Loves nibbling on fresh veggies.",
        UploadDate: "2023-12-07",
      },
      {
        RabbitID: 5,
        UserID: 456,
        Name: "Nibbles",
        Age: 1,
        Color: "Black",
        Description: "Loves nibbling on fresh veggies.",
        UploadDate: "2023-12-07",
      },
      {
        RabbitID: 5,
        UserID: 456,
        Name: "Nibbles",
        Age: 1,
        Color: "Black",
        Description: "Loves nibbling on fresh veggies.",
        UploadDate: "2023-12-07",
      },
    ]

    this.rabbits = rabbits
  }
}
