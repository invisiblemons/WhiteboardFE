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
  campaigns: Campaign[];

  campaign: Campaign;

  campaignDialog: boolean;

  campaignSubmitted: boolean;

  criterions: Criteria[];

  criteria: Criteria;

  criteriaDialog: boolean;

  criteriaSubmitted: boolean;

  constructor(
    private campaignService: CampaignService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.campaignService
      .getCampaigns()
      .subscribe((data) => (this.campaigns = data));
  }

  // open modal create
  openNewCampaign() {
    this.campaign = new Campaign();
    this.campaignSubmitted = false;
    this.campaignDialog = true;
  }

  openNewCriteria() {
    this.criteria = new Criteria();
    this.criteriaSubmitted = false;
    this.criteriaDialog = true;
  }

  // open modal edit & delete 
  editCampaign(campaign: Campaign) {
    this.campaign = { ...campaign };
    this.campaignDialog = true;
  }

  deleteCampaign(campaign: Campaign) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xoá chiến dịch " + campaign.name + "?",
      header: "Xác nhận",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.campaignService.deleteCampaign(campaign).subscribe(res => {
            if(res) {
                this.campaigns = this.campaigns.filter((val) => val.id !== campaign.id);
                this.campaign = new Campaign();
                this.messageService.add({
                  severity: "success",
                  summary: "Thành công!",
                  detail: "Xoá chiến dịch thành công",
                  life: 3000,
                });
            }
        })
        
      },
    });
  }

  editCriteria(criteria: Criteria) {
      console.log(criteria);
    this.criteria = { ...criteria };
    this.criteriaDialog = true;
  }

  deleteCriteria(criteria: Criteria) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xoá tiêu chí " + criteria.name + "?",
      header: "Xác nhận",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.criterions = this.criterions.filter((val) => val.id !== criteria.id);
        this.criteria = new Criteria();
        this.messageService.add({
          severity: "success",
          summary: "Thành công!",
          detail: "Xoá chiến dịch thành công",
          life: 3000,
        });
      },
    });
  }

  // function in modal
  hideCampaignDialog() {
    this.campaignDialog = false;
    this.campaignSubmitted = false;
  }

  hideCriteriaDialog() {
    this.criteriaDialog = false;
    this.criteriaSubmitted = false;
  }

  saveCampaign() {
    this.campaignSubmitted = true;
    if (this.campaign.name.trim()) {
        if(this.campaign.id) {
            this.campaignService.updateCampaign(this.campaign).subscribe( res => {
                if(res) {
                    this.campaignService.getCampaigns().subscribe(res => {
                        this.campaigns = res
                    })
                    this.messageService.add({
                        severity: "success",
                        summary: "Thành công!",
                        detail: "Cập nhật chiến dịch thành công",
                        life: 3000,
                      });
                }
            })
        } else{
        this.campaignService.insertCampaign(this.campaign).subscribe(res => {
            if(res) {
                this.messageService.add({
                    severity: "success",
                    summary: "Thành công!",
                    detail: "Cập nhật chiến dịch thành công",
                    life: 3000,
                  });
                this.campaignService.getCampaigns().subscribe((res: Campaign[]) => {
                    this.campaigns = res;
                })
            }
        })
    }
      this.campaignDialog = false;
      this.campaign = new Campaign();
    }
  }

  saveCriteria() {
    this.criteriaSubmitted = true;

    if (this.criteria.name.trim()) {
        this.messageService.add({
          severity: "success",
          summary: "Thành công!",
          detail: "Cập nhật tiêu chí thành công",
          life: 3000,
        });
      

      //   this.campaigns = [...this.campaigns]; cập nhật campaign
      this.criteriaDialog = false;
      this.criteria = new Criteria();
    }
  }
}
