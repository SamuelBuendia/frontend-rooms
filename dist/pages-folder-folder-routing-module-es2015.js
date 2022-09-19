(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-folder-folder-routing-module"],{

/***/ "+CvK":
/*!*******************************************************!*\
  !*** ./src/app/pages/folder/folder-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FolderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderRoutingModule", function() { return FolderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _folder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folder.component */ "3QJx");
/* harmony import */ var _folders_folders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folders/folders.component */ "tkAY");
/* harmony import */ var _folders_folder_edit_folder_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./folders/folder-edit/folder-edit.component */ "ZNeI");







const routes = [
    {
        path: '',
        component: _folder_component__WEBPACK_IMPORTED_MODULE_2__["FolderComponent"],
        children: [
            {
                path: 'list',
                component: _folders_folders_component__WEBPACK_IMPORTED_MODULE_3__["FoldersComponent"],
            },
            {
                path: 'add',
                component: _folders_folder_edit_folder_edit_component__WEBPACK_IMPORTED_MODULE_4__["FolderEditComponent"]
            },
            {
                path: 'edit/:id',
                component: _folders_folder_edit_folder_edit_component__WEBPACK_IMPORTED_MODULE_4__["FolderEditComponent"],
                children: [
                    {
                        path: 'evidences',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-evidence-evidence-routing-module */ "pages-evidence-evidence-routing-module").then(__webpack_require__.bind(null, /*! ../../pages/evidence/evidence-routing.module */ "kjvj")).then((m) => m.EvidenceRoutingModule),
                    },
                ]
            },
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: '**', redirectTo: 'list', pathMatch: 'full' },
        ],
    },
];
class FolderRoutingModule {
}
FolderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FolderRoutingModule });
FolderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FolderRoutingModule_Factory(t) { return new (t || FolderRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FolderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FolderRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-folder-folder-routing-module-es2015.js.map