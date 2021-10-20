export class University {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  image: string;
  campus: Campus[];
  constructor(data) {
    if (null !== data) {
      this.id = data.id;
      this.name = data.name;
      this.phoneNumber = data.phoneNumber;
      this.email = data.email;
    }
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

  constructor(data) {
    if (null !== data) {
        this.id = data.id;
        this.name = data.name;
        this.address = data.address;
        this.phoneNumber = data.phoneNumber;
        this.email = data.email;
        this.majors = data.majors;
      }
  }
}

export class Major {
  id: string;
  name: string;
  code: string;

  constructor(data) {
    if (null !== data) {
        this.id = data.id;
        this.name = data.name;
        this.code = data.code;
      }
  }
}
