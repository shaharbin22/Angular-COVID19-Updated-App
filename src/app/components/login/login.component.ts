import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  loginWithGoogle(){
    this.auth.doGoogleLogin().then(res => {
      this.router.navigate(['/main']);
    })
  }
  loginWithFacebook(){
    this.auth.doFacebookLogin().then(res => {
      this.router.navigate(['/main']);
    })
  }
  logout(){
    this.auth.googleLogout().then(res => {
      this.router.navigate(['/login'])
    }).catch(err => console.log(err))
  }
  ngOnInit(): void {
  }

}
