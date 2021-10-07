import { Component, OnInit } from '@angular/core';
import { Campaign } from './campaign.model';
import { CampaignService } from './campaign.service';
import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class CampaignComponent implements OnInit {

  campaigns: Campaign[];

    constructor(private campaignService: CampaignService) { }

    ngOnInit() {
        this.campaignService.getCampaigns().subscribe(data => this.campaigns = data);
    }

}
