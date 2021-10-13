import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ConfirmationService, MessageService } from "primeng/api";
import { Review } from "../../dashboard/dashboard.model";
import { Reviewer } from "../../reviewer/reviewer.model";
import { Campus } from "../../university/university.model";
import { Campaign, Criteria } from "../campaign.model";
import { CampaignService } from "../campaign.service";

@Component({
  selector: "app-campaign-detail",
  templateUrl: "./campaign-detail.component.html",
  styleUrls: ["./campaign-detail.component.scss"],
})
export class CampaignDetailComponent implements OnInit {
  campaignId: string;

  campaign: Campaign;

  criterions: Criteria[];

  criteria: Criteria;

  campus: Campus;

  reviews: Review[];

  review: Review;

  reviewers: Reviewer[];

  reviewer: Reviewer;

  displayBasic: boolean;

  imageUrl: string;

  data: any;

    chartOptions: any;

    statusColumn = ['Chưa bắt đầu', 'Đang diễn ra', 'Đã kết thúc'];

    currentDay: Date;

  constructor(
    private campaignService: CampaignService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.currentDay = new Date();
    this.displayBasic = true;
    this.campaignId = this.route.snapshot.paramMap.get("id");
    //get campaign
    this.campaignService
      .searchCampaignWithId(this.campaignId)
      .subscribe((res) => {
        this.campaign = res;
        //get status
        if(this.currentDay < this.campaign.startDay) {
          this.campaign.status = this.statusColumn[0];
        } else if(this.currentDay > this.campaign.startDay && this.currentDay < this.campaign.endDay){
          this.campaign.status = this.statusColumn[1];
        } else {
          this.campaign.status = this.statusColumn[2];
        }
        this.imageUrl = this.campaign.image;
      });
    //get criteria
    this.campaignService
      .getCriterions(this.campaignId)
      .subscribe((data) => (this.criterions = data["criterions"]));

      
      //get chart
      this.data = {
        labels: ['Tham gia chiến dịch','Không tham gia chiến dịch'],
        datasets: [
            {
                data: [4,1],
                backgroundColor: [
                    "#FF6384",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#FFCE56"
                ]
            }
        ]
    };
    //get review
    this.campaignService.getReview(this.campaignId).subscribe(res => {
      this.reviews = res['reviews'];
    })

    //get reviewer from campus 
    this.campaignService.getReviewer(this.campaign.campusId).subscribe(res => {
      this.reviewers = res['reviewers'];
    })
  }

  onDiscard(): void {
    this.router.navigate(["./campaign"]);
  }
  editCriteria(criteria: Criteria) {
    console.log(criteria);
    this.criteria = { ...criteria };
  }

  deleteCriteria(criteria: Criteria) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xoá tiêu chí " + criteria.name + "?",
      header: "Xác nhận",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.criterions = this.criterions.filter(
          (val) => val.id !== criteria.id
        );
        this.criteria = new Criteria();
        this.messageService.add({
          severity: "success",
          summary: "Thành công!",
          detail: "Xoá chiến dịch thành công",
          life: 3000,
        });
      },
    });
  }

  openCriteriaOfReview(review) {

  }
}
