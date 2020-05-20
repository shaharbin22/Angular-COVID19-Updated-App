import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  fbAuth: any;

  constructor(private afAuth:AngularFireAuth) { }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      })
    })
  }
  doFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
 }

  googleLogout(){
    return new Promise(
      (resolve,reject) => {
        if(firebase.auth().currentUser){
          this.fbAuth.signOut();
          resolve(true);
        }
        else{
          reject('user not found');
        }
      }
    )
  }
}
