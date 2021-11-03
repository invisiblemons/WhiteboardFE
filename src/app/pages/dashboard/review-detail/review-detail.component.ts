import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Review } from '../dashboard.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit {

  unpublishedModal: boolean;

  isShow: boolean;

  displayBasic: boolean;

  reviewId: string;

  review: Review;

  message: string;



  constructor(private services: DashboardService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.displayBasic = true;
    this.isShow = true;
    this.unpublishedModal = false;
    this.route.queryParams.subscribe((params) => {
      this.reviewId = params["id"];
    });

    //get review
    this.services.getReviewById(this.reviewId).subscribe((res) => {
      if (null !== res) {
        this.review = res;
        let count = 0;
        this.review.pictures.forEach(element => {
          count += 1;
        });
        this.review.lengthPics = count;
        this.isShow = false;
      }
    });
  }

  onDiscard(): void {
    this.displayBasic = false;
    this.router.navigate(["./dashboard"]);
  }

  publishReview() {
    this.services.publicReview(this.reviewId).subscribe((res) => {
      if (res) {
        this.messageService.add({
          severity: "success",
          summary: "Thành công!",
          detail: "Bài đánh giá đã được xét duyệt",
          life: 3000,
        });
      }
    });
  }

  unpublishedReview() {
    this.services.unpublicReview(this.reviewId, {"message": this.message}).subscribe((res) => {
      if (res) {
        this.unpublishedModal = false;
        this.messageService.add({
          severity: "success",
          summary: "Thành công!",
          detail: "Bài đánh giá bị từ chối xét duyệt",
          life: 3000,
        });
      }
    });
  }
}
