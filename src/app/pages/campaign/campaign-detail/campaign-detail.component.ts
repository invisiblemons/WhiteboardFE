import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ConfirmationService, MessageService } from "primeng/api";
import { Campus } from "../../university/university.model";
import { Campaign, Criteria } from "../campaign.model";
import { CampaignService } from "../campaign.service";

@Component({
  selector: "app-campaign-detail",
  templateUrl: "./campaign-detail.component.html",
  styleUrls: ["./campaign-detail.component.scss"],
})
export class CampaignDetailComponent implements OnInit {
  campaignId: string;

  campaign: Campaign;

  criterions: Criteria[];

  criteria: Criteria;

  campus: Campus;

  displayBasic;

  data: any;

    chartOptions: any;

    statusColumn = ['Chưa bắt đầu', 'Đang diễn ra', 'Đã kết thúc'];

    currentDay;

  constructor(
    private campaignService: CampaignService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.currentDay = new Date();
    this.displayBasic = true;
    this.campaignId = this.route.snapshot.paramMap.get("id");
    //get campaign
    this.campaignService
      .searchCampaignWithId(this.campaignId)
      .subscribe((res) => {
        this.campaign = res;
        //get status
        if(this.currentDay < this.campaign.startDay) {
          this.campaign.status = this.statusColumn[0];
        } else if(this.currentDay > this.campaign.startDay && this.currentDay < this.campaign.endDay){
          this.campaign.status = this.statusColumn[1];
        } else {
          this.campaign.status = this.statusColumn[2];
        }
      });
    //get criteria
    this.campaignService
      .getCriterions(this.campaignId)
      .subscribe((data) => (this.criterions = data["criterions"]));

      //get chart
      this.data = {
        labels: ['A','B','C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }
        ]
    };
  }

  onDiscard(): void {
    this.router.navigate(["./campaign"]);
  }
  editCriteria(criteria: Criteria) {
    console.log(criteria);
    this.criteria = { ...criteria };
  }

  deleteCriteria(criteria: Criteria) {
    this.confirmationService.confirm({
      message: "Bạn có chắc muốn xoá tiêu chí " + criteria.name + "?",
      header: "Xác nhận",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.criterions = this.criterions.filter(
          (val) => val.id !== criteria.id
        );
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
}
