import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFireStorage } from "angularfire2/storage";
import { ConfirmationService, MenuItem, MessageService } from "primeng/api";
import { finalize } from "rxjs/operators";
import { Campus, Major, University } from "../../university/university.model";
import { UniversityService } from "../university.service";

@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.scss']
})
export class UniversityDetailComponent implements OnInit {
  displayBasic: boolean;

  displayAllReview: boolean;

  universityId: string;

  university: University;

  campuses: Campus[];

  campus: Campus;

  campusName: string;

  campusNameList = [];

  campusDialog: boolean;

  majorDialog: boolean;

  majorsOfCampus: Major[];

  major: Major;

  imageLogo: string;

  data: any;

  statusColumn: string[];

  currentDay: Date;

  imgSrc: string;

  allReviewData: any;

  allReviewOptions: any;

  aReviewData: any;

  aReviewOptions: any;

  selectedImage: any;

  //properties for upload image
  imageUrl: string;

  formTemplate = new FormGroup({
    imageUrl: new FormControl('')
  })

  constructor(
    private services: UniversityService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private storage: AngularFireStorage,
  ) {}

  ngOnInit(): void {
    this.currentDay = new Date();
    this.displayBasic = true;
    this.universityId = this.route.snapshot.paramMap.get("id");
    //get university
    this.services
      .searchUniversityWithId(this.universityId)
      .subscribe((res) => {
        this.university = res;
        this.imageLogo = this.university.image;
      });
    
  }

  openCampusesOfUniversity(university) {
    this.services.getCampuses(university.id).subscribe(res => {
      this.campuses = res;
    })
  }

  //hide detail university modal
  onDiscard(): void {
    this.router.navigate(["./university"]);
  }

  //control in campus
  editCampus(campus: Campus) {
    this.campusDialog = true;
    this.campusName = campus.name;
    this.campus = { ...campus };
  }

  deleteCampus(campus: Campus) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xoá campus " + campus.name + "?",
      header: "Xác nhận",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.services.deleteCampus(campus.id).subscribe((res) => {
          if (res) {
            this.campuses = this.campuses.filter(
              (val) => val.id !== campus.id
            );
            this.campus = new Campus(null);
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Xoá chiến dịch thành công",
              life: 3000,
            });
          }
        });
      },
    });
  }

  openNewCampus() {
    this.campus = new Campus(null);
    this.campusDialog = true;
    this.campusName = "";
    this.imgSrc = '/assets/img/weebly_image_sample.png';
  }

  //control in campus modal
  saveCampus() {
    this.campus.name = this.campusName;
    if (this.campus.name.trim()) {
      //check to upload image
      if (null !== this.selectedImage) {
        if (this.formTemplate.valid) {
          var filePath = `${this.selectedImage.name
            .split(".")
            .slice(0, -1)
            .join(".")}_${new Date().getTime()}`;
          const fileRef = this.storage.ref(filePath);
          this.storage
            .upload(filePath, this.selectedImage)
            .snapshotChanges()
            .pipe(
              finalize(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                  this.campus.image = url;
                  this.resetForm();
                });
              })
            )
            .subscribe();
        }
      }
      //update campus
      if (this.campus.id) {
        this.services.updateCampus(this.campus).subscribe((res) => {
          if (res) {
            this.services
              .getCampuses(this.universityId)
              .subscribe((data) => (this.campuses = data["campuses"]));
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Cập nhật campus thành công",
              life: 3000,
            });
          }
        });
      } else { //new campus
        this.services.insertCampus(this.campus).subscribe((res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Tạo mới tiêu chí thành công",
              life: 3000,
            });
            this.services
              .getCampuses(this.universityId)
              .subscribe((data) => (this.campuses = data["campuses"]));
          }
        });
      }
      this.campusDialog = false;
      this.campus = new Campus(null);
    }
  }

  hideCampusDialog() {
    this.campusDialog = false;
  }

  //image
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '/assets/img/weebly_image_sample.png';
      this.selectedImage = null;
    }
  }
  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      imageUrl: ''
    });
    
    this.imgSrc = '/assets/img/weebly_image_sample.png';
    this.selectedImage = null;
  }

  openMajorOfCampus(campus) {
    this.services.getMajorsOfCampus(campus.id).subscribe(res => {
      this.majorsOfCampus = res;
    })
  }
  
  //control in Major modal
  saveMajor() {
    if (this.major.code.trim()) {
      //update Major
      if (this.major.code) {
        this.services.updateMajor(this.major).subscribe((res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Cập nhật ngành học thành công",
              life: 3000,
            });
            this.services
              .getMajorsOfCampus(this.campus.id)
              .subscribe((data) => (this.majorsOfCampus = data["majors"]));
          }
        });
      } else { //new Major
        this.services.insertMajor(this.major).subscribe((res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Tạo mới ngành học thành công",
              life: 3000,
            });
            this.services
              .getMajorsOfCampus(this.campus.id)
              .subscribe((data) => (this.majorsOfCampus = data["majors"]));
          }
        });
      }
      this.majorDialog = false;
      this.major = new Major(null);
    }
  }

  hideMajorDialog() {
    this.majorDialog = false;
  }
}
