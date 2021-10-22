import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DashboardService } from "./dashboard.service";
import { Review } from "./dashboard.model";
import { ConfirmationService, MessageService } from "primeng/api";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  publishReviews: Review[] = null;

  waitingReviews: Review[] = null;

  unpublishedReviews: Review[] = null;

  countPublishReviews: number;

  countWaitingReviews: number;

  countUnpublishedReviews: number;

  contentSuccess: boolean;

  contentWaiting: boolean;

  contentDanger: boolean;

  isShow: boolean = true;

  constructor(
    private modalService: NgbModal,
    private services: DashboardService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.countPublishReviews = 0;
    this.countWaitingReviews = 0;
    this.countUnpublishedReviews = 0;
    //get publish reviews
    this.services.getPublishedReviews().subscribe((res) => {
      if (null !== res) {
        this.publishReviews = res["reviews"];
        this.countPublishReviews = this.publishReviews.length;
      }
    });

    //get waiting reviews
    this.services.getWaitingReviews().subscribe((res) => {
      if (null !== res) {
        this.waitingReviews = res["reviews"];
        this.countWaitingReviews = this.waitingReviews.length;
        this.isShow = false;
      }
    });

    //get unpublished reviews
    this.services.getUnpublishedReviews().subscribe((res) => {
      if (null !== res) {
        this.unpublishedReviews = res["reviews"];
        this.countUnpublishedReviews = this.unpublishedReviews.length;
      }
    });
  }

  openSuccess() {
    this.contentSuccess = true;
  }

  hideSuccess() {
    this.contentSuccess = true;
  }

  openWarning() {
    this.contentWaiting = true;
  }

  hideWarning() {
    this.contentWaiting = true;
  }

  openDanger() {
    this.contentDanger = true;
  }

  hideDanger() {
    this.contentDanger = true;
  }

  openUnpublishedReview(content) {
    this.modalService.open(content, { size: "lg" });
  }

  publishReview() {
    this.services.publicReview(this.waitingReviews[0].id).subscribe((res) => {
      if (res) {
        this.waitingReviews.shift();
        this.countPublishReviews += 1;
        this.countWaitingReviews -= 1;
        this.messageService.add({
          severity: "success",
          summary: "Thành công!",
          detail: "Bài review đã được public",
          life: 3000,
        });
      }
    });
  }

  unpublishedReview() {
    this.services.unpublicReview(this.waitingReviews[0].id).subscribe((res) => {
      if (res) {
        this.waitingReviews.shift();
        this.countUnpublishedReviews += 1;
        this.countWaitingReviews -= 1;
        this.messageService.add({
          severity: "success",
          summary: "Thành công!",
          detail: "Bài review bị từ chối public thành công",
          life: 3000,
        });
      }
    });
  }
}
