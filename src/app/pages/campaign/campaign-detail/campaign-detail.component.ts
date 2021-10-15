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

  criteriaName: string;

  campusId: string;

  campus: Campus;

  reviews: Review[];

  review: Review;

  reviewers: Reviewer[];

  reviewer: Reviewer;

  displayBasic: boolean;

  imageUrl: string;

  data: any;

  chartOptions: any;

  statusColumn: string[];

  currentDay: Date;

  criteriaDialog: boolean;

  constructor(
    private campaignService: CampaignService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.criteriaDialog = false;
    this.campusId = "";
    this.statusColumn = ["Chưa bắt đầu", "Đang diễn ra", "Đã kết thúc"];
    this.currentDay = new Date();
    this.displayBasic = true;
    this.campaignId = this.route.snapshot.paramMap.get("id");
    //get campaign
    this.campaignService
      .searchCampaignWithId(this.campaignId)
      .subscribe((res) => {
        this.campaign = res;
        //get status
        this.campaign.startDay = new Date(this.campaign.startDay);
        this.campaign.endDay = new Date(this.campaign.endDay);
        if (this.currentDay < this.campaign.startDay) {
          this.campaign.status = this.statusColumn[0];
        } else if (
          this.currentDay > this.campaign.startDay &&
          this.currentDay < this.campaign.endDay
        ) {
          this.campaign.status = this.statusColumn[1];
        } else if (this.currentDay > this.campaign.endDay) {
          this.campaign.status = this.statusColumn[2];
        }
        this.imageUrl = this.campaign.image;
        this.campusId = this.campaign.campusId;
      });
    //get criteria
    this.campaignService
      .getCriterions(this.campaignId)
      .subscribe((data) => (this.criterions = data["criterions"]));

    //get chart
    this.data = {
      labels: ["Tham gia", "Không tham gia"],
      datasets: [
        {
          data: [4, 1],
          backgroundColor: ["#B5D784", "#FBD551"],
          hoverBackgroundColor: ["#A3CE65", "#FACC18"],
        },
      ],
    };

    //get reviewer from campus
    if("" !== this.campusId) {
      this.campaignService.getReviewer(this.campusId).subscribe((res) => {
        this.reviewers = res["reviewers"];
      });
    }

    //get review
    this.campaignService.getReview(this.campaignId).subscribe((res) => {
      this.reviews = res["reviews"];
    });
  }

  //hide detail campaign modal
  onDiscard(): void {
    this.router.navigate(["./campaign"]);
  }

  //control in criteria
  editCriteria(criteria: Criteria) {
    this.criteriaDialog = true;
    this.criteriaName = criteria.name;
    this.criteria = { ...criteria };
  }

  deleteCriteria(criteria: Criteria) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xoá tiêu chí " + criteria.name + "?",
      header: "Xác nhận",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.campaignService.deleteCriteria(criteria.id).subscribe(res => {
          if(res) {
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
          }
        })
      },
    });
  }

  openNewCriteria() {
    this.criteria = new Criteria();
    this.criteriaDialog = true;
    this.criteriaName = "";
  }

  //control in criteria modal

  saveCriteria() {
    this.criteria.name = this.criteriaName;
    this.criteria.campaignId = this.campaignId;
    if (this.criteria.name.trim()) {
        if(this.criteria.id) {
            this.campaignService.updateCriteria(this.criteria).subscribe( res => {
                if(res) {
                  this.campaignService
                  .getCriterions(this.campaignId)
                  .subscribe((data) => (this.criterions = data["criterions"]));
                    this.messageService.add({
                        severity: "success",
                        summary: "Thành công!",
                        detail: "Cập nhật tiêu chí thành công",
                        life: 3000,
                      });
                }
            })
        } else{
        this.campaignService.insertCriteria(this.criteria).subscribe(res => {
            if(res) {
                this.messageService.add({
                    severity: "success",
                    summary: "Thành công!",
                    detail: "Tạo mới tiêu chí thành công",
                    life: 3000,
                  });
                  this.campaignService
                  .getCriterions(this.campaignId)
                  .subscribe((data) => (this.criterions = data["criterions"]));
            }
        })
    }
      this.criteriaDialog = false;
      this.criteria = new Criteria();
    }
  }

  hideCriteriaDialog() {
    this.criteriaDialog = false;
  }

  //review
  openCriteriaOfReview(review) {}
}
