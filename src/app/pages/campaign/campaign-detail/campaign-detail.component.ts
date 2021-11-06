import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmationService, MenuItem, MessageService } from "primeng/api";
import { CriterionsOfReview, Review } from "../../dashboard/dashboard.model";
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
  displayBasic: boolean;

  displayAllReview: boolean;

  campaignId: string;

  campaign: Campaign;

  criterions: Criteria[];

  criterionsOfReview: CriterionsOfReview[];

  criteria: Criteria;

  criteriaName: string;

  criteriaNameList = [];

  campusId: string;

  campus: Campus;

  reviews: Review[] = [];

  rootReviews: Review[];

  review: Review;

  successReviews: Review[] = [];

  waitingReviews: Review[] = [];

  unpublishReviews: Review[] = [];

  countSuccessReviews: number = 0;

  countWaitingReviews: number = 0;

  countUnpublishReviews: number = 0;

  reviewers: Reviewer[];

  reviewer: Reviewer;

  imageUrl: string;

  data: any;

  statusColumn: string[];

  currentDay: Date;

  criteriaDialog: boolean;

  allReviewData: any;

  allReviewOptions: any;

  displaySuccessReview: boolean;

  displayWaitingReview: boolean;

  displayUnpublishReview: boolean;

  aReviewData: any;

  aReviewOptions: any;

  oneStar: number[] = [];
  twoStars: number[] = [];
  threeStars: number[] = [];
  fourStars: number[] = [];
  fiveStars: number[] = [];

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
    //get reviewer from campus
    if ("" !== this.campusId) {
      this.campaignService.getReviewer(this.campusId).subscribe((res) => {
        this.reviewers = res["reviewers"];
      });
    }

    //get review
    this.campaignService.getReview(this.campaignId).subscribe((res) => {
      this.reviews = res["reviews"];
      this.rootReviews = res["reviews"];
      //get success review
      this.reviews.forEach((review) => {
        if (review.status === "Published") {
          this.successReviews.push(review);
        }
      });
      this.countSuccessReviews = this.successReviews.length;

      //get waiting review
      this.reviews.forEach((review) => {
        if (review.status === "Waiting") {
          this.waitingReviews.push(review);
        }
      });
      this.countWaitingReviews = this.waitingReviews.length;

      //get unpublish review
      this.reviews.forEach((review) => {
        if (review.status === "Unpublished") {
          this.unpublishReviews.push(review);
        }
      });
      this.countUnpublishReviews = this.unpublishReviews.length;
    });

    //get criteria
    this.getCriterions();
    
  }

  getCriterions() {
    this.campaignService.getCriterions(this.campaignId).subscribe((data) => {
      this.criterions = data["criterions"];
      this.criterions.forEach((criteria) => {
        criteria.overallRating =
          (criteria.ratings[0] +
            criteria.ratings[1] * 2 +
            criteria.ratings[2] * 3 +
            criteria.ratings[3] * 4 +
            criteria.ratings[4] * 5) /
          (criteria.ratings[0] +
            criteria.ratings[1] +
            criteria.ratings[2] +
            criteria.ratings[3] +
            criteria.ratings[4]);
        this.criteriaNameList.push(criteria.name);
      });
      //load data chart all review
      this.criterions.forEach((criteria) => {
        this.oneStar.push(criteria.ratings[0]);
        this.twoStars.push(criteria.ratings[1]);
        this.threeStars.push(criteria.ratings[2]);
        this.fourStars.push(criteria.ratings[3]);
        this.fiveStars.push(criteria.ratings[4]);
      });
      this.allReviewData = {
        labels: this.criteriaNameList,
        datasets: [
          {
            label: "1 sao",
            backgroundColor: "#F70000",
            data: this.oneStar,
          },
          {
            label: "2 sao",
            backgroundColor: "#FF8C01",
            data: this.twoStars,
          },
          {
            label: "3 sao",
            backgroundColor: "#FDBD19",
            data: this.threeStars,
          },
          {
            label: "4 sao",
            backgroundColor: "#77C854",
            data: this.fourStars,
          },
          {
            label: "5 sao",
            backgroundColor: "#005D2E",
            data: this.fiveStars,
          },
        ],
      };
      //load bar chart
      this.allReviewOptions = {
        plugins: {
          legend: {
            labels: {
              color: "#ebedef",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#ebedef",
            },
            grid: {
              color: "rgba(255,255,255,0.2)",
            },
          },
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Số lượng bài đánh giá",
                fontColor: "#757575",
                fontSize: 12,
              },
              ticks: {
                stepSize: 1,
                beginAtZero: true,
              },
            },
          ],
          y: {
            ticks: {
              color: "#ebedef",
            },
            grid: {
              color: "rgba(255,255,255,0.2)",
            },
          },
        },
      };
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
        this.campaignService.deleteCriteria(criteria.id).subscribe((res) => {
          if (res) {
            this.getCriterions();
            this.criteria = new Criteria();
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Xoá chiến dịch thành công",
              life: 3000,
            });
          }
        });
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
    let changeCriteria: Criteria = new Criteria();
    changeCriteria.name = this.criteriaName;
    changeCriteria.id = this.criteria.id;
    changeCriteria.ratings = this.criteria.ratings;
    changeCriteria.campaignId = this.campaignId;
    if (changeCriteria.name.trim()) {
      if (changeCriteria.id) {
        this.campaignService.updateCriteria(changeCriteria).subscribe((res) => {
          if (res) {
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
        });
      } else {
        this.campaignService.insertCriteria(changeCriteria).subscribe((res) => {
          if (res) {
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
        });
      }
      this.criteriaDialog = false;
      this.criteria = new Criteria();
    }
  }

  hideCriteriaDialog() {
    this.criteriaDialog = false;
  }

  openSuccess(content) {
    this.displaySuccessReview = true;
  }

  openWarning(content) {
    this.displayWaitingReview = true;
  }

  openDanger(content) {
    this.displayUnpublishReview = true;
  }

  closeSuccessReviewModal() {
    this.displaySuccessReview = false;
    this.reviews = this.rootReviews;
  }

  closeWaitingReviewModal() {
    this.displayWaitingReview = false;
    this.reviews = this.rootReviews;
  }

  closeUnpublishReviewModal() {
    this.displayUnpublishReview = false;
    this.reviews = this.rootReviews;
  }
  //modal  review  list
  openCriteriaOfReview(review: Review) {
    this.criterionsOfReview = review.criterions;
  }
}
