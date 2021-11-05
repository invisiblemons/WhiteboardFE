import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AngularFireStorage } from "angularfire2/storage";
import { ConfirmationService, MessageService } from "primeng/api";
import { finalize } from "rxjs/operators";
import { University } from "./university.model";
import { UniversityService } from "./university.service";

@Component({
  selector: "app-university",
  templateUrl: "./university.component.html",
  styleUrls: ["./university.component.scss"],
})
export class UniversityComponent implements OnInit {

  first = 0;

  rows = 5;
  
  universities: University[];

  rootDataUniversities: University[];

  university: University;

  newUniverisityDialog: boolean;

  searchUniResults: University[];

  isShowSpin: boolean;

  imgSrc: string;

  selectedImage: any;

  searchText: string;

  formTemplate = new FormGroup({
    imageUrl: new FormControl(""),
  });

  constructor(
    private services: UniversityService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private storage: AngularFireStorage,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchText = "";
    this.isShowSpin = true;
    this.newUniverisityDialog = false;
    this.services.getUniversities().subscribe((res) => {
      this.universities = res["universitys"];
      this.isShowSpin = false;
    });
    this.rootDataUniversities = this.universities;
  }

  // paging
  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.universities ? this.first === (this.universities.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.universities ? this.first === 0 : true;
}

// end-paging

  openNewUniversity() {
    this.newUniverisityDialog = true;
    this.university = new University(null);
    this.imgSrc = "/assets/img/weebly_image_sample.png";
  }

  searchUni() {
    this.searchUniResults = [];
    if (this.searchText !== "") {
      this.universities.forEach((uni) => {
        if (uni.name.includes(this.searchText)) {
          this.searchUniResults.push(uni);
        }
      });
      this.universities = this.searchUniResults;
    } else if (this.searchText === "") {
      this.universities = this.rootDataUniversities;
    }
  }

  openDetailUniModal(university: University) {
    this.router.navigate([
      "./university/university-detail",
      { id: university.id },
    ]);
  }

  // open modal edit & delete
  editUni(university: University) {
    this.imgSrc = university.image;
    this.university = { ...university };
    this.newUniverisityDialog = true;
  }

  deleteUni(university: University) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xoá trường " + university.name + "?",
      header: "Xác nhận",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.services.deleteUniversity(university).subscribe((res) => {
          if (res) {
            this.universities = this.universities.filter(
              (val) => val.id !== university.id
            );
            this.university = new University(null);
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Xoá trường đại học thành công",
              life: 3000,
            });
          }
        });
      },
    });
  }

  //image
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = "/assets/img/weebly_image_sample.png";
      this.selectedImage = null;
    }
  }

  hideUniDialog() {
    this.newUniverisityDialog = false;
  }

  saveUni() {
    if (this.university.name.trim()) {
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
                  this.university.image = url;
                  this.resetForm();
                });
              })
            )
            .subscribe();
        }
      }
      //update uni
      if (this.university.id) {
        this.services.updateUniversity(this.university).subscribe((res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Cập nhật trường đại học thành công",
              life: 3000,
            });
          }
        });
      } else {
        //create new campaign
        this.services.insertUniversity(this.university).subscribe((res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Tạo mới trường đại học thành công",
              life: 3000,
            });
          }
        });
      }
      this.newUniverisityDialog = false;
      this.university = new University(null);
    }
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      imageUrl: "",
    });

    this.imgSrc = "/assets/img/weebly_image_sample.png";
    this.selectedImage = null;
  }

  reloadUniversities() {
    this.isShowSpin = true;
    this.services.getReloadUniversities().subscribe((res) => {
      if (null !== res) {
        this.universities = res["universitys"];
        this.isShowSpin = false;
        this.messageService.add({
          severity: "success",
          summary: "Thành công!",
          detail: "Reload trên redis thành công",
          life: 3000,
        });
      }
    });
  }
}
