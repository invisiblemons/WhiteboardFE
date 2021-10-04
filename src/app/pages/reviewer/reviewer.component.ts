import { Component, OnInit } from '@angular/core';
import { Reviewer } from './reviewer.model';
import { ReviewerService } from './reviewer.service';

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.scss']
})
export class ReviewerComponent implements OnInit {

  reviewers: Reviewer[];

  constructor(private service: ReviewerService) { 
    this.service.get().subscribe( (res:Reviewer[]) => {
      this.reviewers = res;
      console.log(this.reviewers);
    })
  }

  ngOnInit(): void {
  }

}
