import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Criteria } from "../campaign.model";
import { CampaignService } from "../campaign.service";

@Component({
  selector: "app-campaign-detail",
  templateUrl: "./campaign-detail.component.html",
  styleUrls: ["./campaign-detail.component.scss"],
})
export class CampaignDetailComponent implements OnInit {
  campaignId: string;

  criterions: Criteria[];

  criteria: Criteria;

  displayBasic;

  constructor(
    private campaignService: CampaignService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.displayBasic = true;
    this.campaignId = this.route.snapshot.paramMap.get('id');
    this.campaignService
      .getCriterions(this.campaignId)
      .subscribe((data) => (this.criterions = data['criterions']));
  }

  onDiscard(): void {
    this.router.navigate(['./campaign']);
}
}
