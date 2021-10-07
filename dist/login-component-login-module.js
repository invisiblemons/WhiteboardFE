(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-component-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component/login.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component/login.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"full-page login-page \">\n    <div class=\" content\" style=\"margin-left: -230px; margin-top: 50px;\">\n      <div class=\" container\">\n        <div class=\"col-lg-4 col-md-6\"></div>\n        <div class=\" col-lg-4 col-md-6 ml-auto mr-auto\">\n          <form class=\" form\">\n            <div class=\" card card-login card-white\">\n              <div class=\" card-header\">\n                <img alt=\"\" src=\"assets/img/card-success.png\" />\n  \n                <h1 class=\" card-title\">Log in</h1>\n              </div>\n              <div class=\" card-body\">\n                \n              </div>\n              <div class=\" card-footer\">\n                <div class=\"auth-fluid\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-12\">\n                        <div class=\"login-card card-body auth-body\">\n                          <form class=\"md-float-material\">\n                            <div class=\"auth-box\">\n                              <div class=\"row m-b-20\">\n                                <div class=\"col-md-12\">\n                                  <h3 class=\"text-center txt-primary\" style=\"color: #53D8B2; font-weight: 600;\">Welcome to Whiteboard!</h3>\n                                </div>\n                              </div>\n                              <div class=\"auth-sep\"><span><span style=\"font-size: small; color: #929292;\">Sign in with one click</span></span></div>\n                              <div class=\"row m-t-30\">\n                                <div class=\"col-md-12 btn-gg\">\n                                  <a\n                                    href=\"javascript:void(0);\"\n                                    (click)=\"loginGoogle()\"\n                                    class=\"social_box google\"\n                                  >\n                                    <span class=\"icon\"\n                                      ><img\n                                        src=\"../../../assets/img/btn_google_light_normal_ios.svg\"\n                                        alt=\"\"\n                                    /></span>\n                                    <span class=\"icon_title\">Connect with Google</span>\n                                  </a>\n                                </div>\n                              </div>\n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-lg-4 col-md-6\"></div>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./src/app/pages/login/login.component/login-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/login/login.component/login-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component/login.component.ts");




var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: {
            breadcrumb: 'login'
        }
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component/login.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/login/login.component/login.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-gg {\n  padding: 20px;\n  display: inherit;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.btn-gg .google {\n  border: 1px #6CB386 solid;\n  border-radius: 3px;\n  padding-right: 10px;\n  text-decoration: none;\n  font-weight: 700;\n}\n.btn-gg .google img {\n  margin: -2px 10px -2px -2px;\n}\n.btn-gg a:hover {\n  background: #0087f4;\n  color: white;\n}\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 10px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative;\n}\n.auth-sep > span {\n  display: table-cell;\n  width: 30%;\n  white-space: nowrap;\n  padding: 0 24px;\n  color: black;\n}\n.auth-sep > span > span {\n  margin-top: -12px;\n  display: block;\n}\n.auth-sep:before, .auth-sep:after {\n  border-top: solid 1px black;\n  content: \"\";\n  height: 1px;\n  width: 35%;\n  display: table-cell;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50L0Q6XFxEb2N1bWVudFxcS2kgN1xcU1dEMzkxXFxXaGl0ZSBCb2FyZFxcV2hpdGVib2FyZEZFLUFkbWluL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudFxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjtBREFJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0VSO0FERFE7RUFDRSwyQkFBQTtBQ0dWO0FEQU07RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNFUjtBRENBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRUY7QURERTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNHSjtBREZJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDSU47QURERTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZ2cge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5nb29nbGUge1xyXG4gICAgICAgIGJvcmRlcjogMXB4ICM2Q0IzODYgc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbjogLTJweCAxMHB4IC0ycHggLTJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwODdmNDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxufVxyXG4uYXV0aC1zZXAge1xyXG4gIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmID4gc3BhbiB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAmID4gc3BhbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgJjpiZWZvcmUsICY6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgfVxyXG59XHJcbiIsIi5idG4tZ2cge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBpbmhlcml0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idG4tZ2cgLmdvb2dsZSB7XG4gIGJvcmRlcjogMXB4ICM2Q0IzODYgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmJ0bi1nZyAuZ29vZ2xlIGltZyB7XG4gIG1hcmdpbjogLTJweCAxMHB4IC0ycHggLTJweDtcbn1cbi5idG4tZ2cgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDg3ZjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmF1dGgtc2VwIHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmF1dGgtc2VwID4gc3BhbiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHdpZHRoOiAzMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmF1dGgtc2VwID4gc3BhbiA+IHNwYW4ge1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYXV0aC1zZXA6YmVmb3JlLCAuYXV0aC1zZXA6YWZ0ZXIge1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggYmxhY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMzUlO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.component/login.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/login/login.component/login.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/pages/login/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("login-page");
    };
    LoginComponent.prototype.loginGoogle = function () {
        this.authService.googleAuth();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component/login.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component/login.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/login/login.component/login.module.ts ***!
  \*************************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login.component/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component/login.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-component-login-module.js.map