import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { user } from './user.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL: string = environment.apiUrl + '/api/v1.0/admins/authenticate';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}
   googleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then((googleAuth) => {
        googleAuth.user.getIdToken().then((tkn) => {
          this.httpClient.post<user>(`${this.baseURL}`, {
            idToken: tkn,
          }).subscribe(
            (user:user) => {
              this.localStorageService.setUser(user);
              this.router.navigate(['/']);
            },
            (error) => {
              console.log(error);
              if(error.status !== 400) {
                alert('Error in the Server, please try again later!')
              } else if(error.status === 400) {
                alert('Your account do not have permission to sign in')
              }
            }
          )
        });
      })
      .catch((error) => {
        console.log('Something went wrong: ', error);
      });
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/auth']);
    });
  }
}
