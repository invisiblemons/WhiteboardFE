import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reviewer } from './reviewer.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewerService {

  baseUrl = environment.apiUrl+ '/api/v1.0/reviewers'
  constructor(private httpClient: HttpClient) {  }

  get(): Observable<Reviewer[]> {
    return this.httpClient.get<Reviewer[]>(`${this.baseUrl}`);
  }

}
