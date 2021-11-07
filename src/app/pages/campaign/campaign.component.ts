import { Component, OnInit } from "@angular/core";
import { Campaign, Criteria } from "./campaign.model";
import { CampaignService } from "./campaign.service";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { ConfirmationService, MessageService } from "primeng/api";
import { AngularFireStorage } from "angularfire2/storage";
import { FormControl, FormGroup } from "@angular/forms";
import { finalize } from "rxjs/operators";
import { Router } from "@angular/router";
import { Campus, University } from "../university/university.model";

@Component({
  selector: "app-campaign",
  templateUrl: "./campaign.component.html",
  styleUrls: ["./campaign.component.scss"],
  animations: [
    trigger("rowExpansionTrigger", [
      state(
        "void",
        style({
          transform: "translateX(-10%)",
          opacity: 0,
        })
      ),
      state(
        "active",
        style({
          transform: "translateX(0)",
          opacity: 1,
        })
      ),
      transition("* <=> *", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")),
    ]),
  ],
})
export class CampaignComponent implements OnInit {
  
  first = 0;

  rows = 5;

  campaigns: Campaign[];

  campaign: Campaign;

  campaignDialog: boolean;

  campaignSubmitted: boolean;

  criterions: Criteria[];

  criteria: Criteria;

  criteriaDialog: boolean;

  criteriaSubmitted: boolean;

  uploadedFiles: any[];

  universities: University[];

  universitiesModal: University[];

  university: University;

  universityModal: University;

  campusList: Campus[];

  campusListModal: Campus[];

  campus: Campus;

  campusModal: Campus;

  hasUni: boolean = false;

  hasUniModal: boolean = false;

  currentDay: Date;

  statuses: any[];

  isShowSpin: boolean;

  isShowUniCampus: boolean;

  selectedCampaigns: Campaign[];
  

  //image
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    imageUrl: new FormControl(""),
  });

  constructor(
    private campaignService: CampaignService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private storage: AngularFireStorage,
    private router: Router
  ) {}

  ngOnInit() {
    this.isShowUniCampus = false;
    this.isShowSpin = true;
    this.statuses = [
      { label: "Chưa bắt đầu", value: "NotYet" },
      { label: "Đang diễn ra", value: "OnGoing" },
      { label: "Đã kết thúc", value: "Finished" },
      { label: "Đã khoá", value: "Locked" },
    ];
    this.campaignService.getCampaigns().subscribe((data) => {
      this.campaigns = data["campaigns"];
      this.campaigns.forEach((campaign) => {
        this.formatDataCampaign(campaign);
        this.isShowSpin = false;
      });
    });
    this.campaignService.getUni().subscribe((data) => {
      this.universities = data["universitys"];
      this.universitiesModal = data["universitys"];
    });
    this.currentDay = new Date();
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
    return this.campaigns
      ? this.first === this.campaigns.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.campaigns ? this.first === 0 : true;
  }

  // end-paging

  // open modal create
  openNewCampaign() {
    this.campaign = new Campaign(null);
    this.imgSrc = "/assets/img/weebly_image_sample.png";
    this.campaignSubmitted = false;
    this.campaignDialog = true;
    this.isShowUniCampus = true;
  }

  // open modal edit & delete
  editCampaign(campaign: Campaign) {
    this.imgSrc = campaign.image;
    this.campaign = { ...campaign };
    this.campaignDialog = true;
  }

  deleteCampaign(campaign: Campaign) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xoá chiến dịch " + campaign.name + "?",
      header: "Xác nhận",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        campaign.status = "deleted";
        this.campaignService.deleteCampaign(campaign).subscribe((res) => {
          if (res) {
            this.campaigns.forEach((res,index) => {
              if(res.id === campaign.id) {delete this.campaigns[index].status}
              
            });
            this.campaign = new Campaign(null);
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

  // function in modal
  hideCampaignDialog() {
    this.campaignDialog = false;
    // this.campaignSubmitted = false;
    // //update campaign
    // if (this.campaign.id) {
    //   this.campaignService.updateCampaign(this.campaign).subscribe((res) => {
    //     if (res) {
    //       this.campaignService.getCampaigns().subscribe((res) => {
    //         this.campaigns = res["campaigns"];
    //         this.campaigns.forEach((campaign) => {
    //           this.formatDataCampaign(campaign);
    //         });
    //         this.messageService.add({
    //           severity: "success",
    //           summary: "Thành công!",
    //           detail: "Cập nhật chiến dịch thành công",
    //           life: 3000,
    //         });
    //         this.campaignDialog = false;
    //       });
    //     }
    //   });
    // } else {
    //   //create new campaign
    //   this.campaignService.insertCampaign(this.campaign).subscribe((res) => {
    //     if (res) {
    //       this.campaignService.getCampaigns().subscribe((res: Campaign[]) => {
    //         this.campaigns = res["campaigns"];
    //         this.campaigns.forEach((campaign) => {
    //           this.formatDataCampaign(campaign);
    //         });
    //         this.messageService.add({
    //           severity: "success",
    //           summary: "Thành công!",
    //           detail: "Tạo mớI chiến dịch thành công",
    //           life: 3000,
    //         });
    //         this.campaignDialog = false;
    //         this.isShowUniCampus = false;
    //       });
    //     }
    //   });
    // }
  }

  saveCampaign() {
    //check to upload image
    if (null !== this.selectedImage) {
      this.isSubmitted = true;
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
                this.campaign.image = url;
                //update campaign
                if (this.campaign.id) {
                  this.campaignService
                    .updateCampaign(this.campaign)
                    .subscribe((res) => {
                      if (res) {
                        this.campaignService.getCampaigns().subscribe((res) => {
                          this.campaigns = res["campaigns"];
                          this.campaigns.forEach((campaign, index) => {
                            this.formatDataCampaign(campaign);
                            if (this.campaign.id === campaign.id) {
                              this.campaigns[index] = this.campaign;
                            }
                          });
                        });

                        this.messageService.add({
                          severity: "success",
                          summary: "Thành công!",
                          detail: "Cập nhật chiến dịch thành công",
                          life: 3000,
                        });
                        this.resetForm();
                        this.campaignDialog = false;
                        this.campaign = new Campaign(null);
                      }
                    });
                } else {
                  //create new campaign
                  this.campaignService
                    .insertCampaign(this.campaign)
                    .subscribe((res) => {
                      if (res) {
                        this.messageService.add({
                          severity: "success",
                          summary: "Thành công!",
                          detail: "Tạo mớI chiến dịch thành công",
                          life: 3000,
                        });
                        this.formatDataCampaign(this.campaign);
                        this.campaigns = [this.campaign].concat(this.campaigns);
                        this.campaignDialog = false;
                        this.isShowUniCampus = false;
                        this.campaign = new Campaign(null);
                      }
                    });
                }
              });
            })
          )
          .subscribe();
      }
    } else if (this.campaign) {
      //update campaign
      if (this.campaign.id) {
        this.campaignService.updateCampaign(this.campaign).subscribe((res) => {
          if (res) {
            this.campaignService.getCampaigns().subscribe((res) => {
              this.campaigns = res["campaigns"];
              this.campaigns.forEach((campaign, index) => {
                this.formatDataCampaign(campaign);
                if (this.campaign.id === campaign.id) {
                  this.campaigns[index] = this.campaign;
                }
              });
              this.campaignDialog = false;
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Cập nhật chiến dịch thành công",
              life: 3000,
            });
            this.resetForm();
            this.campaign = new Campaign(null);
            });
            
          }
        });
      } else {
        //create new campaign
        this.campaignService.insertCampaign(this.campaign).subscribe((res) => {
          if (res) {
            this.messageService.add({
              severity: "success",
              summary: "Thành công!",
              detail: "Tạo mớI chiến dịch thành công",
              life: 3000,
            });
            this.campaigns = [this.campaign].concat(this.campaigns);
            this.campaignDialog = false;
            this.isShowUniCampus = false;
            this.campaign = new Campaign(null);
            this.isShowUniCampus = false;
          }
        });
      }
    }
  }

  openDetailCampaignModel(campaign: Campaign) {
    this.router.navigate(["./campaign/campaign-detail", { id: campaign.id }]);
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

  get formControls() {
    return this.formTemplate["controls"];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      imageUrl: "",
    });

    this.imgSrc = "/assets/img/weebly_image_sample.png";
    this.selectedImage = null;
    this.isSubmitted = false;
  }

  //search Uni & Campus
  onChangeUni(event) {
    this.hasUni = true;
    this.campusList = event.value["campus"];
    this.campaignService
      .searchCampaignFromUni(event.value["id"])
      .subscribe((res) => {
        if (null !== res) {
          this.campaigns = res["campaigns"];
          this.campaigns.forEach((campaign) => {
            this.formatDataCampaign(campaign);
          });
        } else {
          this.campaigns = [];
        }
      });
  }

  onChangeCampus(event) {
    this.campaignService
      .searchCampaignFromCampus(event.value["id"])
      .subscribe((res) => {
        if (null !== res) {
          this.campaigns = res["campaigns"];
          this.campaigns.forEach((campaign) => {
            this.formatDataCampaign(campaign);
          });
        } else {
          this.campaigns = [];
        }
      });
  }

  //search Uni & Campus in create campaign Modal
  onChangeUniModal(event) {
    this.hasUniModal = true;
    this.campusListModal = event.value["campus"];
  }

  onChangeCampusModal(event) {
    this.campaign.campusId = this.campusModal.id;
  }

  //method
  formatDataCampaign(campaign) {
    campaign.startDay = new Date(campaign.startDay);
    campaign.endDay = new Date(campaign.endDay);
    //get status
    if (this.currentDay < campaign.startDay) {
      campaign.status = this.statuses[0].value;
    } else if (
      this.currentDay > campaign.startDay &&
      this.currentDay < campaign.endDay
    ) {
      campaign.status = this.statuses[1].value;
    } else {
      campaign.status = this.statuses[2].value;
    }
  }
  reloadCampaign() {
    this.isShowSpin = true;
    this.campaigns = null;
    this.campaignService.getReloadCampaigns().subscribe((data) => {
      this.campaigns = data["campaigns"];
      this.messageService.add({
        severity: "success",
        summary: "Thành công!",
        detail: "Cập nhật chiến dịch trên redis thành công",
        life: 3000,
      });
      this.campaigns.forEach((campaign) => {
        this.isShowSpin = false;
        this.formatDataCampaign(campaign);
      });
      this.campaignService.reloadL2().subscribe();
    });
  }
  deleteSelectedCampaigns() {}

  
}
