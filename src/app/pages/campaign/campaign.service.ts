import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from '../dashboard/dashboard.model';
import { Campus, University } from '../university/university.model';
import { Campaign, Criteria } from './campaign.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  baseURL: string = environment.apiUrl + '/api/v1.0/campaigns';
  uniURL: string = environment.apiUrl + '/api/v1.0/universities';
  campusURL: string = environment.apiUrl + '/api/v1.0/campuses';
  reviewURL: string = environment.apiUrl + '/api/v1.0/reviews';
  reviewerURL: string = environment.apiUrl + '/api/v1.0/reviewers';
  criteriaURL: string = environment.apiUrl + '/api/v1.0/criterions';

  constructor(private httpClient: HttpClient) { }

  getCampaigns(): Observable<Campaign[]> {
    return this.httpClient.get<Campaign[]>(`${this.baseURL}?sortby=StartDay&order=Des`);
  }

  getReloadCampaigns(): Observable<Campaign[]> {
    return this.httpClient.get<Campaign[]>(`${this.baseURL}?sortby=StartDay&order=Des&reloadredis=true`);
  }

  reloadL2(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseURL}?campusId=21111111-1111-1111-1111-111111111111&reloadredis=true`);
  }

  getCriterions(id:string) {
    return this.httpClient.get<Campaign[]>(`${this.baseURL}/${id}`);
  }

  getCriterionsOfReview(reviewId:string) {
    return this.httpClient.get<Criteria[]>(`${this.baseURL}?reviewId=${reviewId}`);
  }

  getUni(): Observable<University[]> {
    return this.httpClient.get<University[]>(`${this.uniURL}`);
  }

  getCampus(id): Observable<Campus> {
    return this.httpClient.get<Campus>(`${this.campusURL}/${id}`);
  }

  getReview(campaignId): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.reviewURL}?campaignid=${campaignId}`);
  }

  getReviewer(campusId): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.reviewerURL}?campusId=${campusId}`);
  }

  insertCampaign(campaign: Campaign) {
    return this.httpClient.post<Campaign>(`${this.baseURL}`, campaign);
  }

  insertCriteria(criteria: Criteria) {
    return this.httpClient.post<Criteria>(`${this.criteriaURL}`, criteria);
  }

  deleteCampaign(campaign: Campaign) {
    return this.httpClient.put<Campaign>(`${this.baseURL}`,campaign);
  }

  unDeleteCampaign(campaign: Campaign) {
    return this.httpClient.put<Campaign>(`${this.baseURL}`, campaign);
  }

  deleteCriteria(id: string) {
    return this.httpClient.delete<boolean>(`${this.criteriaURL}/${id}`);
  }

  updateCampaign(campaign: Campaign) {
    return this.httpClient.put<Campaign>(`${this.baseURL}`, campaign);
  }

  updateCriteria(criteria: Criteria) {
    return this.httpClient.put<Criteria>(`${this.criteriaURL}`, criteria);
  }

  searchCampaignFromCampus(campusId: string): Observable<Campaign[]> {
    return this.httpClient.get<Campaign[]>(`${this.baseURL}?campusid=${campusId}`);
  }

  searchCampaignFromUni(uniId: string): Observable<Campaign[]> {
    return this.httpClient.get<Campaign[]>(`${this.baseURL}?universityid=${uniId}`);
  }

  searchCampaignWithId(Id: string): Observable<Campaign> {
    return this.httpClient.get<Campaign>(`${this.baseURL}/${Id}`);
  }


}
