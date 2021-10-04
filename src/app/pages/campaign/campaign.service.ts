import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  baseURL: string = environment.apiUrl + '/api/v1.0/reviews';
  constructor(private httpClient: HttpClient) { }

}
