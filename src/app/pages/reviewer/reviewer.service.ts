import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reviewer } from './reviewer.model';
import { University } from '../university/university.model';
import { CriterionsOfReview, PictureForReview, Review } from '../dashboard/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewerService {

  baseUrl = environment.apiUrl+ '/api/v1.0/reviewers'
  uniURL: string = environment.apiUrl + '/api/v1.0/universities';
  reviewUrL: string = environment.apiUrl + '/api/v1.0/reviews';
  picturesReviewUrL: string = environment.apiUrl + '/api/v1.0/picturesreview';
  
  criterionReviewUrL: string = environment.apiUrl + '/api/v1.0/reviewcriterion';

  constructor(private httpClient: HttpClient) {  }

  getReviewer(): Observable<Reviewer[]> {
    return this.httpClient.get<Reviewer[]>(`${this.baseUrl}`);
  }

  deleteReviewer(reviewer: Reviewer) {
    return this.httpClient.delete<boolean>(`${this.baseUrl}/${reviewer.id}`);
  }

  getUni(): Observable<University[]> {
    return this.httpClient.get<University[]>(`${this.uniURL}`);
  }

  searchReviewerFromUni(uniId: string): Observable<Reviewer[]> {
    return this.httpClient.get<Reviewer[]>(`${this.baseUrl}?universityid=${uniId}`);
  }

  getReviewerById(Id: string): Observable<Reviewer> {
    return this.httpClient.get<Reviewer>(`${this.baseUrl}/${Id}`);
  }

  getReview(reviewerId): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.reviewUrL}?reviewerid=${reviewerId}`);
  }

  deleteReview(id: string) {
    return this.httpClient.delete<boolean>(`${this.reviewUrL}/${id}`);
  }

  updateReviewer(reviewer: Reviewer) {
    return this.httpClient.put<Reviewer>(`${this.baseUrl}`, reviewer);
  }

  getReviewById(Id: string): Observable<Review> {
    return this.httpClient.get<Review>(`${this.reviewUrL}/${Id}`);
  }

  getPicturesReview(): Observable<PictureForReview[]> {
    return this.httpClient.get<PictureForReview[]>(`${this.picturesReviewUrL}`);
  }

  getCriterionsReview(): Observable<CriterionsOfReview[]> {
    return this.httpClient.get<CriterionsOfReview[]>(`${this.criterionReviewUrL}`);
  }
}
