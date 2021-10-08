import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  smallTitle?: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  smallTitle?: string;
  title?: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  
  {
    path: "/dashboard",
    title: "Review",
    type: "link",
    icontype: "tim-icons icon-chart-pie-36"
  },
  {
    path: "/campaign",
    title: "Campaign",
    type: "link",
    icontype: "tim-icons icon-image-02",
    collapse: "pages",
    isCollapsed: true,
  },
  {
    path: "/university",
    title: "University",
    type: "link",
    icontype: "tim-icons icon-molecule-40",
    collapse: "components",
    isCollapsed: true
  },
  {
    path: "/reviewer",
    title: "Reviewer",
    type: "link",
    icontype: "tim-icons icon-notes",
    collapse: "forms",
    isCollapsed: true,
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
