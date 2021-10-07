(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reviewer-reviewer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reviewer/reviewer.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reviewer/reviewer.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n<p>reviewer works!</p>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/reviewer/reviewer-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/reviewer/reviewer-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ReviewerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerRoutingModule", function() { return ReviewerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reviewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviewer.component */ "./src/app/pages/reviewer/reviewer.component.ts");




var routes = [
    {
        path: '',
        component: _reviewer_component__WEBPACK_IMPORTED_MODULE_3__["ReviewerComponent"],
        data: {
            breadcrumb: 'reviewer'
        }
    }
];
var ReviewerRoutingModule = /** @class */ (function () {
    function ReviewerRoutingModule() {
    }
    ReviewerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReviewerRoutingModule);
    return ReviewerRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/reviewer/reviewer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/reviewer/reviewer.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jldmlld2VyL3Jldmlld2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/reviewer/reviewer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/reviewer/reviewer.component.ts ***!
  \******************************************************/
/*! exports provided: ReviewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerComponent", function() { return ReviewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _reviewer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviewer.service */ "./src/app/pages/reviewer/reviewer.service.ts");



var ReviewerComponent = /** @class */ (function () {
    function ReviewerComponent(service) {
        var _this = this;
        this.service = service;
        this.service.get().subscribe(function (res) {
            _this.reviewers = res;
            console.log(_this.reviewers);
        });
    }
    ReviewerComponent.prototype.ngOnInit = function () {
    };
    ReviewerComponent.ctorParameters = function () { return [
        { type: _reviewer_service__WEBPACK_IMPORTED_MODULE_2__["ReviewerService"] }
    ]; };
    ReviewerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reviewer',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reviewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reviewer/reviewer.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reviewer.component.scss */ "./src/app/pages/reviewer/reviewer.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_reviewer_service__WEBPACK_IMPORTED_MODULE_2__["ReviewerService"]])
    ], ReviewerComponent);
    return ReviewerComponent;
}());



/***/ }),

/***/ "./src/app/pages/reviewer/reviewer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/reviewer/reviewer.module.ts ***!
  \***************************************************/
/*! exports provided: ReviewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerModule", function() { return ReviewerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _reviewer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviewer-routing.module */ "./src/app/pages/reviewer/reviewer-routing.module.ts");
/* harmony import */ var _reviewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reviewer.component */ "./src/app/pages/reviewer/reviewer.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");






var ReviewerModule = /** @class */ (function () {
    function ReviewerModule() {
    }
    ReviewerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reviewer_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReviewerRoutingModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
            ],
            declarations: [_reviewer_component__WEBPACK_IMPORTED_MODULE_4__["ReviewerComponent"]]
        })
    ], ReviewerModule);
    return ReviewerModule;
}());



/***/ }),

/***/ "./src/app/pages/reviewer/reviewer.service.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/reviewer/reviewer.service.ts ***!
  \****************************************************/
/*! exports provided: ReviewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerService", function() { return ReviewerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ReviewerService = /** @class */ (function () {
    function ReviewerService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/v1.0/reviewers';
    }
    ReviewerService.prototype.get = function () {
        return this.httpClient.get("" + this.baseUrl);
    };
    ReviewerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ReviewerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReviewerService);
    return ReviewerService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-reviewer-reviewer-module.js.map