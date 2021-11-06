import { Component, OnInit } from '@angular/core';
import { Reviewer } from './reviewer.model';
import { ReviewerService } from './reviewer.service';
import { ConfirmationService, MessageService } from "primeng/api";
import { Router } from "@angular/router";
import { AngularFireStorage } from 'angularfire2/storage';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { Campus, University } from "../university/university.model";



@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.scss'],
  animations: [
    trigger("rowExpansionTrigger", [
      state(
        "void",
        style({
          transform: "translateX(-10%)",
          opacity: 0,
        })
      ),
      state(
        "active",
        style({
          transform: "translateX(0)",
          opacity: 1,
        })
      ),
      transition("* <=> *", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")),
    ]),
  ],
})
export class ReviewerComponent implements OnInit {

  first = 0;

  rows = 5;

  reviewers: Reviewer[];

  reviewer: Reviewer;

  listStatus = [];

  reviewerDialog: boolean;

  reviewerApproved: boolean;

  reviewerSubmitted: boolean;

  public selectedStatus = '';

  listReview = [];

  listReviewer = [];

  universities: University[];

  university: University;

  campus: Campus;

  hasUni: boolean = false;

  campusList: Campus[];

  isShowSpin:boolean;

  selectedReviewers: Reviewer[];

  // name: string;
  // birthday: Date;
  // email: string;
  // phoneNumber: number;
  // avatar: string;
  // certification: string;
  // publishedReview: number;
  // status: string;

  constructor(
    private service: ReviewerService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private storage: AngularFireStorage,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isShowSpin = true;
    this.service.getReviewer().subscribe((data) => {
      this.reviewers = data['reviewers'];
      this.isShowSpin = false;
    })

    this.listStatus.push(
      { label: "Đã Xác thực", value: "Verified" },
      { label: "Chưa xác thực", value: "Unverified" },
      { label: "Đã Khóa", value: "Locked" }
    );
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
    return this.reviewers
      ? this.first === this.reviewers.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.reviewers ? this.first === 0 : true;
  }

  // end-paging

  openDetailReviewer(reviewer: Reviewer) {
    this.router.navigate(["/reviewer/reviewer-detail"], {
      queryParams: { id: reviewer.id },
    });
  }

  // deleteReviewer(reviewer: Reviewer) {
  //   this.confirmationService.confirm({
  //     message: "Bạn có chắc muốn xoá reviewer " + reviewer.name + "?",
  //     header: "Xác nhận",
  //     icon: "pi pi-exclamation-triangle",
  //     accept: () => {
  //       this.service.deleteReviewer(reviewer).subscribe(res => {
  //         if (res) {
  //           this.reviewers = this.reviewers.filter((val) => val.id !== reviewer.id);
  //           this.reviewer = new Reviewer(null);
  //           this.messageService.add({
  //             severity: "success",
  //             summary: "Thành công!",
  //             detail: "Xoá reviewer thành công",
  //             life: 3000,
  //           });
  //         }
  //       })

  //     },
  //   });
  // }

  deleteReviewer(reviewer: Reviewer) {

    this.confirmationService.confirm({
      message: "Bạn có chắc muốn khoá reviewer " + reviewer.name + " không?",
      header: "Xác nhận",
      acceptLabel: "Đồng ý",
      rejectLabel: "Huỷ bỏ",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        reviewer.status = 'Locked';
        this.service.updateReviewer(reviewer).subscribe(res => {
          if (res) {
             this.reviewer = { ...reviewer };
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Khoá reviewer thành công",
              life: 3000,
            });
          }
        })
      },

    });

  }


  unDeleteReviewer(reviewer: Reviewer) {
    this.confirmationService.confirm({
      message: 'Bạn có chắc muốn gỡ khoá reviewer này không?',
      header: 'Xác nhận',
      acceptLabel: "Đồng ý",
      rejectLabel: "Huỷ bỏ",
      icon: 'pi pi-info-circle',
      accept: () => {
        reviewer.status = 'Verified';   
        this.service.updateReviewer(reviewer).subscribe(res => {
          if (res) {
            this.reviewer = { ...reviewer };
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Gỡ khoá reviewer thành công",
              life: 3000,
            });
          }
        })
      }
    });
  }

  deleteSelectedReviewers() {

  }

  
}
