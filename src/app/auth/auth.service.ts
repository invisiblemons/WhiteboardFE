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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL: string = environment.apiUrl + '/api/v1.0/admins/authenticate';
  token: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private httpClient: HttpClient,
    private zone: NgZone
  ) {}

  getCri(tkn): Observable<string> {
    return this.httpClient.get<string>(`${this.baseURL}`).pipe(pluck('data'));
  }

  googleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then((googleAuth) => {
        googleAuth.user.getIdToken().then((tkn) => {
          // this.zone.run(() => this.router.navigateByUrl('/'));
          this.httpClient
            .post<user>(`${this.baseURL}`, { idToken: tkn })
            .subscribe(
              (user) => {
                console.log(user);
              },
              (error) => {
                console.log(error);
              }
            );
        });
      })
      .catch((error) => {
        console.log('Something went wrong: ', error);
      });
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }

  login(returnToken: string): Observable<user> {
    return;
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/auth']);
    });
  }
}
