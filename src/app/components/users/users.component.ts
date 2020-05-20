import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  logout(){
    this.auth.googleLogout().then(res => {
      this.router.navigate(['/login'])
    }).catch(err => console.log(err))
  }
  ngOnInit(): void {
  }

}
