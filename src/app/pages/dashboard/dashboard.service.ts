import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from './dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseURL: string = environment.apiUrl + '/api/v1.0/reviews';
  constructor(private httpClient: HttpClient) { }

  getReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseURL}`);
  }

  getReviewById(id): Observable<Review> {
    return this.httpClient.get<Review>(`${this.baseURL}/${id}`);
  }

  publicReview(id): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.baseURL}/public/${id}`,"");
  }

  unpublicReview(id, message): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.baseURL}/unpublic/${id}`,message);
  }

}
