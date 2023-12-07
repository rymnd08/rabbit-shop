import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../../components/search/search.component';
import { RabbitCardComponent } from '../../components/rabbit-card/rabbit-card.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SlicePipe } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterModule, SearchComponent, RabbitCardComponent, NgbPaginationModule,SlicePipe ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {

  handleSearch(searchVal: string){
    console.log(searchVal)
  }

  ngOnInit(): void {
    
  }

  
}
