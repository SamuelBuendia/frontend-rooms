(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-evidence-evidence-routing-module"],{

/***/ "kjvj":
/*!***********************************************************!*\
  !*** ./src/app/pages/evidence/evidence-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EvidenceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenceRoutingModule", function() { return EvidenceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _evidence_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evidence.component */ "XEX9");
/* harmony import */ var _evidences_evidences_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evidences/evidences.component */ "xfCH");
/* harmony import */ var _evidences_evidence_edit_evidence_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./evidences/evidence-edit/evidence-edit.component */ "+4QO");







const routes = [
    {
        path: '',
        component: _evidence_component__WEBPACK_IMPORTED_MODULE_2__["EvidenceComponent"],
        children: [
            {
                path: 'list',
                component: _evidences_evidences_component__WEBPACK_IMPORTED_MODULE_3__["EvidencesComponent"],
            },
            {
                path: 'add',
                component: _evidences_evidence_edit_evidence_edit_component__WEBPACK_IMPORTED_MODULE_4__["EvidenceEditComponent"]
            },
            {
                path: 'edit/:id',
                component: _evidences_evidence_edit_evidence_edit_component__WEBPACK_IMPORTED_MODULE_4__["EvidenceEditComponent"]
            },
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: '**', redirectTo: 'list', pathMatch: 'full' },
        ],
    },
];
class EvidenceRoutingModule {
}
EvidenceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EvidenceRoutingModule });
EvidenceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EvidenceRoutingModule_Factory(t) { return new (t || EvidenceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EvidenceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvidenceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-evidence-evidence-routing-module-es2015.js.map