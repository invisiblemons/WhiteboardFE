import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public canvas: any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  avatarImgSrc: string = 'https://i.pinimg.com/originals/f0/49/af/f049af8afef82a5c4c0bea8ef8e4d7cb.jpg';
  userName: string = 'longdaica';
  userPost: string = 'Đại học FPT';

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openSuccess(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openWarning(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openDanger(content) {
    this.modalService.open(content, { size: 'xl' });
  }
}
