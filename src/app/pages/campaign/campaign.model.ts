export class Campaign {
    id: string;
    name: string;
    campusId: string;
    description: string;
    startDay: Date;
    endDay: Date;
    image: string;
    universityId: string;
    criterions: Criteria[];
    status: string;
    universityName: string;
    campusName: string;

    constructor() {
        this.name = "";
        this.description = "";
        this.startDay = new Date();
        this.endDay = new Date();
        this.image = "";
    }
}

export class Criteria {
    id: string;
    name: string;

    constructor() {
        this.id = "";
        this.name = "";
    }
}



