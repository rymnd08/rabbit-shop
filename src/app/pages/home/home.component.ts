import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../../components/search/search.component';
import { RabbitCardComponent } from '../../components/rabbit-card/rabbit-card.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SlicePipe } from '@angular/common';
import { rabbits } from '../../shared/rabbit.interface';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterModule, SearchComponent, RabbitCardComponent, NgbPaginationModule,SlicePipe ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {

  rabbits : rabbits[] = []

  handleSearch(searchVal: string){
    console.log(searchVal)
  }

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
