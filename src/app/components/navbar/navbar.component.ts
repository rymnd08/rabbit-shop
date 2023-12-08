import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../services/firebase.service';
import { BrowserStorageService } from '../../shared/browser-storage.service';

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

  constructor(private fire: FirebaseService, private router: Router, private storage: BrowserStorageService ){}

  ngOnInit(): void {
    const userRetrieve = this.storage.get('userInfo')!
    const userInfo = JSON.parse(userRetrieve)
    if(userInfo != null){
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
      this.storage.clear()
      this.isLogin = false

      this.router.navigate(['/'])
    } catch (error) {
      alert(error)
    }

  }

}
