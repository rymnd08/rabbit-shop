import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rabbits } from '../../components/rabbit-card/rabbit-card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

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
        RabbitID: 6,
        UserID: 456,
        Name: "Nibbles",
        Age: 1,
        Color: "Black",
        Description: "Loves nibbling on fresh veggies.",
        UploadDate: "2023-12-07",
      },
      {
        RabbitID: 7,
        UserID: 456,
        Name: "Nibbles",
        Age: 1,
        Color: "Black",
        Description: "Loves nibbling on fresh veggies.",
        UploadDate: "2023-12-07",
      },
      {
        RabbitID: 8,
        UserID: 456,
        Name: "Nibbles",
        Age: 1,
        Color: "Black",
        Description: "Loves nibbling on fresh veggies.",
        UploadDate: "2023-12-07",
      },
      {
        RabbitID: 9,
        UserID: 456,
        Name: "Nibbles",
        Age: 1,
        Color: "Black",
        Description: "Loves nibbling on fresh veggies.",
        UploadDate: "2023-12-07",
      },
      {
        RabbitID: 10,
        UserID: 456,
        Name: "Nibbles",
        Age: 1,
        Color: "Black",
        Description: "Loves nibbling on fresh veggies.",
        UploadDate: "2023-12-07",
      },
    ]

    const filtered = rabbits.find(rabbit =>{
      return rabbit.RabbitID === +rabbitID
    })
    this.rabbits = filtered
    console.log(this.rabbits)
  }
}
