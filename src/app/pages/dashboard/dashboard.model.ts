export class Review {
    id: string;
    status: string;
    content: string;
    onDateTime: Date;
    campaignId: string;
    reviewerId: string;

    constructor() {
        this.id= "";
        this.status= "";
    }
}