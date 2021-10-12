import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { University } from '../university/university.model';
import { Campaign } from './campaign.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  baseURL: string = environment.apiUrl + '/api/v1.0/campaigns';
  uniURL: string = environment.apiUrl + '/api/v1.0/universities';

  constructor(private httpClient: HttpClient) { }

  getCampaigns(): Observable<Campaign[]> {
    return this.httpClient.get<Campaign[]>(`${this.baseURL}?pagesize=9`);
  }

  getCriterions(id:string) {
    return this.httpClient.get<Campaign[]>(`${this.baseURL}/${id}`);
  }

  insertCampaign(campaign: Campaign) {
    return this.httpClient.post<Campaign>(`${this.baseURL}`, campaign);
  }

  deleteCampaign(campaign: Campaign) {
    return this.httpClient.delete<boolean>(`${this.baseURL}/${campaign.id}`);
  }

  updateCampaign(campaign: Campaign) {
    return this.httpClient.put<Campaign>(`${this.baseURL}`, campaign);
  }

  getUni(): Observable<University[]> {
    return this.httpClient.get<University[]>(`${this.uniURL}`);
  }

  searchCampaignFromCampus(campusId: string): Observable<Campaign[]> {
    return this.httpClient.get<Campaign[]>(`${this.baseURL}?campusid=${campusId}`);
  }

  searchCampaignFromUni(uniId: string): Observable<Campaign[]> {
    return this.httpClient.get<Campaign[]>(`${this.baseURL}?universityid=${uniId}`);
  }
}
