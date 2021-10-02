import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL: string = environment.apiUrl + '/api/v1.0/criteriagroup';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private httpClient: HttpClient,
    private zone: NgZone
  ) {}
  getCri(tkn): Observable<string> {
    return this.httpClient.get<string>(`${this.baseURL}`).pipe(pluck('data'));
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then((googleAuth) => {
        googleAuth.user.getIdToken().then((tkn) => { this.router.navigateByUrl('/');
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
