import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DashboardService } from "./dashboard.service";
import { ConfirmationService, MessageService } from "primeng/api";
import { Review } from "./dashboard.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  // publishReviews: Review[] = null;

  reviews: Review[];

  unReview: Review;

  isShow: boolean = true;

  unpublishedModal: boolean = false;

  reasons: string[];

  statuses: any[];

  message: string;

  selectedReviews: Review[];

  constructor(
    private modalService: NgbModal,
    private services: DashboardService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit() {

    this.reasons = [
      "Lỗi ưu điểm sai sự thật",
      "Lỗi nhược điểm sai sự thật",
      "Lỗi hình ảnh không liên quan",
      "Lỗi dùng từ ngữ thô tục",
      "Lỗi nội dung chứa thông tin phân biệt chủng tộc, vùng miền",
    ];
    this.statuses = [
      {label: 'Đã xét duyệt', value: 'Published'},
        {label: 'Chưa xét duyệt', value: 'Unpublished'},
        {label: 'Đang xét duyệt', value: 'Waiting'}
    ]

    //get reviews
    this.services.getReviews().subscribe((res) => {
      if (null !== res) {
        this.reviews = res["reviews"];
        this.isShow = false;
      }
    });
  }

  openUnpublishedReview(review) {
    this.unReview = review;
    this.unpublishedModal = true;
  }
  closeUnpublishedReview() {
    this.unpublishedModal = false;
  }

  openDetailReview(review) {
    this.router.navigate(["/dashboard/detail"], {
      queryParams: { id: review.id },
    });
  }

  deleteSelectedReviews() {

  }
 
}
