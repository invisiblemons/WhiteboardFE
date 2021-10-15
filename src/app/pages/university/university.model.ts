export class University {
  id: string;
  name: string;
  campus: Campus[];
  constructor(data) {
    if (null !== data) {
      this.id = data.id;
      this.name = data.name;
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
      }
  }
}

export class Major {
  id: string;
  name: string;
  code: string;
}
