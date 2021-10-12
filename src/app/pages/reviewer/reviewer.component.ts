import { Component, OnInit } from '@angular/core';
import { Reviewer } from './reviewer.model';
import { ReviewerService } from './reviewer.service';
import { ConfirmationService, MessageService } from "primeng/api";

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.scss']
})
export class ReviewerComponent implements OnInit {

  reviewers: Reviewer[];

  reviewer: Reviewer;

  reviewerDialog: boolean;

  constructor(
    private service: ReviewerService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
    ) {}

  ngOnInit(): void {
    this.service.getReviewer().subscribe((data) => {
      this.reviewers = data;
      console.log(data);
    })
  }

  deleteReviewer(reviewer: Reviewer) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xoá reviewer " + reviewer.name + "?",
      header: "Xác nhận",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.service.deleteReviewer(reviewer).subscribe(res => {
            if(res) {
                this.reviewers = this.reviewers.filter((val) => val.id !== reviewer.id);
                this.reviewer = new Reviewer();
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

  
}
