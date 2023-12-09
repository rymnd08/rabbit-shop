import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../../components/search/search.component';
import { RabbitCardComponent } from '../../components/rabbit-card/rabbit-card.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SlicePipe } from '@angular/common';
import { rabbits } from '../../shared/rabbit.interface';
import { FirebaseService } from '../../services/firebase.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterModule, SearchComponent, RabbitCardComponent, NgbPaginationModule,SlicePipe ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {
  
  rabbits$ = new BehaviorSubject<rabbits[] | null>(null)

  constructor(private fire: FirebaseService){}

  handleSearch(searchVal: string){
    console.log(searchVal)
  }

  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    try {
      let data : rabbits[] = []
      const snapshot = await this.fire.getDocuments('rabbits')
      snapshot.forEach(doc =>{
        data.push({...doc.data(), rabbitID: doc.id} as rabbits)
        this.rabbits$.next(data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  
}
