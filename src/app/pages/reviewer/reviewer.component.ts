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
  //isShowSpin: boolean;
  hasUni: boolean = false;
  campusList: Campus[];

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
    this.service.getReviewer().subscribe((data) => {
      this.reviewers = data['reviewers'];
    })
    this.listStatus.push(
      { label: "Verified", value: "verified" },
      { label: "Unverified", value: "unverified" });

      this.service.getUni().subscribe((data) => {
        this.universities = data['universitys'];
      })
  }

  openDetailReviewer(reviewer: Reviewer) {
    this.router.navigate(['./reviewer/reviewer-detail', { id: reviewer.id }]);
  }

  deleteReviewer(reviewer: Reviewer) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xoá reviewer " + reviewer.name + "?",
      header: "Xác nhận",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.service.deleteReviewer(reviewer).subscribe(res => {
          if (res) {
            this.reviewers = this.reviewers.filter((val) => val.id !== reviewer.id);
            this.reviewer = new Reviewer(null);
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Xoá reviewer thành công",
              life: 3000,
            });
          }
        })

      },
    });
  }


  onChangeUni(event) {
    this.hasUni = true;
    // this.campusList = event.value['campus'];
    console.log(event.value);
    this.service.searchReviewerFromUni(event.value['id']).subscribe(res => {
      if (null !== res) {
        this.reviewers = res['reviewers'];        
      } else {
        this.reviewers = [];
      }
      //console.log(this.reviewers);
    })
  }
}
