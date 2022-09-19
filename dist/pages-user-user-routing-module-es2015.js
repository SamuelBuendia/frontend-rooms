(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-routing-module"],{

/***/ "T+5/":
/*!***************************************************!*\
  !*** ./src/app/pages/user/user-routing.module.ts ***!
  \***************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "3OJA");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "0sO9");
/* harmony import */ var _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/user-edit/user-edit.component */ "wCQf");







const routes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [
            {
                path: 'users',
                component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
            },
            {
                path: 'add',
                component: _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_4__["UserEditComponent"]
            },
            {
                path: 'edit/:id',
                component: _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_4__["UserEditComponent"]
            },
            { path: '', redirectTo: 'users', pathMatch: 'full' },
            { path: '**', redirectTo: 'users', pathMatch: 'full' },
        ],
    },
];
class UserRoutingModule {
}
UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-user-user-routing-module-es2015.js.map