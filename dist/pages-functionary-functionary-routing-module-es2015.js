(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-functionary-functionary-routing-module"],{

/***/ "AuDj":
/*!*****************************************************************!*\
  !*** ./src/app/pages/functionary/functionary-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FunctionaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionaryRoutingModule", function() { return FunctionaryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _functionary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functionary.component */ "UjY7");
/* harmony import */ var _functionarys_functionarys_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functionarys/functionarys.component */ "7Wdt");
/* harmony import */ var _functionarys_functionary_edit_functionary_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functionarys/functionary-edit/functionary-edit.component */ "9ox6");







const routes = [
    {
        path: '',
        component: _functionary_component__WEBPACK_IMPORTED_MODULE_2__["FunctionaryComponent"],
        children: [
            {
                path: 'list',
                component: _functionarys_functionarys_component__WEBPACK_IMPORTED_MODULE_3__["FunctionarysComponent"],
            },
            {
                path: 'add',
                component: _functionarys_functionary_edit_functionary_edit_component__WEBPACK_IMPORTED_MODULE_4__["FunctionaryEditComponent"]
            },
            {
                path: 'edit/:id',
                component: _functionarys_functionary_edit_functionary_edit_component__WEBPACK_IMPORTED_MODULE_4__["FunctionaryEditComponent"]
            },
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: '**', redirectTo: 'list', pathMatch: 'full' },
        ],
    },
];
class FunctionaryRoutingModule {
}
FunctionaryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FunctionaryRoutingModule });
FunctionaryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FunctionaryRoutingModule_Factory(t) { return new (t || FunctionaryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FunctionaryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FunctionaryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-functionary-functionary-routing-module-es2015.js.map