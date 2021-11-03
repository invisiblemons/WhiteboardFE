import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CriterionsOfReview, PictureForReview, Review } from 'src/app/pages/dashboard/dashboard.model';
import { ReviewerService } from '../../reviewer.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit {

  reviewId: string;
  reviews: Review[] = [];

  displayBasic: boolean;

  rootReviews: Review[];

  pictures: PictureForReview[];

  criterions: CriterionsOfReview[];

  review: Review;
  constructor(
    private reviewerService: ReviewerService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.displayBasic = true;
    this.reviewId = this.route.snapshot.paramMap.get("id");
    this.reviewerService.getReviewById(this.reviewId).subscribe((res) => {
      this.review = res; 
      
      
      
    });
    
    //get picture review
    this.reviewerService.getPicturesReview().subscribe((res) => {
      this.pictures = res;
    });

    //get criterion review
    this.reviewerService.getCriterionsReview().subscribe((res) => {
      this.criterions = res;
    });
  }

  onDiscard(): void {
    this.router.navigate(["./reviewer-detail"]);
  }

}
