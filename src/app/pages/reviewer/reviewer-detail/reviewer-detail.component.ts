import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ConfirmationService, MessageService } from "primeng/api";
import { Review } from "../../dashboard/dashboard.model";
import { Reviewer } from "../../reviewer/reviewer.model";
import { Campus } from "../../university/university.model";
import { ReviewerService } from "../reviewer.service";


// @Component({
//   selector: "app-campaign-detail",
//   templateUrl: "./campaign-detail.component.html",
//   styleUrls: ["./campaign-detail.component.scss"],
// })
// export class CampaignDetailComponent implements OnInit {
//   reviewerId: string;

//   campus: Campus;

//   reviews: Review[];

//   review: Review;

//   reviewers: Reviewer[];

//   reviewer: Reviewer;

//   displayBasic: boolean;

//   imageUrl: string;

//   data: any;

//   currentDay: Date;

//   constructor(
//     private reviewerService: ReviewerService,
//     private route: ActivatedRoute,
//     private router: Router,
//     private messageService: MessageService,
//     private confirmationService: ConfirmationService
//   ) {}

//   ngOnInit(): void {
//     this.reviewerId = this.route.snapshot.paramMap.get("id");
//     //get campaign
//     this.reviewerService
//       .getReviewerById(this.reviewerId)
//       .subscribe((res) => {
//         this.reviewer = res;
               
//       });

//       // this.reviewerService.getReview(this.campaignId).subscribe((res) => {
//       //   this.reviews = res["reviews"];
//       // });
//   }

// }
