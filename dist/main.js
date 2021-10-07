(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-navbar/auth-navbar.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-navbar/auth-navbar.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<nav class=\" navbar navbar-expand-lg navbar-absolute fixed-top\" [ngClass]=\"{'bg-white': isCollapsed === false, 'navbar-transparent': isCollapsed === true}\">\r\n    <div class=\" container-fluid\">\r\n      <div class=\" navbar-wrapper\">\r\n        <div class=\" navbar-toggle d-inline\">\r\n          <button class=\" navbar-toggler\" type=\"button\">\r\n            <span class=\" navbar-toggler-bar bar1\">\r\n            </span>\r\n            <span class=\" navbar-toggler-bar bar2\">\r\n            </span>\r\n            <span class=\" navbar-toggler-bar bar3\">\r\n            </span>\r\n          </button>\r\n        </div>\r\n        <a class=\" navbar-brand\" style=\"color: #53D8B2;\" href=\"https://master.dk8p2ylnpgbff.amplifyapp.com/\">\r\n          Go to WhiteBoard Page!\r\n        </a>\r\n      </div>\r\n      <button aria-label=\"Toggle navigation\" class=\" navbar-toggler\" [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\" id=\"navigation\" type=\"button\">\r\n        <span class=\" navbar-toggler-bar navbar-kebab\">\r\n        </span>\r\n        <span class=\" navbar-toggler-bar navbar-kebab\">\r\n        </span>\r\n        <span class=\" navbar-toggler-bar navbar-kebab\">\r\n        </span>\r\n      </button>\r\n      <div class=\" navbar-collapse\" [collapse]=\"isCollapsed\" id=\"navigation\">\r\n        <ul class=\" navbar-nav ml-auto\">\r\n          <!-- <li class=\" nav-item\">\r\n            <a class=\" nav-link text-primary\" [routerLink]=\"['/dashboard']\">\r\n              <i class=\" tim-icons icon-minimal-left\">\r\n              </i>\r\n              Back to Dashboard\r\n            </a>\r\n          </li>\r\n          <li class=\" nav-item\">\r\n            <a class=\" nav-link\" [routerLink]=\"['/pages/register']\">\r\n              <i class=\" tim-icons icon-laptop\">\r\n              </i>\r\n              Register\r\n            </a>\r\n          </li>\r\n          <li class=\" nav-item\">\r\n            <a class=\" nav-link\" [routerLink]=\"['/pages/login']\">\r\n              <i class=\" tim-icons icon-single-02\">\r\n              </i>\r\n              Login\r\n            </a>\r\n          </li>\r\n          <li class=\" nav-item active\">\r\n            <a class=\" nav-link\" [routerLink]=\"['/pages/pricing']\">\r\n              <i class=\" tim-icons icon-coins\">\r\n              </i>\r\n              Pricing\r\n            </a>\r\n          </li>\r\n          <li class=\" nav-item\">\r\n            <a class=\" nav-link\" [routerLink]=\"['/pages/lock']\">\r\n              <i class=\" tim-icons icon-lock-circle\">\r\n              </i>\r\n              Lock\r\n            </a>\r\n          </li> -->\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card {{ fullCard }}\" [@cardClose]=\"cardClose\" [ngClass]=\"cardClass\">\n  <div class=\"card-header\" *ngIf=\"title\">\n    <h5>{{ title }}</h5>\n    <span *ngIf=\"!classHeader\">{{ headerContent }}</span>\n    <span *ngIf=\"classHeader\">\n      <ng-content select=\".code-header\"></ng-content>\n    </span>\n    <div class=\"card-header-right\">\n      <i class=\"icofont icofont-rounded-down\" cardToggleEvent (click)=\"toggleCard()\"></i>\n      <i class=\"fa {{ fullCardIcon }} full-card\" (click)=\"fullScreen($event)\"></i>\n      <i class=\"icofont icofont-refresh\" cardRefresh></i>\n      <i class=\"icofont icofont-close-circled\" (click)=\"closeCard()\"></i>\n    </div>\n  </div>\n\n  <div [@cardToggle]=\"cardToggle\">\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fixed-plugin/fixed-plugin.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fixed-plugin/fixed-plugin.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" fixed-plugin\">\n  <div class=\"show-dropdown dropdown\" dropdown [insideClick]=\"true\">\n    <a\n      id=\"button-basic\"\n      data-toggle=\"dropdown\"\n      dropdownToggle\n      class=\"dropdown-toggle\"\n      aria-controls=\"dropdown-basic\"\n    >\n      <i class=\" fa fa-cog fa-2x\"> </i>\n    </a>\n\n    <ul\n      id=\"dropdown-basic\"\n      *dropdownMenu\n      class=\"dropdown-menu\"\n      role=\"menu\"\n      aria-labelledby=\"button-basic\"\n    >\n      <li class=\" header-title\">Sidebar Background</li>\n      <li class=\" adjustments-line\">\n        <a class=\" switch-trigger background-color\" href=\"javascript:void(0)\">\n          <div class=\" badge-colors text-center\">\n            <span\n              class=\" badge filter badge-primary\"\n              [ngClass]=\"{ active: sidebarColor === 'primary' }\"\n              (click)=\"changeSidebarColor('primary')\"\n            >\n            </span>\n            <span\n              class=\" badge filter badge-info\"\n              [ngClass]=\"{ active: sidebarColor === 'blue' }\"\n              (click)=\"changeSidebarColor('blue')\"\n            >\n            </span>\n            <span\n              class=\" badge filter badge-success\"\n              [ngClass]=\"{ active: sidebarColor === 'green' }\"\n              (click)=\"changeSidebarColor('green')\"\n            >\n            </span>\n            <span\n              class=\"badge filter badge-warning\"\n              [ngClass]=\"{ active: sidebarColor === 'orange' }\"\n              (click)=\"changeSidebarColor('orange')\"\n            ></span>\n            <span\n              class=\" badge filter badge-danger\"\n              [ngClass]=\"{ active: sidebarColor === 'red' }\"\n              (click)=\"changeSidebarColor('red')\"\n            >\n            </span>\n          </div>\n          <div class=\" clearfix\"></div>\n        </a>\n      </li>\n      <li class=\"header-title\">Sidebar Mini</li>\n      <li class=\"adjustments-line\">\n        <div class=\"togglebutton switch-sidebar-mini\">\n          <span class=\"label-switch\">OFF</span>\n          <bSwitch\n            [switch-on-color]=\"'primary'\"\n            [switch-off-text]=\"' '\"\n            [switch-on-text]=\"' '\"\n            [(ngModel)]=\"state\"\n            (onChangeState)=\"onChange($event)\"\n            (click)=\"onChange($event)\"\n          ></bSwitch>\n          <span class=\"label-switch label-right\">ON</span>\n        </div>\n      </li>\n      <li class=\" adjustments-line text-center color-change\">\n        <div class=\"togglebutton switch-sidebar-mini\">\n          <span class=\"label-switch\"> LIGHT MODE </span>\n          <bSwitch\n            [switch-on-color]=\"'primary'\"\n            [switch-off-text]=\"' '\"\n            [switch-on-text]=\"' '\"\n            [(ngModel)]=\"dashboardColor\"\n            (onChangeState)=\"onChangeDashboardColor($event)\"\n            (click)=\"onChangeDashboardColor($event)\"\n          ></bSwitch>\n          <span class=\"label-switch label-right\"> DARK MODE </span>\n        </div>\n      </li>\n      <li class=\"button-container mt-4\">\n        <a\n          href=\"http://demos.creative-tim.com/black-dashboard-pro-angular/#/documentation/overview\"\n          class=\"btn btn-default btn-block btn-round\"\n        >\n          Documentation\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\" footer\">\n  <div class=\" container-fluid\">\n    <div class=\" copyright\">\n      &copy; {{ test | date: \"yyyy\" }} Copy by Mons\n      <i class=\" tim-icons icon-heart-2\"> </i> from\n      <a href=\"https://www.creative-tim.com?ref=bdpa-footer\" target=\"_blank\">\n        Creative Tim\n      </a>\n      for a better web.\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\" navbar navbar-expand-lg navbar-absolute\" [ngClass]=\"{'bg-white': isCollapsed === false, 'navbar-transparent': isCollapsed === true}\">\n  <div class=\" container-fluid\">\n    <div class=\" navbar-wrapper\">\n      <div class=\" navbar-minimize d-inline\">\n        <button\n          class=\" minimize-sidebar btn btn-link btn-just-icon\"\n          tooltil=\"Sidebar toggle\"\n          placement=\"right\"\n          (click)=\"minimizeSidebar()\"\n        >\n          <i class=\" tim-icons icon-align-center visible-on-sidebar-regular\">\n          </i>\n          <i class=\" tim-icons icon-bullet-list-67 visible-on-sidebar-mini\">\n          </i>\n        </button>\n      </div>\n      <div class=\" navbar-toggle d-inline\">\n        <button class=\" navbar-toggler\" type=\"button\" (click)=\"sidebarOpen()\">\n          <span class=\" navbar-toggler-bar bar1\"> </span>\n          <span class=\" navbar-toggler-bar bar2\"> </span>\n          <span class=\" navbar-toggler-bar bar3\"> </span>\n        </button>\n      </div>\n    </div>\n    <button\n      aria-label=\"Toggle navigation\"\n      class=\" navbar-toggler\"\n      [attr.aria-expanded]=\"!isCollapsed\"\n      (click)=\"isCollapsed = !isCollapsed\"\n      id=\"navigation\"\n      type=\"button\"\n    >\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n    </button>\n    <div\n      class=\" navbar-collapse\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <ul class=\" navbar-nav ml-auto\">\n        <!-- <li class=\" search-bar input-group\">\n          <button\n            class=\" btn btn-link\"\n            data-target=\"#searchModal\"\n            (click)=\"searchModal.show()\"\n            id=\"search-button\"\n          >\n            <i class=\" tim-icons icon-zoom-split\"> </i>\n            <span class=\" d-lg-none d-md-block\"> Search </span>\n          </button>\n        </li> -->\n        <li class=\" dropdown nav-item\" dropdown>\n          <a\n            class=\" dropdown-toggle nav-link dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            dropdownToggle\n            href=\"javascript:void(0)\"\n            (click)=\"$event.preventDefault()\"\n          >\n            <div class=\" notification d-none d-lg-block d-xl-block\"></div>\n            <i class=\" tim-icons icon-sound-wave\"> </i>\n            <p class=\" d-lg-none\">Notifications</p>\n          </a>\n          <ul\n            class=\" dropdown-menu dropdown-menu-right dropdown-navbar\"\n            *dropdownMenu\n          >\n            <li class=\" nav-link\">\n              <a class=\" nav-item dropdown-item\" href=\"#\">\n                Mike John responded to your email\n              </a>\n            </li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item dropdown-item\" href=\"javascript:void(0)\">\n                You have 5 more tasks\n              </a>\n            </li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item dropdown-item\" href=\"javascript:void(0)\">\n                Your friend Michael is in town\n              </a>\n            </li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item dropdown-item\" href=\"javascript:void(0)\">\n                Another notification\n              </a>\n            </li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item dropdown-item\" href=\"javascript:void(0)\">\n                Another one\n              </a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"dropdown nav-item\" dropdown placement=\"bottom left\">\n          <a\n            class=\"nav-link dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            dropdownToggle\n            href=\"#\"\n            (click)=\"$event.preventDefault()\"\n          >\n            <div class=\" photo\">\n              <img alt=\"Profile Photo\" src=\"{{avatarUrl}}\" />\n            </div>\n            <b class=\" caret d-none d-lg-block d-xl-block\"> </b>\n            <p class=\" d-lg-none\">Log out</p>\n          </a>\n          <ul\n            class=\" dropdown-menu dropdown-navbar dropdown-menu-right\"\n            *dropdownMenu\n          >\n          <li class=\" nav-item\">\n            <span style=\"color: black; font-weight: 500; margin-left: 18px;\">{{name}}</span>\n          </li>\n            <li class=\" dropdown-divider\"></li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item dropdown-item\" [routerLink]=\"['/']\" (click)=\"signOut()\">\n                Log out\n              </a>\n            </li>\n          </ul>\n        </li>\n        <li class=\" separator d-lg-none\"></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div\n  aria-hidden=\"true\"\n  aria-labelledby=\"searchModal\"\n  bsModal\n  class=\" modal modal-search fade\"\n  #searchModal=\"bs-modal\"\n  id=\"searchModal\"\n  role=\"dialog\"\n  tabindex=\"-1\"\n>\n  <div class=\" modal-dialog\" role=\"document\">\n    <div class=\" modal-content\">\n      <div class=\" modal-header\">\n        <input\n          class=\" form-control\"\n          id=\"inlineFormInputGroup\"\n          placeholder=\"SEARCH\"\n          type=\"text\"\n        />\n        <button\n          aria-label=\"Close\"\n          class=\" close\"\n          (click)=\"searchModal.hide()\"\n          data-dismiss=\"modal\"\n          type=\"button\"\n        >\n          <i class=\" tim-icons icon-simple-remove\"> </i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/picture-upload/picture-upload.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/picture-upload/picture-upload.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fileinput text-center\">\n  <input type=\"file\" (change)=\"handleImageChange($event)\" #fileInput />\n  <div class=\"thumbnail\" [ngClass]=\"{ 'img-circle': avatar }\">\n    <img src=\"{{ imagePreviewUrl }}\" alt=\"...\" />\n  </div>\n  <div>\n    <button\n      *ngIf=\"file === null && avatar\"\n      class=\"btn-round btn btn-danger\"\n      (click)=\"handleClick()\"\n    >\n      Add Photo\n    </button>\n    <button\n      *ngIf=\"file === null && !avatar\"\n      class=\"btn-round btn btn-primary\"\n      (click)=\"handleClick()\"\n    >\n      Select image\n    </button>\n    <span *ngIf=\"file !== null\">\n      <button class=\"btn-round btn btn-primary\" (click)=\"handleClick()\">\n        Change\n      </button>\n      <br *ngIf=\"avatar\" />\n      <button class=\"btn-round btn btn-danger\" (click)=\"handleRemove()\">\n        <i class=\"fa fa-times\"></i> Remove\n      </button>\n    </span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a\n      href=\"javascript:void(0);\"\n      [routerLink]=\"'/'\"\n      class=\"simple-text logo-mini\"\n    >\n      <div class=\"logo-img\">\n        <img src=\"assets/img/logo.png\" />\n      </div>\n    </a>\n    <a\n    href=\"javascript:void(0);\"\n    [routerLink]=\"'/'\"\n      class=\"simple-text logo-normal\"\n    >\n      Whiteboard\n    </a>\n  </div>\n  <ul class=\"nav\">\n    <li *ngFor=\"let menuitem of menuItems\" routerLinkActive=\"active\">\n      <!--If is a single link-->\n      <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\n        <i class=\"{{ menuitem.icontype }}\"></i>\n        <p>{{ menuitem.title }}</p>\n      </a>\n      <!--If it have a submenu-->\n      <a\n        data-toggle=\"collapse\"\n        routerLinkActive=\"active\"\n        *ngIf=\"menuitem.type === 'sub'\"\n        (click)=\"menuitem.isCollapsed = !menuitem.isCollapsed\"\n        [attr.aria-expanded]=\"!menuitem.isCollapsed\"\n        [attr.aria-controls]=\"menuitem.collapse\"\n      >\n        <i class=\"{{ menuitem.icontype }}\"></i>\n        <p>{{ menuitem.title }}<b class=\"caret\"></b></p>\n      </a>\n\n      <!--Display the submenu items-->\n      <div\n        id=\"{{ menuitem.collapse }}\"\n        class=\"collapse\"\n        *ngIf=\"menuitem.type === 'sub'\"\n        [collapse]=\"menuitem.isCollapsed\"\n        [isAnimated]=\"true\"\n      >\n        <ul class=\"nav\">\n          <li\n            *ngFor=\"let childitems of menuitem.children\"\n            routerLinkActive=\"active\"\n          >\n            <!--If is a single link-->\n            <a\n              [routerLink]=\"[menuitem.path, childitems.path]\"\n              *ngIf=\"childitems.type === 'link'\"\n            >\n              <span class=\"sidebar-mini-icon\">{{ childitems.smallTitle }}</span>\n              <span class=\"sidebar-normal\">{{ childitems.title }}</span>\n            </a>\n            <!--If it have a submenu-->\n            <a\n              data-toggle=\"collapse\"\n              (click)=\"childitems.isCollapsed = !childitems.isCollapsed\"\n              [attr.aria-expanded]=\"!childitems.isCollapsed\"\n              [attr.aria-controls]=\"childitems.collapse\"\n              *ngIf=\"childitems.type === 'sub'\"\n            >\n              <span class=\"sidebar-mini-icon\">{{ childitems.smallTitle }}</span>\n              <span class=\"sidebar-normal\"\n                >{{ childitems.title }}<b class=\"caret\"></b\n              ></span>\n            </a>\n            <!--Display the submenu items-->\n            <div\n              id=\"{{ childitems.collapse }}\"\n              class=\"collapse\"\n              *ngIf=\"childitems.type === 'sub'\"\n              [collapse]=\"childitems.isCollapsed\"\n              [isAnimated]=\"true\"\n            >\n              <ul class=\"nav\">\n                <li\n                  *ngFor=\"let childitem of childitems.children\"\n                  routerLinkActive=\"active\"\n                >\n                  <a [routerLink]=\"[menuitem.path, childitem.path]\">\n                    <span class=\"sidebar-mini-icon\">{{\n                      childitem.smallTitle\n                    }}</span>\n                    <span class=\"sidebar-normal\">{{ childitem.title }}</span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\" navbar-minimize-fixed d-inline\" (click)=\"minimizeSidebar()\">\n    <button\n      class=\" minimize-sidebar btn btn-link btn-just-icon\"\n      placement=\"right\"\n    >\n      <i class=\" tim-icons icon-align-center visible-on-sidebar-regular\"> </i>\n      <i class=\" tim-icons icon-bullet-list-67 visible-on-sidebar-mini\"> </i>\n    </button>\n  </div>\n  <div class=\"sidebar\"><app-sidebar></app-sidebar></div>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </div>\n</div>\n<app-fixed-plugin></app-fixed-plugin>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper wrapper-full-page\">\n  <div class=\"main-panel\">\n  <app-auth-navbar></app-auth-navbar>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _pages_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/auth-guard.service */ "./src/app/pages/login/auth-guard.service.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");






var routes = [
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"],
        canActivate: [_pages_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./pages/dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
            },
            {
                path: 'reviewer',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-reviewer-reviewer-module */ "pages-reviewer-reviewer-module").then(__webpack_require__.bind(null, /*! ./pages/reviewer/reviewer.module */ "./src/app/pages/reviewer/reviewer.module.ts")).then(function (m) { return m.ReviewerModule; }); }
            },
            {
                path: 'campaign',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-campaign-campaign-module */ "pages-campaign-campaign-module").then(__webpack_require__.bind(null, /*! ./pages/campaign/campaign.module */ "./src/app/pages/campaign/campaign.module.ts")).then(function (m) { return m.CampaignModule; }); }
            },
            {
                path: 'university',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-university-university-module */ "pages-university-university-module").then(__webpack_require__.bind(null, /*! ./pages/university/university.module */ "./src/app/pages/university/university.module.ts")).then(function (m) { return m.UniversityModule; }); }
            }
        ]
    },
    {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                redirectTo: 'auth',
                pathMatch: 'full'
            },
            {
                path: 'auth',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-login-auth-module */ "pages-login-auth-module").then(__webpack_require__.bind(null, /*! ./pages/login/auth.module */ "./src/app/pages/login/auth.module.ts")).then(function (m) { return m.AuthModule; }); }
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { initialNavigation: 'enabled' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _pages_login_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/auth.service */ "./src/app/pages/login/auth.service.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/index.js");
/* harmony import */ var _pages_login_jwt_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/login/jwt.interceptor */ "./src/app/pages/login/jwt.interceptor.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_11__["AuthLayoutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebaseConfig),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
            ],
            providers: [
                _pages_login_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _pages_login_jwt_interceptor__WEBPACK_IMPORTED_MODULE_17__["JwtIntercepter"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/auth-navbar/auth-navbar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/auth-navbar/auth-navbar.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC1uYXZiYXIvYXV0aC1uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/auth-navbar/auth-navbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/auth-navbar/auth-navbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: AuthNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNavbarComponent", function() { return AuthNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");





var misc = {
    sidebar_mini_active: true
};
var AuthNavbarComponent = /** @class */ (function () {
    function AuthNavbarComponent(location, toastr) {
        this.toastr = toastr;
        this.isCollapsed = true;
        this.location = location;
    }
    AuthNavbarComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName("body")[0];
        if (body.classList.contains("sidebar-mini")) {
            misc.sidebar_mini_active = true;
        }
        else {
            misc.sidebar_mini_active = false;
        }
        if (misc.sidebar_mini_active === true) {
            body.classList.remove("sidebar-mini");
            misc.sidebar_mini_active = false;
            this.showSidebarMessage("Sidebar mini deactivated...");
        }
        else {
            body.classList.add("sidebar-mini");
            this.showSidebarMessage("Sidebar mini activated...");
            misc.sidebar_mini_active = true;
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event("resize"));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    AuthNavbarComponent.prototype.showSidebarMessage = function (message) {
        this.toastr.show('<span data-notify="icon" class="tim-icons icon-bell-55"></span>', message, {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-top-right"
        });
    };
    AuthNavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
    };
    AuthNavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    AuthNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-auth-navbar",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auth-navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-navbar/auth-navbar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./auth-navbar.component.scss */ "./src/app/components/auth-navbar/auth-navbar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AuthNavbarComponent);
    return AuthNavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/card/card-animation.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card-animation.ts ***!
  \***************************************************/
/*! exports provided: cardToggle, cardClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardToggle", function() { return cardToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardClose", function() { return cardClose; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");


var cardToggle = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('cardToggle', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        overflow: 'hidden',
        height: '0px',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('collapsed <=> expanded', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
    ])
]);
var cardClose = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("cardClose", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 1
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0,
        display: 'none'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("open <=> closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("400ms")),
]);


/***/ }),

/***/ "./src/app/components/card/card.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/card/card.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-header-right {\r\n    z-index: 999;\r\n}\r\n\r\n.card.full-card {\r\n  position: fixed;\r\n  top: 56px;\r\n  z-index: 99999;\r\n  box-shadow: none;\r\n  left: 0;\r\n  border-radius: 0;\r\n  border: 1px solid #ddd;\r\n  width: 100vw;\r\n  height: calc(100vh - 56px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXItcmlnaHQge1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uY2FyZC5mdWxsLWNhcmQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDU2cHg7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _card_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-animation */ "./src/app/components/card/card-animation.ts");



var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.classHeader = false;
        this.cardToggle = 'expanded';
        this.cardClose = 'open';
        this.fullCardIcon = 'fa-expand';
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.toggleCard = function () {
        this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
    };
    CardComponent.prototype.closeCard = function () {
        this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
    };
    CardComponent.prototype.fullScreen = function (event) {
        this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
        this.fullCardIcon = this.fullCardIcon === 'fa-expand' ? 'fa-compress' : 'fa-expand';
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CardComponent.prototype, "headerContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CardComponent.prototype, "blockClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CardComponent.prototype, "cardClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CardComponent.prototype, "classHeader", void 0);
    CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html")).default,
            animations: [_card_animation__WEBPACK_IMPORTED_MODULE_2__["cardToggle"], _card_animation__WEBPACK_IMPORTED_MODULE_2__["cardClose"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./card.component.css */ "./src/app/components/card/card.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm5/devextreme-angular.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _picture_upload_picture_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./picture-upload/picture-upload.component */ "./src/app/components/picture-upload/picture-upload.component.ts");
/* harmony import */ var _fixed_plugin_fixed_plugin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fixed-plugin/fixed-plugin.component */ "./src/app/components/fixed-plugin/fixed-plugin.component.ts");
/* harmony import */ var _auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth-navbar/auth-navbar.component */ "./src/app/components/auth-navbar/auth-navbar.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./card/card.component */ "./src/app/components/card/card.component.ts");



















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_11__["JwBootstrapSwitchNg2Module"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxVectorMapModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_17__["AuthNavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                _picture_upload_picture_upload_component__WEBPACK_IMPORTED_MODULE_15__["PictureUploadComponent"],
                _fixed_plugin_fixed_plugin_component__WEBPACK_IMPORTED_MODULE_16__["FixedPluginComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_18__["CardComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_17__["AuthNavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                _picture_upload_picture_upload_component__WEBPACK_IMPORTED_MODULE_15__["PictureUploadComponent"],
                _fixed_plugin_fixed_plugin_component__WEBPACK_IMPORTED_MODULE_16__["FixedPluginComponent"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_18__["CardComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/fixed-plugin/fixed-plugin.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/fixed-plugin/fixed-plugin.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZml4ZWQtcGx1Z2luL2ZpeGVkLXBsdWdpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/fixed-plugin/fixed-plugin.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/fixed-plugin/fixed-plugin.component.ts ***!
  \*******************************************************************/
/*! exports provided: FixedPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function() { return FixedPluginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");



var FixedPluginComponent = /** @class */ (function () {
    function FixedPluginComponent(toastr) {
        this.toastr = toastr;
        this.sidebarColor = "red";
        this.state = true;
        this.dashboardColor = true;
    }
    FixedPluginComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.getElementsByClassName("sidebar")[0];
        var mainPanel = document.getElementsByClassName("main-panel")[0];
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute("data", color);
        }
        if (mainPanel != undefined) {
            mainPanel.setAttribute("data", color);
        }
    };
    FixedPluginComponent.prototype.changeDashboardColor = function (color) {
        var body = document.getElementsByTagName("body")[0];
        if (body && color === "white-content") {
            body.classList.add(color);
        }
        else if (body.classList.contains("white-content")) {
            body.classList.remove("white-content");
        }
    };
    FixedPluginComponent.prototype.ngOnInit = function () { };
    FixedPluginComponent.prototype.onChangeDashboardColor = function (event) {
        var body = document.getElementsByTagName("body")[0];
        if (this.dashboardColor === true) {
            this.changeDashboardColor("");
        }
        else {
            this.changeDashboardColor("white-content");
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event("resize"));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    FixedPluginComponent.prototype.onChange = function (event) {
        var body = document.getElementsByTagName("body")[0];
        if (this.state === true) {
            body.classList.remove("sidebar-mini");
        }
        else {
            body.classList.add("sidebar-mini");
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event("resize"));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    FixedPluginComponent.prototype.showSidebarMessage = function (message) {
        this.toastr.show('<span class="now-ui-icons ui-1_bell-53"></span>', message, {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-top-right"
        });
    };
    FixedPluginComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    FixedPluginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-fixed-plugin",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./fixed-plugin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fixed-plugin/fixed-plugin.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./fixed-plugin.component.scss */ "./src/app/components/fixed-plugin/fixed-plugin.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], FixedPluginComponent);
    return FixedPluginComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-footer",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_login_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/login/local-storage.service */ "./src/app/pages/login/local-storage.service.ts");







var misc = {
    sidebar_mini_active: true
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, toastr, localStorageService) {
        var _this = this;
        this.element = element;
        this.router = router;
        this.toastr = toastr;
        this.localStorageService = localStorageService;
        this.isCollapsed = true;
        // function that adds color white/transparent to the navbar on resize (this is for the collapse)
        this.updateColor = function () {
            var navbar = document.getElementsByClassName("navbar")[0];
            if (window.innerWidth < 993 && !_this.isCollapsed) {
                navbar.classList.add("bg-white");
                navbar.classList.remove("navbar-transparent");
            }
            else {
                navbar.classList.remove("bg-white");
                navbar.classList.add("navbar-transparent");
            }
        };
        this.location = location;
    }
    NavbarComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName("body")[0];
        if (body.classList.contains("sidebar-mini")) {
            misc.sidebar_mini_active = true;
        }
        else {
            misc.sidebar_mini_active = false;
        }
        if (misc.sidebar_mini_active === true) {
            body.classList.remove("sidebar-mini");
            misc.sidebar_mini_active = false;
        }
        else {
            body.classList.add("sidebar-mini");
            misc.sidebar_mini_active = true;
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event("resize"));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.showSidebarMessage = function (message) {
        this.toastr.show('<span data-notify="icon" class="tim-icons icon-bell-55"></span>', message, {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-top-right"
        });
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userToken = this.localStorageService.getUserToken();
        var user = JSON.parse(this.userToken);
        console.log(user);
        this.avatarUrl = user.avatarURL;
        this.name = user.name;
        window.addEventListener("resize", this.updateColor);
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener("resize", this.updateColor);
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = (document.getElementsByTagName("body")[0]);
        var html = document.getElementsByTagName("html")[0];
        if (window.innerWidth < 991) {
            body.style.position = "fixed";
        }
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        html.classList.add("nav-open");
        var $layer = document.createElement('div');
        $layer.setAttribute('id', 'bodyClick');
        if (html.getElementsByTagName('body')) {
            document.getElementsByTagName('body')[0].appendChild($layer);
        }
        var $toggle = document.getElementsByClassName("navbar-toggler")[0];
        $layer.onclick = function () {
            html.classList.remove('nav-open');
            setTimeout(function () {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
            var mainPanel = document.getElementsByClassName('main-panel')[0];
            if (window.innerWidth < 991) {
                setTimeout(function () {
                    mainPanel.style.position = '';
                }, 500);
            }
        }.bind(this);
        html.classList.add('nav-open');
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName("html")[0];
        this.toggleButton.classList.remove("toggled");
        var body = (document.getElementsByTagName("body")[0]);
        if (window.innerWidth < 991) {
            setTimeout(function () {
                body.style.position = "";
            }, 500);
        }
        var $layer = document.getElementById("bodyClick");
        if ($layer) {
            $layer.remove();
        }
        html.classList.remove("nav-open");
    };
    NavbarComponent.prototype.signOut = function () {
        this.localStorageService.removeUser();
        this.router.navigate(['/auth']);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _pages_login_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _pages_login_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/picture-upload/picture-upload.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/picture-upload/picture-upload.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fileinput input{\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waWN0dXJlLXVwbG9hZC9waWN0dXJlLXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waWN0dXJlLXVwbG9hZC9waWN0dXJlLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVpbnB1dCBpbnB1dHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/picture-upload/picture-upload.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/picture-upload/picture-upload.component.ts ***!
  \***********************************************************************/
/*! exports provided: PictureUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureUploadComponent", function() { return PictureUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var PictureUploadComponent = /** @class */ (function () {
    function PictureUploadComponent() {
        this.avatar = false;
        this.file = {};
        this.imagePreviewUrl = {};
        this.handleImageChange = this.handleImageChange.bind(this);
    }
    PictureUploadComponent.prototype.ngOnInit = function () {
        this.file = null;
        this.imagePreviewUrl =
            this.image !== undefined
                ? this.image
                : this.avatar
                    ? "assets/img/placeholder.jpg"
                    : "assets/img/image_placeholder.jpg";
    };
    PictureUploadComponent.prototype.handleImageChange = function ($event) {
        var _this = this;
        $event.preventDefault();
        var reader = new FileReader();
        var file = $event.target.files[0];
        reader.onloadend = function () {
            _this.file = file;
            _this.imagePreviewUrl = reader.result;
            // this.state.imagePreviewUrl1 = reader.result;
        };
        reader.readAsDataURL(file);
    };
    PictureUploadComponent.prototype.handleClick = function () {
        console.log(this.fileInput.nativeElement);
        this.fileInput.nativeElement.click();
    };
    PictureUploadComponent.prototype.handleRemove = function () {
        this.file = null;
        this.imagePreviewUrl =
            this.image !== undefined
                ? this.image
                : this.avatar
                    ? "assets/img/placeholder.jpg"
                    : "assets/img/image_placeholder.jpg";
        this.fileInput.nativeElement.value = null;
    };
    PictureUploadComponent.prototype.handleSubmit = function ($event) {
        $event.preventDefault();
        // this.state.file is the file/image uploaded
        // in this function you can save the image (this.state.file) on form submit
        // you have to call it yourself
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], PictureUploadComponent.prototype, "avatar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], PictureUploadComponent.prototype, "image", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("fileInput"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PictureUploadComponent.prototype, "fileInput", void 0);
    PictureUploadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-picture-upload",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./picture-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/picture-upload/picture-upload.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./picture-upload.component.css */ "./src/app/components/picture-upload/picture-upload.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PictureUploadComponent);
    return PictureUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


//Menu Items
var ROUTES = [
    {
        path: "/campaign",
        title: "Campaign",
        type: "link",
        icontype: "tim-icons icon-image-02",
        collapse: "pages",
        isCollapsed: true,
    },
    {
        path: "/dashboard",
        title: "Review",
        type: "link",
        icontype: "tim-icons icon-chart-pie-36"
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
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sidebar",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");





var misc = {
    sidebar_mini_active: true
};
var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, toastr) {
        this.router = router;
        this.toastr = toastr;
        this.showNavbarButton = function () {
            var mainPanel = document.getElementsByClassName("main-panel")[0];
            var navbarMinimize = document.getElementsByClassName("navbar-minimize-fixed")[0];
            if (document.documentElement.scrollTop > 50 ||
                document.scrollingElement.scrollTop > 50 ||
                mainPanel.scrollTop > 50) {
                navbarMinimize.style.opacity = 1;
            }
            else if (document.documentElement.scrollTop <= 50 ||
                document.scrollingElement.scrollTop <= 50 ||
                mainPanel.scrollTop <= 50) {
                navbarMinimize.style.opacity = 0;
            }
        };
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var mainPanel = document.getElementsByClassName("main-panel")[0];
        var sidebar = document.getElementsByClassName("sidebar-wrapper")[0];
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"](mainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"](sidebar);
            var tables = document.querySelectorAll(".table-responsive");
            for (var i = 0; i < tables.length; i++) {
                ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"](tables[i]);
            }
        }
        this.showNavbarButton();
    };
    AdminLayoutComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName("body")[0];
        if (body.classList.contains("sidebar-mini")) {
            misc.sidebar_mini_active = true;
        }
        else {
            misc.sidebar_mini_active = false;
        }
        if (misc.sidebar_mini_active === true) {
            body.classList.remove("sidebar-mini");
            misc.sidebar_mini_active = false;
        }
        else {
            body.classList.add("sidebar-mini");
            misc.sidebar_mini_active = true;
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event("resize"));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    AdminLayoutComponent.prototype.showSidebarMessage = function (message) {
        this.toastr.show('<span data-notify="icon" class="tim-icons icon-bell-55"></span>', message, {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-top-right"
        });
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AdminLayoutComponent.prototype, "showNavbarButton", void 0);
    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-admin-layout",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () { };
    AuthLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-auth-layout",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/layouts/auth-layout/auth-layout.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/login/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/pages/login/local-storage.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, localStorage) {
        this.router = router;
        this.localStorage = localStorage;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var exp;
        var token;
        if (null !== this.localStorage.getUserObject()) {
            exp = this.localStorage.getUserObject().exp;
            token = this.localStorage.getUserObject().token;
            if (null !== token && !this.tokenExpired(exp)) {
                return true;
            }
        }
        this.router.navigate(['/auth']);
        return false;
    };
    AuthGuardService.prototype.tokenExpired = function (exp) {
        return Math.floor(new Date().getTime() / 1000) >= exp;
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }
    ]; };
    AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/pages/login/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/pages/login/local-storage.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router, httpClient, localStorageService, ngZone) {
        this.afAuth = afAuth;
        this.router = router;
        this.httpClient = httpClient;
        this.localStorageService = localStorageService;
        this.ngZone = ngZone;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + '/api/v1.0/admins/authenticate';
    }
    AuthService.prototype.googleAuth = function () {
        var _this = this;
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider)
            .then(function (googleAuth) {
            googleAuth.user.getIdToken().then(function (tkn) { return _this.ngZone.run(function () {
                _this.httpClient.post("" + _this.baseURL, { idToken: tkn
                }).subscribe(function (res) {
                    _this.localStorageService.setUser(res);
                    _this.router.navigate(['/campaign']);
                }, function (error) {
                    console.log(error);
                    if (error.status !== 400) {
                        alert('Error in the Server, please try again later!');
                    }
                    else if (error.status === 400) {
                        alert('Your account do not have permission to sign in');
                    }
                });
            }); });
        })
            .catch(function (error) {
            console.log('Something went wrong: ', error);
        });
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        return this.afAuth.auth.signInWithPopup(provider);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/auth']);
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/pages/login/jwt.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/jwt.interceptor.ts ***!
  \************************************************/
/*! exports provided: JwtIntercepter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtIntercepter", function() { return JwtIntercepter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/pages/login/local-storage.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var JwtIntercepter = /** @class */ (function () {
    function JwtIntercepter(localStorage) {
        this.localStorage = localStorage;
    }
    JwtIntercepter.prototype.intercept = function (request, next) {
        if (this.localStorage.getUserObject()) {
            var token = this.localStorage.getUserObject().token;
            var isOkUrl = request.url.startsWith(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl);
            if (token && isOkUrl) {
                request = request.clone({
                    setHeaders: {
                        Authorization: "Bearer " + token,
                    },
                });
            }
        }
        return next.handle(request);
    };
    JwtIntercepter.ctorParameters = function () { return [
        { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }
    ]; };
    JwtIntercepter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], JwtIntercepter);
    return JwtIntercepter;
}());



/***/ }),

/***/ "./src/app/pages/login/local-storage.service.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/login/local-storage.service.ts ***!
  \******************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var USER = "user";
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setUser = function (user) {
        localStorage.setItem(USER, JSON.stringify(user));
    };
    LocalStorageService.prototype.getUserToken = function () {
        return localStorage.getItem(USER);
    };
    LocalStorageService.prototype.getUserObject = function () {
        return JSON.parse(localStorage.getItem(USER));
    };
    LocalStorageService.prototype.removeUser = function () {
        return localStorage.removeItem("user");
    };
    LocalStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAv6X14p4MsNYe77SOrsY8De1YSGr-66a0",
        authDomain: "whiteboardswd.firebaseapp.com",
        projectId: "whiteboardswd",
        storageBucket: "whiteboardswd.appspot.com",
        messagingSenderId: "546664115615",
        appId: "1:546664115615:web:931ee95b7bd3e7823da1aa",
        measurementId: "G-MD39G9K463"
    },
    apiUrl: "https://ec2-13-228-168-85.ap-southeast-1.compute.amazonaws.com"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*!

 =========================================================
 * Black Dashboard Pro Angular - v1.2.0
 =========================================================

 * Product Page: http://creative-tim.com/product/black-dashboard-pro-angular
 * Copyright 2021 Creative Tim (http://www.creative-tim.com)


 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Document\Ki 7\SWD391\White Board\WhiteboardFE-Admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map