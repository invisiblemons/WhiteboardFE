export class University {
    id: string;
    name: string;
    campus: Campus[];
    constructor() {
        this.id = "";
        this.name = "";
    }
}

export class Campus {
    id: string;
    name: string;
    address: string;
    phoneNumber: number;
    email: string;
    image: string;
    majors: Major[];
}

export class Major {
    id: string;
    name: string;
    code: string;
}