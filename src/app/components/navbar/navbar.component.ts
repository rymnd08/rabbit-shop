import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbDropdownModule, RouterModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  
})
export class NavbarComponent implements OnInit {
  isLogin = false
  photoUrl!: string 

  constructor(private fire: FirebaseService, private router: Router, ){}

  ngOnInit(): void {
    const userRetrieve = localStorage.getItem('userInfo')!
    const userInfo = JSON.parse(userRetrieve)

    if(userInfo){
      this.isLogin = true
      this.photoUrl = userInfo.photoURL 
    }else{
      this.photoUrl =  'https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png'
    }
    
  }

  async signOut(event: Event){

    event.preventDefault()

    try {
      await this.fire.signOut()
      localStorage.removeItem('userInfo')
      this.isLogin = false

      this.router.navigate(['/'])
    } catch (error) {
      alert(error)
    }

  }

}
