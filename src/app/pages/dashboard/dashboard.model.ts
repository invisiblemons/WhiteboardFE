export class Review {
    id: string;
    status: string;
    title: string;
    content: string;
    onDateTime: Date;
    campaignId: string;
    reviewerId: string;
    reviewerName: string;
    reviewerAvatar: string;
    reviewerEmail: string;
    campusId: string;
    campusName: string;
    universityId: string;
    universityName: string;
    pictures: PictureForReview[];
    criterions: CriterionsOfReview[];
    whyNotPublic: string;
    lengthPics: number;
    constructor() {
        
    }
}

export class PictureForReview {
    id: string;
    picture: string;
}

export class CriterionsOfReview {
    id: string;
    criteriaName: string;
    criteriaId: string;
    rating: number = 0;
}