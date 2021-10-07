import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DxVectorMapModule } from "devextreme-angular";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { PictureUploadComponent } from "./picture-upload/picture-upload.component";
import { FixedPluginComponent } from "./fixed-plugin/fixed-plugin.component";
import { AuthNavbarComponent } from "./auth-navbar/auth-navbar.component";
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    JwBootstrapSwitchNg2Module,
    DxVectorMapModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    AuthNavbarComponent,
    SidebarComponent,
    PictureUploadComponent,
    FixedPluginComponent,
    CardComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    AuthNavbarComponent,
    SidebarComponent,
    PictureUploadComponent,
    FixedPluginComponent,
    NgbModule,
    CardComponent
  ]
})
export class ComponentsModule {}
