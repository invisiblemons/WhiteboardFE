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
  campaignURL: string = environment.apiUrl + '/api/v1.0/campaigns';

  constructor(private httpClient: HttpClient) { }

  getReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseURL}?sortby=Date&order=Des`);
  }

  getReloadReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseURL}?sortby=Date&order=Des&reloadredis=true`);
  }

  getReloadPublishedReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseURL}?sortby=Date&order=Des&status=Published&reloadredis=true`);
  }

  reloadL2(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.campaignURL}?campusId=21111111-1111-1111-1111-111111111111&reloadredis=true`);
  }

  reloadL3(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseURL}?reviewerid=11111111-1111-1111-1111-111111111111&status=Published&reloadredis=true`);
  }

  reloadL4(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseURL}?reviewerid=11111111-1111-1111-1111-111111111111&status=Waiting&reloadredis=true`);
  }

  reloadL5(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseURL}?reviewerid=11111111-1111-1111-1111-111111111111&status=Unpublished&reloadredis=true`);
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
