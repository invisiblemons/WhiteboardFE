import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DashboardService } from "./dashboard.service";
import {
  ConfirmationService,
  LazyLoadEvent,
  MessageService,
} from "primeng/api";
import { Review } from "./dashboard.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  // publishReviews: Review[] = null;

  first = 0;

  rows = 5;

  reviews: Review[];

  isShowSpin: boolean = true;

  statuses: any[];

  message: string;

  returnReviewId: string;

  constructor(
    private modalService: NgbModal,
    private services: DashboardService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.isShowSpin = true;

    this.statuses = [
      { label: "Đang xét duyệt", value: "Waiting" },
      { label: "Đã xét duyệt", value: "Published" },
      { label: "Không xét duyệt", value: "Unpublished" },
      { label: "Đã khoá", value: "Locked" },
    ];

    //get reviews
    this.services.getReviews().subscribe((res) => {
      if (null !== res) {
        this.reviews = res["reviews"];
        this.isShowSpin = false;
        this.route.queryParams.subscribe((params) => {
          this.returnReviewId = params["id"];
          this.reviews.forEach((review) => {
            if (review.id === this.returnReviewId) {
              review.status = params["status"];
            }
          });
        });
      }
    });
  }

  // paging

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.reviews
      ? this.first === this.reviews.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.reviews ? this.first === 0 : true;
  }

  // end-paging

  openDetailReview(review) {
    this.router.navigate(["/dashboard/detail"], {
      queryParams: { id: review.id },
    });
  }

  reloadReview() {
    this.reviews = null;
    this.isShowSpin = true;
    this.services.getReloadReviews().subscribe((res) => {
      if (null !== res) {
        this.reviews = res["reviews"];
        this.isShowSpin = false;
        this.messageService.add({
          severity: "success",
          summary: "Thành công!",
          detail: "Cập nhật bài viết trên redis thành công",
          life: 3000,
        });
        this.services.getReloadPublishedReviews().subscribe();
        this.services.reloadL2().subscribe();
        this.services.reloadL3().subscribe();
        this.services.reloadL4().subscribe();
        this.services.reloadL5().subscribe((res) => {
          if (null !== res) {
            console.log("test");
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Cập nhật ",
              life: 3000,
            });
          }
        });
      }
    });
  }
}
