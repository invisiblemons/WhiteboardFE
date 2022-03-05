export class Reviewer {
    id: string;
    fireBaseUId:string;
    name: string;
    birthday: Date;
    email: string;
    phoneNumber: number;
    avatar: string;
    certification: string;
    unpublishedReviews: number;
    publishedReview: number;
    waitingReviews: string;
    status: string;
    campusName: string;
    uniName: string;
    majorId: string;

    constructor(res) {
        if(null !== res) {
            this.id = res.id;
        this.name = res.name;
        this.birthday = res.birthday;
        this.email = res.email;
        this.phoneNumber = res.phoneNumber;
        this.avatar = res.avatar;
        this.certification = res.certification;
        this.status = res.status;
        
        }
    }
}



