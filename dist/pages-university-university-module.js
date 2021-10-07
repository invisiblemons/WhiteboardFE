(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-university-university-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/university/university.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/university/university.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n<p>university works!</p>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/university/university-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/university/university-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UniversityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityRoutingModule", function() { return UniversityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _university_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./university.component */ "./src/app/pages/university/university.component.ts");




var routes = [
    {
        path: '',
        component: _university_component__WEBPACK_IMPORTED_MODULE_3__["UniversityComponent"],
        data: {
            breadcrumb: 'university'
        }
    }
];
var UniversityRoutingModule = /** @class */ (function () {
    function UniversityRoutingModule() {
    }
    UniversityRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UniversityRoutingModule);
    return UniversityRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/university/university.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/university/university.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXZlcnNpdHkvdW5pdmVyc2l0eS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/university/university.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/university/university.component.ts ***!
  \**********************************************************/
/*! exports provided: UniversityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityComponent", function() { return UniversityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var UniversityComponent = /** @class */ (function () {
    function UniversityComponent() {
    }
    UniversityComponent.prototype.ngOnInit = function () {
    };
    UniversityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-university',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./university.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/university/university.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./university.component.scss */ "./src/app/pages/university/university.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UniversityComponent);
    return UniversityComponent;
}());



/***/ }),

/***/ "./src/app/pages/university/university.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/university/university.module.ts ***!
  \*******************************************************/
/*! exports provided: UniversityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityModule", function() { return UniversityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _university_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./university-routing.module */ "./src/app/pages/university/university-routing.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");





var UniversityModule = /** @class */ (function () {
    function UniversityModule() {
    }
    UniversityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _university_routing_module__WEBPACK_IMPORTED_MODULE_3__["UniversityRoutingModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
            ]
        })
    ], UniversityModule);
    return UniversityModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-university-university-module.js.map