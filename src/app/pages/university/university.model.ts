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
  phoneNumber: string;
  email: string;
  image: string;
  majors: Major[];
  universityId: string;
  constructor(data) {
    if (null !== data) {
        this.id = data.id;
        this.name = data.name;
        this.address = data.address;
        this.phoneNumber = data.phoneNumber;
        this.email = data.email;
        this.majors = data.majors;
        this.universityId = data.universityId;
      }
  }
}

export class Major {
  id: string;
  name: string;
  code: string;
  campusId: string;

  constructor(data) {
    if (null !== data) {
        this.id = data.id;
        this.name = data.name;
        this.code = data.code;
        this.campusId = data.campusId;
      }
  }
}
