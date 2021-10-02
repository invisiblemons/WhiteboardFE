import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { ToggleFullscreenDirective } from './fullscreen/toggle-fullscreen.directive';
import {CardRefreshDirective} from './card/card-refresh.directive';
import {CardToggleDirective} from './card/card-toggle.directive';
import { CardComponent } from './card/card.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalAnimationComponent} from './modal-animation/modal-animation.component';
import {ModalBasicComponent} from './modal-basic/modal-basic.component';
import {SpinnerComponent} from './spinner/spinner.component';
import { MenuItems } from './menu-items/menu-items';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ClickOutsideModule} from 'ng-click-outside';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
}

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgbModule,
      ClickOutsideModule,
      PerfectScrollbarModule
  ],
  declarations: [
      AccordionAnchorDirective,
      AccordionLinkDirective,
      AccordionDirective,
      ToggleFullscreenDirective,
      CardRefreshDirective,
      CardToggleDirective,
      CardComponent,
      SpinnerComponent,
      ModalAnimationComponent,
      ModalBasicComponent,
  ],
  exports: [
      AccordionAnchorDirective,
      AccordionLinkDirective,
      AccordionDirective,
      ToggleFullscreenDirective,
      CardRefreshDirective,
      CardToggleDirective,
      CardComponent,
      SpinnerComponent,
      NgbModule,
      FormsModule,
      ReactiveFormsModule,
      ModalBasicComponent,
      ModalAnimationComponent,
      PerfectScrollbarModule,
      ClickOutsideModule
  ],
  providers: [
    MenuItems,
    {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }
  ]
})
export class SharedModule { }
