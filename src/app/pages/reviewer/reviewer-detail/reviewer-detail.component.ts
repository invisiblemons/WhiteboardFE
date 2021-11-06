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

  reviews: Review[] = [];

  rootReviews: Review[];

  successReviews: Review[] = [];

  waitingReviews: Review[] = [];

  unpublishReviews: Review[] = [];

  countSuccessReviews: number = 0;

  countWaitingReviews: number = 0;

  countUnpublishReviews: number = 0;
  review: Review;

  reviewers: Reviewer[];

  reviewer: Reviewer;

  displayBasic: boolean;

  imageUrl: string;

  data: any;

  revieweStatusList = [];


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
      this.reviewer = res
    });
    //get review
    this.reviewerService.getReview(this.reviewerId).subscribe((res) => {
      this.reviews = res["reviews"];
      this.rootReviews = res["reviews"];

      //get success review
      this.reviews.forEach((review) => {
        if (review.status === "Published") {
          this.successReviews.push(review);
        }
      });
      console.log(this.successReviews)
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

    this.revieweStatusList.push(
      { label: "Published", value: "published" },
      { label: "Unpublished", value: "unpublished" },
      { label: "Waiting", value: "waiting" }
      );
  }

  onDiscard(): void {
    this.router.navigate(["./reviewer"]);
  }

  openDetailReview(review: Review) {
    this.router.navigate(["/dashboard/detail"], {
      queryParams: { id: review.id },
    });
  }

  deleteReview(review: Review) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xoá bài đánh giá " + review.title + "?",
      header: "Xác nhận",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.reviewerService.deleteReview(review.id).subscribe(res => {
          if (res) {
            this.reviews = this.reviews.filter(
              (val) => val.id !== review.id
            );
            this.review = new Review();
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Xoá bài đánh giá thành công",
              life: 3000,
            });
          }
        })
      },
    });
  }


  // approveReviewer(reviewer: Reviewer) {
  //   this.reviewer.status = 'Verified'; 
  //   if (this.reviewer.id) {
      
  //     this.reviewerService.updateReviewer(this.reviewer).subscribe(res => {
  //       if (res) {
  //         this.reviewerService.getReviewer().subscribe(res => {
            
  //           this.reviewers = res['reviewers'];
  //           this.reviewers.forEach(reviewer => {
              
  //             this.reviewer = { ...reviewer };
  //           });
  //         })
  //         this.messageService.add({
  //           severity: "success",
  //           summary: "Thành công!",
  //           detail: "Phê duyệt reviewer thành công",
  //           life: 3000,
  //         });
  //       }
  //     })
  //   }
  // }
  
  approveReviewer() {
    
    if(this.reviewer.id) {
      this.reviewerService.updateReviewer(this.reviewer).subscribe( res => {
          if(res) {
            this.reviewer.status = 'Verified';
              this.reviewerService.getReviewer().subscribe(res => {
                  this.reviewers = res['reviewers'];
                  this.reviewers.forEach(reviewer => {
                    this.reviewer = { ...reviewer };
                  });
              })
              this.messageService.add({
                  severity: "success",
                  summary: "Thành công!",
                  detail: "Duyệt reviewer thành công",
                  life: 3000,
                });
          }
      })
  }
  }


}
