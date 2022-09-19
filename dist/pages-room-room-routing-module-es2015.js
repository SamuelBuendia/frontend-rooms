(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-room-room-routing-module"],{

/***/ "8+wY":
/*!***************************************************!*\
  !*** ./src/app/pages/room/room-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RoomRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomRoutingModule", function() { return RoomRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _room_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room.component */ "2rvv");
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rooms/rooms.component */ "NCcc");
/* harmony import */ var _rooms_room_edit_room_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rooms/room-edit/room-edit.component */ "k5IA");







const routes = [
    {
        path: '',
        component: _room_component__WEBPACK_IMPORTED_MODULE_2__["RoomComponent"],
        children: [
            {
                path: 'list',
                component: _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_3__["RoomsComponent"],
            },
            {
                path: 'add',
                component: _rooms_room_edit_room_edit_component__WEBPACK_IMPORTED_MODULE_4__["RoomEditComponent"]
            },
            {
                path: 'edit/:id',
                component: _rooms_room_edit_room_edit_component__WEBPACK_IMPORTED_MODULE_4__["RoomEditComponent"],
                children: [
                    {
                        path: 'folders',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-folder-folder-routing-module */ "pages-folder-folder-routing-module").then(__webpack_require__.bind(null, /*! ../../pages/folder/folder-routing.module */ "+CvK")).then((m) => m.FolderRoutingModule),
                    },
                ]
            },
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: '**', redirectTo: 'list', pathMatch: 'full' },
        ],
    },
];
class RoomRoutingModule {
}
RoomRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoomRoutingModule });
RoomRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoomRoutingModule_Factory(t) { return new (t || RoomRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoomRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-room-room-routing-module-es2015.js.map