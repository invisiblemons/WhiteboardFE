import { Injectable } from '@angular/core';
import { user } from './user.model';

const USER = "user";
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  setUser(user:user) {
    localStorage.setItem(USER, JSON.stringify(user))
  }
  getUser() : user{
    return JSON.parse(localStorage.getItem(USER));
  }

  removeUser()
  {
    return localStorage.removeItem(USER);
  }
}
