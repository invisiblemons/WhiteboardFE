import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewerService } from '../reviewer.service';
import { ConfirmationService, MessageService } from "primeng/api";
import { Review } from '../../dashboard/dashboard.model';
import { Reviewer } from '../reviewer.model';

@Component({
  selector: 'app-reviewer-detail',
  templateUrl: './reviewer-detail.component.html',
  styleUrls: ['./reviewer-detail.component.scss']
})
export class ReviewerDetailComponent implements OnInit {

  reviewerId: string;

  reviews: Review[];

  review: Review;

  reviewers: Reviewer[];

  reviewer: Reviewer;

  displayBasic: boolean;

  imageUrl: string;

  data: any;


  currentDay: Date;

  criteriaDialog: boolean;

  constructor(
    private reviewerService: ReviewerService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.displayBasic = true;
    this.reviewerId = this.route.snapshot.paramMap.get("id");
    this.reviewerService.getReviewerById(this.reviewerId).subscribe((res) => {
      this.reviewer = res});
    //get review
    this.reviewerService.getReview(this.reviewerId).subscribe((res) => {
      this.reviews = res["reviews"];
    });

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
  }

  onDiscard(): void {
    this.router.navigate(["./reviewer"]);
  }

  deleteReview(review: Review) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xoá review " + review.id + "?",
      header: "Xác nhận",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.reviewerService.deleteReview(review.id).subscribe(res => {
          if(res) {
            this.reviews = this.reviews.filter(
              (val) => val.id !== review.id
            );
            this.review = new Review();
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Xoá bài viết thành công",
              life: 3000,
            });
          }
        })
      },
    });
  }

  approveReviewer(reviewer: Reviewer) {
    reviewer.status = 'unverified'; 
  }

}
