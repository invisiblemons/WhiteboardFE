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

  getPublishedReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseURL}?status=public`);
  }

  getWaitingReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseURL}?status=waiting`);
  }

  getUnpublishedReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseURL}?status=unpublic`);
  }

  publicReview(id): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.baseURL}/public/${id}`);
  }

  unpublicReview(id): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.baseURL}/unpublic/${id}`);
  }

}
