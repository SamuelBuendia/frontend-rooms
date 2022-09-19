(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-profile-user-profile-module"],{

/***/ "19P/":
/*!********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/filter.model.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "3WTx":
/*!*********************************************************************!*\
  !*** ./src/app/modules/user-profile/user-profile-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UserProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileRoutingModule", function() { return UserProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-information/account-information.component */ "Hr9Q");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password/change-password.component */ "CwcJ");
/* harmony import */ var _email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-settings/email-settings.component */ "mXZP");
/* harmony import */ var _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-information/personal-information.component */ "yQxR");
/* harmony import */ var _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-overview/profile-overview.component */ "f+48");
/* harmony import */ var _saved_credit_cards_saved_credit_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./saved-credit-cards/saved-credit-cards.component */ "gWCS");
/* harmony import */ var _statements_statements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./statements/statements.component */ "W1F+");
/* harmony import */ var _tax_information_tax_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tax-information/tax-information.component */ "O4eP");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-profile.component */ "skVc");













const routes = [
    {
        path: '',
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
        children: [
            {
                path: 'profile-overview',
                component: _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_6__["ProfileOverviewComponent"],
            },
            {
                path: 'personal-information',
                component: _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_5__["PersonalInformationComponent"],
            },
            {
                path: 'account-information',
                component: _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_2__["AccountInformationComponent"]
            },
            {
                path: 'change-password',
                component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]
            },
            {
                path: 'email-settings',
                component: _email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_4__["EmailSettingsComponent"]
            },
            {
                path: 'saved-credic-cards',
                component: _saved_credit_cards_saved_credit_cards_component__WEBPACK_IMPORTED_MODULE_7__["SavedCreditCardsComponent"]
            },
            {
                path: 'tax-information',
                component: _tax_information_tax_information_component__WEBPACK_IMPORTED_MODULE_9__["TaxInformationComponent"]
            },
            {
                path: 'statements',
                component: _statements_statements_component__WEBPACK_IMPORTED_MODULE_8__["StatementsComponent"]
            },
            { path: '', redirectTo: 'profile-overview', pathMatch: 'full' },
            { path: '**', redirectTo: 'profile-overview', pathMatch: 'full' },
        ],
    },
];
class UserProfileRoutingModule {
}
UserProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserProfileRoutingModule });
UserProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserProfileRoutingModule_Factory(t) { return new (t || UserProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "51MP":
/*!********************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/ng-pagination/ng-pagination.config.ts ***!
  \********************************************************************************************************/
/*! exports provided: NgPaginationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationConfig", function() { return NgPaginationConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/paginator.model */ "fksT");
// Fork of https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination-config.ts



/**
 * A configuration service for the [`NgPagination`](#/components/paginator/api#NgPagination) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
class NgPaginationConfig {
    constructor() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__["PageSizes"][2];
        this.rotate = false;
    }
}
NgPaginationConfig.ɵfac = function NgPaginationConfig_Factory(t) { return new (t || NgPaginationConfig)(); };
NgPaginationConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgPaginationConfig, factory: NgPaginationConfig.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "6UdT":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/user-profile/_components/profile-card/profile-card.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProfileCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCardComponent", function() { return ProfileCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth */ "tmEo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _metronic_partials_content_dropdown_menus_dropdown_menu4_dropdown_menu4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_metronic/partials/content/dropdown-menus/dropdown-menu4/dropdown-menu4.component */ "eL3N");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-inline-svg */ "W79Q");








function ProfileCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-dropdown-menu4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Follow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Profile Overview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Personal Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Account Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Email settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_div_0_Template_a_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74); return _r2.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Saved Credit Cards ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 34, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_div_0_Template_a_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](81); return _r3.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Tax information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 34, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_div_0_Template_a_click_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](91); return _r4.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Statements ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx_r0.getPic(user_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", user_r1.first_name, " ", user_r1.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.ocupation, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.userprofile == null ? null : user_r1.userprofile.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Design/Layers.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/User.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Code/Compiling.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Shield-user.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Mail-opened.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Layout/Layout-top-panel-6.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Files/File.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Text/Article.svg");
} }
class ProfileCardComponent {
    constructor(userService) {
        this.userService = userService;
        this.user$ = this.userService.currentUserSubject.asObservable();
    }
    getPic(user) {
        if (user) {
            if (user.userprofile) {
                if (user.userprofile.avatar) {
                    return `url('${user.userprofile.avatar}')`;
                }
            }
        }
        return 'none';
    }
}
ProfileCardComponent.ɵfac = function ProfileCardComponent_Factory(t) { return new (t || ProfileCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
ProfileCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileCardComponent, selectors: [["app-profile-card"]], decls: 2, vars: 3, consts: [["class", "card card-custom card-stretch", 4, "ngIf"], [1, "card", "card-custom", "card-stretch"], [1, "card-body", "pt-4"], [1, "d-flex", "justify-content-end"], ["ngbDropdown", "", 1, "dropdown", "dropdown-inline"], ["ngbDropdownToggle", "", 1, "btn", "btn-clean", "btn-hover-light-primary", "btn-sm", "btn-icon", "cursor-pointer"], [1, "ki", "ki-bold-more-hor"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-sm", "dropdown-menu-right"], [1, "d-flex", "align-items-center"], [1, "symbol", "symbol-60", "symbol-xxl-100", "mr-5", "align-self-start", "align-self-xxl-center"], [1, "symbol-label"], [1, "symbol-badge", "bg-success"], [1, "font-weight-bolder", "font-size-h5", "text-dark-75", "text-hover-primary", "cursor-pointer"], [1, "text-muted"], [1, "mt-2"], [1, "btn", "btn-sm", "btn-primary", "font-weight-bold", "mr-2", "py-2", "px-3", "px-xxl-5", "my-1", "cursor-pointer"], [1, "btn", "btn-sm", "btn-success", "font-weight-bold", "py-2", "px-3", "px-xxl-5", "my-1", "cursor-pointer"], [1, "py-9"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "font-weight-bold", "mr-2"], [1, "text-muted", "text-hover-primary"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "navi", "navi-bold", "navi-hover", "navi-active", "navi-link-rounded"], [1, "navi-item", "mb-2"], ["routerLink", "/user-profile/profile-overview", "routerLinkActive", "active", 1, "navi-link", "py-4"], [1, "navi-icon", "mr-2"], ["cacheSVG", "true", 1, "svg-icon", 3, "inlineSVG"], [1, "navi-text", "font-size-lg"], ["routerLink", "/user-profile/personal-information", "routerLinkActive", "active", 1, "navi-link", "py-4"], ["routerLink", "/user-profile/account-information", "routerLinkActive", "active", 1, "navi-link", "py-4"], ["routerLink", "/user-profile/change-password", "routerLinkActive", "active", 1, "navi-link", "py-4"], [1, "navi-label"], [1, "label", "label-light-danger", "label-rounded", "font-weight-bold"], ["routerLink", "/user-profile/email-settings", "routerLinkActive", "active", 1, "navi-link", "py-4"], ["ngbTooltip", "Coming soon...", "triggers", "manual", "placement", "right", 1, "navi-link", "py-4", "cursor-pointer", 3, "click"], ["t", "ngbTooltip"], ["t2", "ngbTooltip"], [1, "label", "label-light-primary", "label-inline", "font-weight-bold"], ["t3", "ngbTooltip"], [1, "navi-text"]], template: function ProfileCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileCardComponent_div_0_Template, 96, 16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _metronic_partials_content_dropdown_menus_dropdown_menu4_dropdown_menu4_component__WEBPACK_IMPORTED_MODULE_4__["DropdownMenu4Component"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL19jb21wb25lbnRzL3Byb2ZpbGUtY2FyZC9wcm9maWxlLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-card',
                templateUrl: './profile-card.component.html',
                styleUrls: ['./profile-card.component.scss']
            }]
    }], function () { return [{ type: _auth__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "Br0f":
/*!******************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/table.model */ "Vh1Q");
/* harmony import */ var _models_table_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_table_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_table_model__WEBPACK_IMPORTED_MODULE_0__) if(["default","CRUDTableModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_table_model__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _models_sort_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/sort.model */ "fr3w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortState", function() { return _models_sort_model__WEBPACK_IMPORTED_MODULE_1__["SortState"]; });

/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/paginator.model */ "fksT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageSizes", function() { return _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PageSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorState", function() { return _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PaginatorState"]; });

/* harmony import */ var _models_grouping_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/grouping.model */ "WWIl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupingState", function() { return _models_grouping_model__WEBPACK_IMPORTED_MODULE_3__["GroupingState"]; });

/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/search.model */ "EASb");
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models_search_model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_search_model__WEBPACK_IMPORTED_MODULE_4__) if(["default","CRUDTableModule","SortState","PageSizes","PaginatorState","GroupingState"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_search_model__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/filter.model */ "19P/");
/* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_models_filter_model__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models_filter_model__WEBPACK_IMPORTED_MODULE_5__) if(["default","CRUDTableModule","SortState","PageSizes","PaginatorState","GroupingState"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models_filter_model__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/table.service */ "aENq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return _services_table_service__WEBPACK_IMPORTED_MODULE_6__["TableService"]; });

/* harmony import */ var _crud_table_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crud-table.module */ "RbrB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CRUDTableModule", function() { return _crud_table_module__WEBPACK_IMPORTED_MODULE_7__["CRUDTableModule"]; });

// Models






// Directives
// Services

// Module



/***/ }),

/***/ "CwcJ":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/user-profile/change-password/change-password.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth */ "tmEo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-inline-svg */ "W79Q");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");










function ChangePasswordComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ChangePasswordComponent_ng_container_0_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current password ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "COMMON.WAS_ENTERED_CORRECT"), "");
} }
function ChangePasswordComponent_ng_container_0_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("First name ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "COMMON.IS_REQUIRED"), "");
} }
function ChangePasswordComponent_ng_container_0_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Password confirmation ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "COMMON.WAS_ENTERED_CORRECT"), "");
} }
function ChangePasswordComponent_ng_container_0_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "'Passsword' and 'Confirm Password' didn't match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_ng_container_0_ng_container_2_Template, 3, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Change your account password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_ng_container_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_ng_container_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Configure user passwords to expire periodically. Users will need warning that their passwords are going to expire, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "or they might inadvertently get locked out of the system! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Current Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ChangePasswordComponent_ng_container_0_div_33_Template, 3, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ChangePasswordComponent_ng_container_0_div_34_Template, 3, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Forgot password ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Verify Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ChangePasswordComponent_ng_container_0_div_47_Template, 3, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ChangePasswordComponent_ng_container_0_div_48_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 20, ctx_r0.isLoading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.formGroup.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Code/Info-circle.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.isControlInvalid("currentPassword"))("is-valid", ctx_r0.isControlValid("currentPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isControlValid("currentPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.controlHasError("required", "currentPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.isControlInvalid("password"))("is-valid", ctx_r0.isControlValid("password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.isControlInvalid("cPassword"))("is-valid", ctx_r0.isControlValid("cPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isControlValid("cPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.controlHasError("ConfirmPassword", "cPassword"));
} }
class ChangePasswordComponent {
    constructor(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.subscriptions = [];
        this.isLoading$ = this.userService.isLoadingSubject.asObservable();
    }
    ngOnInit() {
        const sb = this.userService.currentUserSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(user => !!user)).subscribe(user => {
            this.user = Object.assign({}, user);
            this.firstUserState = Object.assign({}, user);
            this.loadForm();
        });
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    loadForm() {
        this.formGroup = this.fb.group({
            currentPassword: [this.user.password, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: _auth__WEBPACK_IMPORTED_MODULE_3__["ConfirmPasswordValidator"].MatchPassword
        });
    }
    save() {
        this.formGroup.markAllAsTouched();
        if (!this.formGroup.valid) {
            return;
        }
        this.user.password = this.formGroup.value.password;
        this.userService.isLoadingSubject.next(true);
        setTimeout(() => {
            this.userService.currentUserSubject.next(Object.assign({}, this.user));
            this.userService.isLoadingSubject.next(false);
        }, 2000);
    }
    cancel() {
        this.user = Object.assign({}, this.firstUserState);
        this.loadForm();
    }
    // helpers for View
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.formGroup.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.dirty || control.touched;
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "card", "card-custom", 3, "formGroup"], [1, "card-header", "py-3"], [1, "card-title", "align-items-start", "flex-column"], [1, "card-label", "font-weight-bolder", "text-dark"], [1, "text-muted", "font-weight-bold", "font-size-sm", "mt-1"], [1, "card-toolbar"], ["type", "submit", 1, "btn", "btn-success", "mr-2", 3, "disabled", "click"], ["type", "reset", 1, "btn", "btn-secondary", 3, "click"], [1, "form"], [1, "card-body"], ["role", "alert", 1, "alert", "alert-custom", "alert-light-danger", "fade", "show", "mb-10"], [1, "alert-icon"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-3x", "svg-icon-danger", 3, "inlineSVG"], [1, "alert-text", "font-weight-bold"], [1, "alert-close"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "ki", "ki-close"], [1, "form-group", "row"], [1, "col-xl-3", "col-lg-3", "col-form-label", "text-alert"], [1, "col-lg-9", "col-xl-6"], ["type", "password", "placeholder", "Current password", "autocomplete", "off", "formControlName", "currentPassword", 1, "form-control", "form-control-lg", "form-control-solid", "mb-2"], ["class", "valid-feedback", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "text-sm", "font-weight-bold", "cursor-pointer"], ["type", "password", "placeholder", "New password", "autocomplete", "off", "formControlName", "password", 1, "form-control", "form-control-lg", "form-control-solid"], ["type", "password", "placeholder", "Confirm password", "autocomplete", "off", "formControlName", "cPassword", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"], [1, "valid-feedback"], [1, "invalid-feedback"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChangePasswordComponent_ng_container_0_Template, 49, 22, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.scss']
            }]
    }], function () { return [{ type: _auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "EASb":
/*!********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/search.model.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "Hr9Q":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/user-profile/account-information/account-information.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AccountInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountInformationComponent", function() { return AccountInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth */ "tmEo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");







function AccountInformationComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AccountInformationComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountInformationComponent_ng_container_0_ng_container_2_Template, 3, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Account Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Change your account settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountInformationComponent_ng_container_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountInformationComponent_ng_container_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Account:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Email will not be publicly displayed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Learn more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Select Language...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Bahasa Indonesia - Indonesian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Bahasa Melayu - Malay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Catal\u00E0 - Catalan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u010Ce\u0161tina - Czech");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Dansk - Danish");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Deutsch - German");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "English UK - British English");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Espa\u00F1ol - Spanish");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Euskara - Basque (beta)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Filipino");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Fran\u00E7ais - French");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Gaeilge - Irish (beta)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Galego - Galician (beta)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Hrvatski - Croatian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Italiano - Italian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Magyar - Hungarian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Nederlands - Dutch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Norsk - Norwegian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Polski - Polish");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Portugu\u00EAs - Portuguese");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Rom\u00E2n\u0103 - Romanian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Sloven\u010Dina - Slovak");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Suomi - Finnish");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Svenska - Swedish");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Ti\u1EBFng Vi\u1EC7t - Vietnamese");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "T\u00FCrk\u00E7e - Turkish");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC - Greek");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0435\u0437\u0438\u043A - Bulgarian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 - Russian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u0421\u0440\u043F\u0441\u043A\u0438 - Serbian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430 - Ukrainian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\u05E2\u05B4\u05D1\u05B0\u05E8\u05B4\u05D9\u05EA - Hebrew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u0627\u0631\u062F\u0648 - Urdu (beta)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 - Arabic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\u0641\u0627\u0631\u0633\u06CC - Persian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\u092E\u0930\u093E\u0920\u0940 - Marathi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\u0939\u093F\u0928\u094D\u0926\u0940 - Hindi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\u09AC\u09BE\u0982\u09B2\u09BE - Bangla");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0 - Gujarati");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD - Tamil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1 - Kannada");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22 - Thai");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\uD55C\uAD6D\uC5B4 - Korean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\u65E5\u672C\u8A9E - Japanese");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u7B80\u4F53\u4E2D\u6587 - Simplified Chinese");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\u7E41\u9AD4\u4E2D\u6587 - Traditional Chinese");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Time Zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "(GMT-11:00) International Date Line West ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "(GMT-11:00) Midway Island");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "(GMT-11:00) Samoa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "(GMT-10:00) Hawaii");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "(GMT-08:00) Alaska");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "(GMT-07:00) Pacific Time (US & Canada)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "(GMT-07:00) Tijuana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "(GMT-07:00) Arizona");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "(GMT-06:00) Mountain Time (US & Canada)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "(GMT-06:00) Chihuahua");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "(GMT-06:00) Mazatlan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "(GMT-06:00) Saskatchewan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "(GMT-06:00) Central America");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "(GMT-05:00) Central Time (US & Canada)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "(GMT-05:00) Guadalajara");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "(GMT-05:00) Mexico City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "(GMT-05:00) Monterrey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "(GMT-05:00) Bogota");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "(GMT-05:00) Lima");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "(GMT-05:00) Quito");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "(GMT-04:00) Eastern Time (US & Canada)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "(GMT-04:00) Indiana (East)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "(GMT-04:00) Caracas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "(GMT-04:00) La Paz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "(GMT-04:00) Georgetown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "(GMT-03:00) Atlantic Time (Canada)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "(GMT-03:00) Santiago");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "(GMT-03:00) Brasilia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "(GMT-03:00) Buenos Aires");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "(GMT-02:30) Newfoundland");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "(GMT-02:00) Greenland");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "(GMT-02:00) Mid-Atlantic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "(GMT-01:00) Cape Verde Is.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "(GMT) Azores");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "(GMT) Monrovia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "option", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "(GMT) UTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "(GMT+01:00) Dublin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "(GMT+01:00) Edinburgh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "(GMT+01:00) Lisbon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "(GMT+01:00) London");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "(GMT+01:00) Casablanca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "(GMT+01:00) West Central Africa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "(GMT+02:00) Belgrade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "(GMT+02:00) Bratislava");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "(GMT+02:00) Budapest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "(GMT+02:00) Ljubljana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "(GMT+02:00) Prague");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "(GMT+02:00) Sarajevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "(GMT+02:00) Skopje");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "(GMT+02:00) Warsaw");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "option", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "(GMT+02:00) Zagreb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "(GMT+02:00) Brussels");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "(GMT+02:00) Copenhagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "(GMT+02:00) Madrid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "(GMT+02:00) Paris");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "option", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "(GMT+02:00) Amsterdam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "option", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "(GMT+02:00) Berlin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "option", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "(GMT+02:00) Bern");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "(GMT+02:00) Rome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "(GMT+02:00) Stockholm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "option", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "(GMT+02:00) Vienna");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "option", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "(GMT+02:00) Cairo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "option", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "(GMT+02:00) Harare");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "option", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "(GMT+02:00) Pretoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "option", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "(GMT+03:00) Bucharest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "option", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "(GMT+03:00) Helsinki");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "option", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "(GMT+03:00) Kiev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "option", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "(GMT+03:00) Kyiv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "option", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "(GMT+03:00) Riga");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "option", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "(GMT+03:00) Sofia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "option", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "(GMT+03:00) Tallinn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "option", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "(GMT+03:00) Vilnius");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "option", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "(GMT+03:00) Athens");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "option", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "(GMT+03:00) Istanbul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "option", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "(GMT+03:00) Minsk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "option", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "(GMT+03:00) Jerusalem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "option", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "(GMT+03:00) Moscow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "option", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "(GMT+03:00) St. Petersburg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "option", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "(GMT+03:00) Volgograd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "option", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "(GMT+03:00) Kuwait");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "option", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "(GMT+03:00) Riyadh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "option", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "(GMT+03:00) Nairobi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "option", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "(GMT+03:00) Baghdad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "option", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "(GMT+04:00) Abu Dhabi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "(GMT+04:00) Muscat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "(GMT+04:00) Baku");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "(GMT+04:00) Tbilisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "option", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "(GMT+04:00) Yerevan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "option", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "(GMT+04:30) Tehran");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "option", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "(GMT+04:30) Kabul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "option", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "(GMT+05:00) Ekaterinburg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "option", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "(GMT+05:00) Islamabad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "option", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "(GMT+05:00) Karachi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "option", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "(GMT+05:00) Tashkent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "option", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "(GMT+05:30) Chennai");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "option", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "(GMT+05:30) Kolkata");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "option", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "(GMT+05:30) Mumbai");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "option", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "(GMT+05:30) New Delhi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "option", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "(GMT+05:30) Sri Jayawardenepura");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "option", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "(GMT+05:45) Kathmandu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "option", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "(GMT+06:00) Astana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "option", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "(GMT+06:00) Dhaka");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "option", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "(GMT+06:00) Almaty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "option", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "(GMT+06:00) Urumqi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "option", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "(GMT+06:30) Rangoon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "option", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "(GMT+07:00) Novosibirsk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "option", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "(GMT+07:00) Bangkok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "option", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "(GMT+07:00) Hanoi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "option", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "(GMT+07:00) Jakarta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "option", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "(GMT+07:00) Krasnoyarsk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "option", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "(GMT+08:00) Beijing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "option", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "(GMT+08:00) Chongqing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "option", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "(GMT+08:00) Hong Kong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "option", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "(GMT+08:00) Kuala Lumpur");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "option", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "(GMT+08:00) Singapore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "option", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "(GMT+08:00) Taipei");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "option", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "(GMT+08:00) Perth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "option", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "(GMT+08:00) Irkutsk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "option", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "(GMT+08:00) Ulaan Bataar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "option", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "(GMT+09:00) Seoul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "option", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "(GMT+09:00) Osaka");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "option", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "(GMT+09:00) Sapporo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "option", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "(GMT+09:00) Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "option", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "(GMT+09:00) Yakutsk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "option", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "(GMT+09:30) Darwin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "option", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "(GMT+09:30) Adelaide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "option", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "(GMT+10:00) Canberra");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "option", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "(GMT+10:00) Melbourne");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "option", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "(GMT+10:00) Sydney");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "option", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "(GMT+10:00) Brisbane");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "option", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "(GMT+10:00) Hobart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "option", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "(GMT+10:00) Vladivostok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "option", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "(GMT+10:00) Guam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "option", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "(GMT+10:00) Port Moresby");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "option", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "(GMT+10:00) Solomon Is.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "option", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "(GMT+11:00) Magadan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "option", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "(GMT+11:00) New Caledonia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "option", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "(GMT+12:00) Fiji");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "option", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "(GMT+12:00) Kamchatka");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "option", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "(GMT+12:00) Marshall Is.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "option", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "(GMT+12:00) Auckland");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "option", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "(GMT+12:00) Wellington");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "option", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "(GMT+13:00) Nuku'alofa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Communication");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "label", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "input", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "label", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "input", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "SMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "label", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](449, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "Security:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "Login verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Setup login verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "p", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "After you log in, you will be asked for additional information to confirm your identity and protect your account from being compromised. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "a", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "Learn more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "Password reset verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "label", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](474, "input", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](475, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "Require personal information to reset your password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "p", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "For extra security, this requires you to confirm your email or phone number when you reset your password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "a", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "Learn more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "button", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Deactivate your account ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 11, ctx_r0.isLoading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.formGroup.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.isControlInvalid("username"))("is-valid", ctx_r0.isControlValid("username"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.isControlInvalid("email"))("is-valid", ctx_r0.isControlValid("email"));
} }
class AccountInformationComponent {
    constructor(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.subscriptions = [];
        this.isLoading$ = this.userService.isLoadingSubject.asObservable();
    }
    ngOnInit() {
        const sb = this.userService.currentUserSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(user => !!user)).subscribe(user => {
            this.user = Object.assign({}, user);
            this.firstUserState = Object.assign({}, user);
            this.loadForm();
        });
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    loadForm() {
        this.formGroup = this.fb.group({
            username: [this.user.username, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            language: [this.user.language],
            timeZone: [this.user.timeZone],
            communicationEmail: [this.user.communication.email],
            communicationSMS: [this.user.communication.sms],
            communicationPhone: [this.user.communication.phone]
        });
    }
    save() {
        this.formGroup.markAllAsTouched();
        if (!this.formGroup.valid) {
            return;
        }
        const formValues = this.formGroup.value;
        // prepar user
        this.user = Object.assign(this.user, {
            username: formValues.username,
            email: formValues.email,
            language: formValues.language,
            timeZone: formValues.timeZone,
            communication: {
                email: formValues.communicationEmail,
                sms: formValues.communicationSMS,
                phone: formValues.communicationPhone
            }
        });
        // Do request to your server for user update, we just imitate user update there
        this.userService.isLoadingSubject.next(true);
        setTimeout(() => {
            this.userService.currentUserSubject.next(Object.assign({}, this.user));
            this.userService.isLoadingSubject.next(false);
        }, 2000);
    }
    cancel() {
        this.user = Object.assign({}, this.firstUserState);
        this.loadForm();
    }
    // helpers for View
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
}
AccountInformationComponent.ɵfac = function AccountInformationComponent_Factory(t) { return new (t || AccountInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AccountInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountInformationComponent, selectors: [["app-account-information"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "card", "card-custom", 3, "formGroup"], [1, "card-header", "py-3"], [1, "card-title", "align-items-start", "flex-column"], [1, "card-label", "font-weight-bolder", "text-dark"], [1, "text-muted", "font-weight-bold", "font-size-sm", "mt-1"], [1, "card-toolbar"], ["type", "submit", 1, "btn", "btn-success", "mr-2", 3, "disabled", "click"], ["type", "reset", 1, "btn", "btn-secondary", 3, "click"], [1, "form"], [1, "card-body"], [1, "row"], [1, "col-xl-3"], [1, "col-lg-9", "col-xl-6"], [1, "font-weight-bold", "mb-6"], [1, "form-group", "row"], [1, "col-xl-3", "col-lg-3", "col-form-label"], ["type", "text", "formControlName", "username", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "input-group", "input-group-lg", "input-group-solid"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-at"], ["type", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "form-text", "text-muted"], [1, "font-weight-bold"], ["formControlName", "language", 1, "form-control", "form-control-lg", "form-control-solid"], ["value", "id"], ["value", "msa"], ["value", "ca"], ["value", "cs"], ["value", "da"], ["value", "de"], ["value", "en"], ["value", "en-gb"], ["value", "es"], ["value", "eu"], ["value", "fil"], ["value", "fr"], ["value", "ga"], ["value", "gl"], ["value", "hr"], ["value", "it"], ["value", "hu"], ["value", "nl"], ["value", "no"], ["value", "pl"], ["value", "pt"], ["value", "ro"], ["value", "sk"], ["value", "fi"], ["value", "sv"], ["value", "vi"], ["value", "tr"], ["value", "el"], ["value", "bg"], ["value", "ru"], ["value", "sr"], ["value", "uk"], ["value", "he"], ["value", "ur"], ["value", "ar"], ["value", "fa"], ["value", "mr"], ["value", "hi"], ["value", "bn"], ["value", "gu"], ["value", "ta"], ["value", "kn"], ["value", "th"], ["value", "ko"], ["value", "ja"], ["value", "zh-cn"], ["value", "zh-tw"], ["formControlName", "timeZone", 1, "form-control", "form-control-lg", "form-control-solid"], ["data-offset", "-39600", "value", "International Date Line West"], ["data-offset", "-39600", "value", "Midway Island"], ["data-offset", "-39600", "value", "Samoa"], ["data-offset", "-36000", "value", "Hawaii"], ["data-offset", "-28800", "value", "Alaska"], ["data-offset", "-25200", "value", "Pacific Time (US & Canada)"], ["data-offset", "-25200", "value", "Tijuana"], ["data-offset", "-25200", "value", "Arizona"], ["data-offset", "-21600", "value", "Mountain Time (US & Canada)"], ["data-offset", "-21600", "value", "Chihuahua"], ["data-offset", "-21600", "value", "Mazatlan"], ["data-offset", "-21600", "value", "Saskatchewan"], ["data-offset", "-21600", "value", "Central America"], ["data-offset", "-18000", "value", "Central Time (US & Canada)"], ["data-offset", "-18000", "value", "Guadalajara"], ["data-offset", "-18000", "value", "Mexico City"], ["data-offset", "-18000", "value", "Monterrey"], ["data-offset", "-18000", "value", "Bogota"], ["data-offset", "-18000", "value", "Lima"], ["data-offset", "-18000", "value", "Quito"], ["data-offset", "-14400", "value", "Eastern Time (US & Canada)"], ["data-offset", "-14400", "value", "Indiana (East)"], ["data-offset", "-14400", "value", "Caracas"], ["data-offset", "-14400", "value", "La Paz"], ["data-offset", "-14400", "value", "Georgetown"], ["data-offset", "-10800", "value", "Atlantic Time (Canada)"], ["data-offset", "-10800", "value", "Santiago"], ["data-offset", "-10800", "value", "Brasilia"], ["data-offset", "-10800", "value", "Buenos Aires"], ["data-offset", "-9000", "value", "Newfoundland"], ["data-offset", "-7200", "value", "Greenland"], ["data-offset", "-7200", "value", "Mid-Atlantic"], ["data-offset", "-3600", "value", "Cape Verde Is."], ["data-offset", "0", "value", "Azores"], ["data-offset", "0", "value", "Monrovia"], ["data-offset", "0", "value", "UTC"], ["data-offset", "3600", "value", "Dublin"], ["data-offset", "3600", "value", "Edinburgh"], ["data-offset", "3600", "value", "Lisbon"], ["data-offset", "3600", "value", "London"], ["data-offset", "3600", "value", "Casablanca"], ["data-offset", "3600", "value", "West Central Africa"], ["data-offset", "7200", "value", "Belgrade"], ["data-offset", "7200", "value", "Bratislava"], ["data-offset", "7200", "value", "Budapest"], ["data-offset", "7200", "value", "Ljubljana"], ["data-offset", "7200", "value", "Prague"], ["data-offset", "7200", "value", "Sarajevo"], ["data-offset", "7200", "value", "Skopje"], ["data-offset", "7200", "value", "Warsaw"], ["data-offset", "7200", "value", "Zagreb"], ["data-offset", "7200", "value", "Brussels"], ["data-offset", "7200", "value", "Copenhagen"], ["data-offset", "7200", "value", "Madrid"], ["data-offset", "7200", "value", "Paris"], ["data-offset", "7200", "value", "Amsterdam"], ["data-offset", "7200", "value", "Berlin"], ["data-offset", "7200", "value", "Bern"], ["data-offset", "7200", "value", "Rome"], ["data-offset", "7200", "value", "Stockholm"], ["data-offset", "7200", "value", "Vienna"], ["data-offset", "7200", "value", "Cairo"], ["data-offset", "7200", "value", "Harare"], ["data-offset", "7200", "value", "Pretoria"], ["data-offset", "10800", "value", "Bucharest"], ["data-offset", "10800", "value", "Helsinki"], ["data-offset", "10800", "value", "Kiev"], ["data-offset", "10800", "value", "Kyiv"], ["data-offset", "10800", "value", "Riga"], ["data-offset", "10800", "value", "Sofia"], ["data-offset", "10800", "value", "Tallinn"], ["data-offset", "10800", "value", "Vilnius"], ["data-offset", "10800", "value", "Athens"], ["data-offset", "10800", "value", "Istanbul"], ["data-offset", "10800", "value", "Minsk"], ["data-offset", "10800", "value", "Jerusalem"], ["data-offset", "10800", "value", "Moscow"], ["data-offset", "10800", "value", "St. Petersburg"], ["data-offset", "10800", "value", "Volgograd"], ["data-offset", "10800", "value", "Kuwait"], ["data-offset", "10800", "value", "Riyadh"], ["data-offset", "10800", "value", "Nairobi"], ["data-offset", "10800", "value", "Baghdad"], ["data-offset", "14400", "value", "Abu Dhabi"], ["data-offset", "14400", "value", "Muscat"], ["data-offset", "14400", "value", "Baku"], ["data-offset", "14400", "value", "Tbilisi"], ["data-offset", "14400", "value", "Yerevan"], ["data-offset", "16200", "value", "Tehran"], ["data-offset", "16200", "value", "Kabul"], ["data-offset", "18000", "value", "Ekaterinburg"], ["data-offset", "18000", "value", "Islamabad"], ["data-offset", "18000", "value", "Karachi"], ["data-offset", "18000", "value", "Tashkent"], ["data-offset", "19800", "value", "Chennai"], ["data-offset", "19800", "value", "Kolkata"], ["data-offset", "19800", "value", "Mumbai"], ["data-offset", "19800", "value", "New Delhi"], ["data-offset", "19800", "value", "Sri Jayawardenepura"], ["data-offset", "20700", "value", "Kathmandu"], ["data-offset", "21600", "value", "Astana"], ["data-offset", "21600", "value", "Dhaka"], ["data-offset", "21600", "value", "Almaty"], ["data-offset", "21600", "value", "Urumqi"], ["data-offset", "23400", "value", "Rangoon"], ["data-offset", "25200", "value", "Novosibirsk"], ["data-offset", "25200", "value", "Bangkok"], ["data-offset", "25200", "value", "Hanoi"], ["data-offset", "25200", "value", "Jakarta"], ["data-offset", "25200", "value", "Krasnoyarsk"], ["data-offset", "28800", "value", "Beijing"], ["data-offset", "28800", "value", "Chongqing"], ["data-offset", "28800", "value", "Hong Kong"], ["data-offset", "28800", "value", "Kuala Lumpur"], ["data-offset", "28800", "value", "Singapore"], ["data-offset", "28800", "value", "Taipei"], ["data-offset", "28800", "value", "Perth"], ["data-offset", "28800", "value", "Irkutsk"], ["data-offset", "28800", "value", "Ulaan Bataar"], ["data-offset", "32400", "value", "Seoul"], ["data-offset", "32400", "value", "Osaka"], ["data-offset", "32400", "value", "Sapporo"], ["data-offset", "32400", "value", "Tokyo"], ["data-offset", "32400", "value", "Yakutsk"], ["data-offset", "34200", "value", "Darwin"], ["data-offset", "34200", "value", "Adelaide"], ["data-offset", "36000", "value", "Canberra"], ["data-offset", "36000", "value", "Melbourne"], ["data-offset", "36000", "value", "Sydney"], ["data-offset", "36000", "value", "Brisbane"], ["data-offset", "36000", "value", "Hobart"], ["data-offset", "36000", "value", "Vladivostok"], ["data-offset", "36000", "value", "Guam"], ["data-offset", "36000", "value", "Port Moresby"], ["data-offset", "36000", "value", "Solomon Is."], ["data-offset", "39600", "value", "Magadan"], ["data-offset", "39600", "value", "New Caledonia"], ["data-offset", "43200", "value", "Fiji"], ["data-offset", "43200", "value", "Kamchatka"], ["data-offset", "43200", "value", "Marshall Is."], ["data-offset", "43200", "value", "Auckland"], ["data-offset", "43200", "value", "Wellington"], ["data-offset", "46800", "value", "Nuku'alofa"], [1, "form-group", "row", "align-items-center"], [1, "checkbox-inline"], [1, "checkbox"], ["type", "checkbox", "formControlName", "communicationEmail"], ["type", "checkbox", "formControlName", "communicationSMS"], ["type", "checkbox", "formControlName", "communicationPhone"], [1, "separator", "separator-dashed", "my-5"], ["type", "button", 1, "btn", "btn-light-primary", "font-weight-bold", "btn-sm"], [1, "form-text", "text-muted", "pt-2"], [1, "font-weight-bold", "cursor-pointer"], [1, "checkbox", "m-0"], ["type", "checkbox"], [1, "form-text", "text-muted", "py-2"], [1, "font-weight-boldk", "cursor-pointer"], ["type", "button", 1, "btn", "btn-light-danger", "font-weight-bold", "btn-sm"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]], template: function AccountInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AccountInformationComponent_ng_container_0_Template, 484, 13, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL2FjY291bnQtaW5mb3JtYXRpb24vYWNjb3VudC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account-information',
                templateUrl: './account-information.component.html',
                styleUrls: ['./account-information.component.scss']
            }]
    }], function () { return [{ type: _auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "O4eP":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/user-profile/tax-information/tax-information.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TaxInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxInformationComponent", function() { return TaxInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class TaxInformationComponent {
    constructor() { }
    ngOnInit() {
    }
}
TaxInformationComponent.ɵfac = function TaxInformationComponent_Factory(t) { return new (t || TaxInformationComponent)(); };
TaxInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaxInformationComponent, selectors: [["app-tax-information"]], decls: 2, vars: 0, template: function TaxInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tax-information works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL3RheC1pbmZvcm1hdGlvbi90YXgtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tax-information',
                templateUrl: './tax-information.component.html',
                styleUrls: ['./tax-information.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RbrB":
/*!******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/crud-table.module.ts ***!
  \******************************************************************/
/*! exports provided: CRUDTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUDTableModule", function() { return CRUDTableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/paginator/paginator.component */ "gBr1");
/* harmony import */ var _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/paginator/ng-pagination/ng-pagination.component */ "SBCs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sort-icon/sort-icon.component */ "xGIk");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-inline-svg */ "W79Q");








class CRUDTableModule {
}
CRUDTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CRUDTableModule });
CRUDTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CRUDTableModule_Factory(t) { return new (t || CRUDTableModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CRUDTableModule, { declarations: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]], exports: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CRUDTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]],
                exports: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "SBCs":
/*!***********************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/ng-pagination/ng-pagination.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: NgPaginationEllipsis, NgPaginationFirst, NgPaginationLast, NgPaginationNext, NgPaginationNumber, NgPaginationPrevious, NgPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationEllipsis", function() { return NgPaginationEllipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationFirst", function() { return NgPaginationFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationLast", function() { return NgPaginationLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationNext", function() { return NgPaginationNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationNumber", function() { return NgPaginationNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationPrevious", function() { return NgPaginationPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPagination", function() { return NgPagination; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-pagination.config */ "51MP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
// tslint:disable:max-line-length component-class-suffix directive-selector directive-class-suffix component-selector no-host-metadata-property object-literal-key-quotes prefer-const
// fork of https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination.ts




function NgPagination_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
} }
function NgPagination_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
} }
function NgPagination_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
function NgPagination_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function NgPagination_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "...");
} }
function NgPagination_ng_template_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgPagination_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_template_10_span_1_Template, 2, 0, "span", 13);
} if (rf & 2) {
    const page_r17 = ctx.$implicit;
    const currentPage_r18 = ctx.currentPage;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r17, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", page_r17 === currentPage_r18);
} }
function NgPagination_a_12_ng_template_2_Template(rf, ctx) { }
const _c2 = function (a0, a1) { return { disabled: a0, currentPage: a1 }; };
function NgPagination_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_12_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r21.selectPage(1); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgPagination_a_12_ng_template_2_Template, 0, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r12.previousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r12.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r12.previousDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r12.tplFirst == null ? null : ctx_r12.tplFirst.templateRef) || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c2, ctx_r12.previousDisabled(), ctx_r12.page));
} }
function NgPagination_a_13_ng_template_2_Template(rf, ctx) { }
const _c5 = function (a0) { return { disabled: a0 }; };
function NgPagination_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_13_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r24.selectPage(ctx_r24.page - 1); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgPagination_a_13_ng_template_2_Template, 0, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r13.previousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r13.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r13.previousDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r13.tplPrevious == null ? null : ctx_r13.tplPrevious.templateRef) || _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c5, ctx_r13.previousDisabled()));
} }
function NgPagination_ng_container_14_a_1_ng_template_1_Template(rf, ctx) { }
const _c6 = function (a1) { return { disabled: true, currentPage: a1 }; };
function NgPagination_ng_container_14_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_container_14_a_1_ng_template_1_Template, 0, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pageNumber_r26 === ctx_r27.page)("disabled", ctx_r27.isEllipsis(pageNumber_r26) || ctx_r27.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-current", pageNumber_r26 === ctx_r27.page ? "page" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r27.tplEllipsis == null ? null : ctx_r27.tplEllipsis.templateRef) || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c6, ctx_r27.page));
} }
function NgPagination_ng_container_14_a_2_ng_template_1_Template(rf, ctx) { }
const _c7 = function (a0, a1, a2) { return { disabled: a0, $implicit: a1, currentPage: a2 }; };
function NgPagination_ng_container_14_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_ng_container_14_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r32.selectPage(pageNumber_r26); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_container_14_a_2_ng_template_1_Template, 0, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pageNumber_r26 === ctx_r28.page)("disabled", ctx_r28.isEllipsis(pageNumber_r26) || ctx_r28.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r28.disabled ? "-1" : null)("aria-disabled", ctx_r28.disabled ? "true" : null)("aria-current", pageNumber_r26 === ctx_r28.page ? "page" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r28.tplNumber == null ? null : ctx_r28.tplNumber.templateRef) || _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c7, ctx_r28.disabled, pageNumber_r26, ctx_r28.page));
} }
function NgPagination_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_container_14_a_1_Template, 2, 9, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgPagination_ng_container_14_a_2_Template, 2, 13, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pageNumber_r26 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isEllipsis(pageNumber_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.isEllipsis(pageNumber_r26));
} }
function NgPagination_a_15_ng_template_2_Template(rf, ctx) { }
function NgPagination_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_15_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r37.selectPage(ctx_r37.page + 1); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgPagination_a_15_ng_template_2_Template, 0, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r15.nextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r15.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r15.nextDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r15.tplNext == null ? null : ctx_r15.tplNext.templateRef) || _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c2, ctx_r15.nextDisabled(), ctx_r15.page));
} }
function NgPagination_a_16_ng_template_2_Template(rf, ctx) { }
function NgPagination_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_16_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r40.selectPage(ctx_r40.pageCount); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgPagination_a_16_ng_template_2_Template, 0, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r16.nextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r16.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r16.nextDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r16.tplLast == null ? null : ctx_r16.tplLast.templateRef) || _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c2, ctx_r16.nextDisabled(), ctx_r16.page));
} }
function getValueInRange(value, max, min = 0) {
    return Math.max(Math.min(value, max), min);
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt(`${value}`, 10);
}
/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */
class NgPaginationEllipsis {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationEllipsis.ɵfac = function NgPaginationEllipsis_Factory(t) { return new (t || NgPaginationEllipsis)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationEllipsis.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationEllipsis, selectors: [["ng-template", "ngPaginationEllipsis", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationEllipsis, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationEllipsis]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */
class NgPaginationFirst {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationFirst.ɵfac = function NgPaginationFirst_Factory(t) { return new (t || NgPaginationFirst)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationFirst.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationFirst, selectors: [["ng-template", "ngPaginationFirst", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationFirst, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationFirst]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */
class NgPaginationLast {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationLast.ɵfac = function NgPaginationLast_Factory(t) { return new (t || NgPaginationLast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationLast.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationLast, selectors: [["ng-template", "ngPaginationLast", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationLast, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationLast]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */
class NgPaginationNext {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationNext.ɵfac = function NgPaginationNext_Factory(t) { return new (t || NgPaginationNext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationNext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationNext, selectors: [["ng-template", "ngPaginationNext", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationNext]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */
class NgPaginationNumber {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationNumber.ɵfac = function NgPaginationNumber_Factory(t) { return new (t || NgPaginationNumber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationNumber.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationNumber, selectors: [["ng-template", "ngPaginationNumber", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationNumber, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationNumber]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */
class NgPaginationPrevious {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationPrevious.ɵfac = function NgPaginationPrevious_Factory(t) { return new (t || NgPaginationPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationPrevious.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationPrevious, selectors: [["ng-template", "ngPaginationPrevious", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationPrevious]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
class NgPagination {
    constructor(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
         *  The current page.
         *
         *  Page numbers start with `1`.
         */
        this.page = 1;
        /**
         *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
         *
         *  Event payload is the number of the newly selected page.
         *
         *  Page numbers start with `1`.
         */
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    hasPrevious() { return this.page > 1; }
    hasNext() { return this.page < this.pageCount; }
    nextDisabled() { return !this.hasNext() || this.disabled; }
    previousDisabled() { return !this.hasPrevious() || this.disabled; }
    selectPage(pageNumber) { this._updatePages(pageNumber); }
    ngOnChanges(changes) { this._updatePages(this.page); }
    isEllipsis(pageNumber) { return pageNumber === -1; }
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    _applyEllipses(start, end) {
        if (this.ellipses) {
            if (start > 0) {
                // The first page will always be included. If the displayed range
                // starts after the third page, then add ellipsis. But if the range
                // starts on the third page, then add the second page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (start > 2) {
                    this.pages.unshift(-1);
                }
                else if (start === 2) {
                    this.pages.unshift(2);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                // The last page will always be included. If the displayed range
                // ends before the third-last page, then add ellipsis. But if the range
                // ends on third-last page, then add the second-last page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (end < (this.pageCount - 2)) {
                    this.pages.push(-1);
                }
                else if (end === (this.pageCount - 2)) {
                    this.pages.push(this.pageCount - 1);
                }
                this.pages.push(this.pageCount);
            }
        }
    }
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    _applyRotation() {
        let start = 0;
        let end = this.pageCount;
        let leftOffset = Math.floor(this.maxSize / 2);
        let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    }
    /**
     * Paginates page numbers based on maxSize items per page.
     */
    _applyPagination() {
        let page = Math.ceil(this.page / this.maxSize) - 1;
        let start = page * this.maxSize;
        let end = start + this.maxSize;
        return [start, end];
    }
    _setPageInRange(newPageNo) {
        const prevPageNo = this.page;
        this.page = getValueInRange(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
            this.pageChange.emit(this.page);
        }
    }
    _updatePages(newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!isNumber(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (let i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            let start = 0;
            let end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                [start, end] = this._applyRotation();
            }
            else {
                [start, end] = this._applyPagination();
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
    }
}
NgPagination.ɵfac = function NgPagination_Factory(t) { return new (t || NgPagination)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__["NgPaginationConfig"])); };
NgPagination.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgPagination, selectors: [["ng-pagination"]], contentQueries: function NgPagination_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationEllipsis, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationFirst, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationLast, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationNext, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationNumber, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationPrevious, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplEllipsis = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplFirst = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplLast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplNext = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplNumber = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplPrevious = _t.first);
    } }, hostAttrs: ["role", "navigation"], inputs: { disabled: "disabled", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", ellipses: "ellipses", rotate: "rotate", collectionSize: "collectionSize", maxSize: "maxSize", page: "page", pageSize: "pageSize", size: "size" }, outputs: { pageChange: "pageChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 5, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_first_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__1 = goog.getMsg("First");
        i18n_0 = MSG_EXTERNAL_ng_pagination_first_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__1;
    }
    else {
        i18n_0 = $localize `:@@ng.pagination.first-aria␟f2f852318759c6396b5d3d17031d53817d7b38cc␟2241508602425256033:First`;
    } var i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_previous_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__4 = goog.getMsg("Previous");
        i18n_3 = MSG_EXTERNAL_ng_pagination_previous_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__4;
    }
    else {
        i18n_3 = $localize `:@@ng.pagination.previous-aria␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
    } var i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_next_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__9 = goog.getMsg("Next");
        i18n_8 = MSG_EXTERNAL_ng_pagination_next_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:@@ng.pagination.next-aria␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
    } var i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_last_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__11 = goog.getMsg("Last");
        i18n_10 = MSG_EXTERNAL_ng_pagination_last_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__11;
    }
    else {
        i18n_10 = $localize `:@@ng.pagination.last-aria␟5c729788ba138508aca1bec050b610f7bf81db3e␟4882268002141858767:Last`;
    } return [["first", ""], ["previous", ""], ["next", ""], ["last", ""], ["ellipsis", ""], ["defaultNumber", ""], ["class", "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1", "href", "", 3, "disabled", "click", 4, "ngIf", 6, "aria-label"], [4, "ngFor", "ngForOf"], ["class", "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1", 3, "disabled", "click", 4, "ngIf", 6, "aria-label"], ["aria-hidden", "true", 1, "ki", "ki-bold-double-arrow-back", "icon-xs"], ["aria-hidden", "true", 1, "ki", "ki-bold-arrow-back", "icon-xs"], ["aria-hidden", "true", 1, "ki", "ki-bold-arrow-next", "icon-xs"], ["aria-hidden", "true", 1, "ki", "ki-bold-double-arrow-next", "icon-xs"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["href", "", 1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click", 6, "aria-label"], ["aria-label", i18n_0], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-label", i18n_3], ["class", "btn btn-icon btn-sm border-0 btn-light btn-hover-primary mr-2 my-1", "tabindex", "-1", "aria-disabled", "true", 3, "active", "disabled", 4, "ngIf"], ["class", "btn btn-icon btn-sm border-0 btn-light btn-hover-primary mr-2 my-1", 3, "active", "disabled", "click", 4, "ngIf"], ["tabindex", "-1", "aria-disabled", "true", 1, "btn", "btn-icon", "btn-sm", "border-0", "btn-light", "btn-hover-primary", "mr-2", "my-1"], [1, "btn", "btn-icon", "btn-sm", "border-0", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"], [1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click", 6, "aria-label"], ["aria-label", i18n_8], ["aria-label", i18n_10]]; }, template: function NgPagination_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgPagination_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgPagination_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgPagination_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgPagination_ng_template_6_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgPagination_ng_template_8_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgPagination_ng_template_10_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgPagination_a_12_Template, 3, 9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgPagination_a_13_Template, 3, 8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NgPagination_ng_container_14_Template, 3, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NgPagination_a_15_Template, 3, 9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NgPagination_a_16_Template, 3, 9, "a", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPagination, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-pagination',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: { 'role': 'navigation' },
                templateUrl: './ng-pagination.component.html',
            }]
    }], function () { return [{ type: _ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__["NgPaginationConfig"] }]; }, { tplEllipsis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationEllipsis, { static: false }]
        }], tplFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationFirst, { static: false }]
        }], tplLast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationLast, { static: false }]
        }], tplNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationNext, { static: false }]
        }], tplNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationNumber, { static: false }]
        }], tplPrevious: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationPrevious, { static: false }]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ellipses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collectionSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Vh1Q":
/*!*******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/table.model.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "W1F+":
/*!*************************************************************************!*\
  !*** ./src/app/modules/user-profile/statements/statements.component.ts ***!
  \*************************************************************************/
/*! exports provided: StatementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementsComponent", function() { return StatementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class StatementsComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatementsComponent.ɵfac = function StatementsComponent_Factory(t) { return new (t || StatementsComponent)(); };
StatementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatementsComponent, selectors: [["app-statements"]], decls: 2, vars: 0, template: function StatementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "statements works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL3N0YXRlbWVudHMvc3RhdGVtZW50cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statements',
                templateUrl: './statements.component.html',
                styleUrls: ['./statements.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WWIl":
/*!**********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/grouping.model.ts ***!
  \**********************************************************************/
/*! exports provided: GroupingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupingState", function() { return GroupingState; });
class GroupingState {
    constructor() {
        this.selectedRowIds = new Set();
        this.itemIds = [];
    }
    checkAreAllRowsSelected() {
        if (this.itemIds.length === 0) {
            return false;
        }
        return this.selectedRowIds.size === this.itemIds.length;
    }
    selectRow(id) {
        if (this.selectedRowIds.has(id)) {
            this.selectedRowIds.delete(id);
        }
        else {
            this.selectedRowIds.add(id);
        }
        return this;
    }
    // tslint:disable-next-line:variable-name
    clearRows(_itemIds) {
        this.itemIds = _itemIds;
        this.selectedRowIds = new Set();
        return this;
    }
    isRowSelected(id) {
        return this.selectedRowIds.has(id);
    }
    selectAllRows() {
        const areAllSelected = this.itemIds.length === this.selectedRowIds.size;
        if (areAllSelected) {
            this.selectedRowIds = new Set();
        }
        else {
            this.selectedRowIds = new Set();
            this.itemIds.forEach(id => this.selectedRowIds.add(id));
        }
        return this;
    }
    getSelectedRows() {
        return Array.from(this.selectedRowIds);
    }
    getSelectedRowsCount() {
        return this.selectedRowIds.size;
    }
}


/***/ }),

/***/ "aENq":
/*!***********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/services/table.service.ts ***!
  \***********************************************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/paginator.model */ "fksT");
/* harmony import */ var _models_sort_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/sort.model */ "fr3w");
/* harmony import */ var _models_grouping_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/grouping.model */ "WWIl");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");






const DEFAULT_STATE = {
    filter: {},
    paginator: new _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PaginatorState"](),
    sorting: new _models_sort_model__WEBPACK_IMPORTED_MODULE_3__["SortState"](),
    searchTerm: '',
    grouping: new _models_grouping_model__WEBPACK_IMPORTED_MODULE_4__["GroupingState"](),
    entityId: undefined
};
class TableService {
    constructor(http) {
        // Private fields
        this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this._isFirstLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        this._tableState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](DEFAULT_STATE);
        this._errorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this._subscriptions = [];
        // API URL has to be overrided
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/endpoint`;
        this.http = http;
    }
    // Getters
    get items$() {
        return this._items$.asObservable();
    }
    get isLoading$() {
        return this._isLoading$.asObservable();
    }
    get isFirstLoading$() {
        return this._isFirstLoading$.asObservable();
    }
    get errorMessage$() {
        return this._errorMessage.asObservable();
    }
    get subscriptions() {
        return this._subscriptions;
    }
    // State getters
    get paginator() {
        return this._tableState$.value.paginator;
    }
    get filter() {
        return this._tableState$.value.filter;
    }
    get sorting() {
        return this._tableState$.value.sorting;
    }
    get searchTerm() {
        return this._tableState$.value.searchTerm;
    }
    get grouping() {
        return this._tableState$.value.grouping;
    }
    // CREATE
    // server should return the object with ID
    create(item) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        return this.http.post(this.API_URL, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('CREATE ITEM', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ id: undefined });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // READ (Returning filtered list of entities)
    find(tableState) {
        const url = this.API_URL + '/find';
        this._errorMessage.next('');
        return this.http.post(url, tableState).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('FIND ITEMS', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ items: [], total: 0 });
        }));
    }
    getItemById(id) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = `${this.API_URL}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('GET ITEM BY IT', id, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ id: undefined });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // UPDATE
    update(item) {
        const url = `${this.API_URL}/${item.id}`;
        this._isLoading$.next(true);
        this._errorMessage.next('');
        return this.http.put(url, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('UPDATE ITEM', item, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // UPDATE Status
    updateStatusForItems(ids, status) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const body = { ids, status };
        const url = this.API_URL + '/updateStatus';
        return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('UPDATE STATUS FOR SELECTED ITEMS', ids, status, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // DELETE
    delete(id) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = `${this.API_URL}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('DELETE ITEM', id, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({});
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // delete list of items
    deleteItems(ids = []) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = this.API_URL + '/deleteItems';
        const body = { ids };
        return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('DELETE SELECTED ITEMS', ids, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    fetch() {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const request = this.find(this._tableState$.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            this._items$.next(res.items);
            this.patchStateWithoutFetch({
                paginator: this._tableState$.value.paginator.recalculatePaginator(res.total),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            this._errorMessage.next(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
                items: [],
                total: 0
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this._isLoading$.next(false);
            const itemIds = this._items$.value.map((el) => {
                const item = el;
                return item.id;
            });
            this.patchStateWithoutFetch({
                grouping: this._tableState$.value.grouping.clearRows(itemIds),
            });
        }))
            .subscribe();
        this._subscriptions.push(request);
    }
    // Base Methods
    patchState(patch) {
        this.patchStateWithoutFetch(patch);
        this.fetch();
    }
    patchStateWithoutFetch(patch) {
        const newState = Object.assign(this._tableState$.value, patch);
        this._tableState$.next(newState);
    }
}


/***/ }),

/***/ "f+48":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/user-profile/profile-overview/profile-overview.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProfileOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOverviewComponent", function() { return ProfileOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _metronic_partials_content_widgets_lists_lists_widget14_lists_widget14_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_metronic/partials/content/widgets/lists/lists-widget14/lists-widget14.component */ "8gsj");
/* harmony import */ var _metronic_partials_content_widgets_lists_lists_widget10_lists_widget10_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_metronic/partials/content/widgets/lists/lists-widget10/lists-widget10.component */ "bfka");
/* harmony import */ var _metronic_partials_content_widgets_advance_tables_advance_tables_widget7_advance_tables_widget7_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_metronic/partials/content/widgets/advance-tables/advance-tables-widget7/advance-tables-widget7.component */ "kcr2");





class ProfileOverviewComponent {
}
ProfileOverviewComponent.ɵfac = function ProfileOverviewComponent_Factory(t) { return new (t || ProfileOverviewComponent)(); };
ProfileOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileOverviewComponent, selectors: [["app-profile-overview"]], decls: 6, vars: 0, consts: [[1, "row"], [1, "col-lg-6"], ["cssClass", "card-stretch gutter-b"]], template: function ProfileOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-lists-widget14", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-lists-widget10", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-advance-tables-widget7", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_metronic_partials_content_widgets_lists_lists_widget14_lists_widget14_component__WEBPACK_IMPORTED_MODULE_1__["ListsWidget14Component"], _metronic_partials_content_widgets_lists_lists_widget10_lists_widget10_component__WEBPACK_IMPORTED_MODULE_2__["ListsWidget10Component"], _metronic_partials_content_widgets_advance_tables_advance_tables_widget7_advance_tables_widget7_component__WEBPACK_IMPORTED_MODULE_3__["AdvanceTablesWidget7Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL3Byb2ZpbGUtb3ZlcnZpZXcvcHJvZmlsZS1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-overview',
                templateUrl: './profile-overview.component.html',
                styleUrls: ['./profile-overview.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "fksT":
/*!***********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/paginator.model.ts ***!
  \***********************************************************************/
/*! exports provided: PageSizes, PaginatorState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSizes", function() { return PageSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorState", function() { return PaginatorState; });
const PageSizes = [3, 5, 10, 15, 50, 100];
class PaginatorState {
    constructor() {
        this.page = 1;
        this.pageSize = PageSizes[2];
        this.total = 0;
        this.pageSizes = [];
    }
    recalculatePaginator(total) {
        this.total = total;
        return this;
    }
}


/***/ }),

/***/ "fr3w":
/*!******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/sort.model.ts ***!
  \******************************************************************/
/*! exports provided: SortState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortState", function() { return SortState; });
class SortState {
    constructor() {
        this.column = 'id'; // Id by default
        this.direction = 'asc'; // asc by default;
    }
}


/***/ }),

/***/ "gBr1":
/*!*****************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/paginator.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/paginator.model */ "fksT");
/* harmony import */ var _ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-pagination/ng-pagination.component */ "SBCs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");






function PaginatorComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginatorComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ps_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ps_r2, " ");
} }
class PaginatorComponent {
    constructor() {
        this.paginate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageSizes = _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__["PageSizes"];
    }
    ngOnInit() {
    }
    pageChange(num) {
        this.paginator.page = num;
        this.paginate.emit(this.paginator);
    }
    sizeChange() {
        this.paginator.pageSize = +this.paginator.pageSize;
        this.paginator.page = 1;
        this.paginate.emit(this.paginator);
    }
}
PaginatorComponent.ɵfac = function PaginatorComponent_Factory(t) { return new (t || PaginatorComponent)(); };
PaginatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorComponent, selectors: [["app-paginator"]], inputs: { paginator: "paginator", isLoading: "isLoading" }, outputs: { paginate: "paginate" }, decls: 8, vars: 12, consts: [[1, "d-flex", "flex-wrap", "py-2", "mr-3"], [3, "collectionSize", "page", "maxSize", "rotate", "boundaryLinks", "pageSize", "pageChange"], [1, "d-flex", "align-items-center", "py-3"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "form-control", "form-control-sm", "font-weight-bold", "mr-4", "border-0", "bg-light", "false", 2, "width", "75px", 3, "ngModel", "ngModelChange", "change"], ["class", "btn", 4, "ngFor", "ngForOf"], [1, "react-bootstrap-table-pagin", "ation-total"], [1, "d-flex", "align-items-center"], [1, "mr-2", "text-muted"], [1, "spinner", "spinner-primary", "mr-10"], [1, "btn"]], template: function PaginatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-pagination", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginatorComponent_Template_ng_pagination_pageChange_1_listener($event) { return ctx.paginator.page = $event; })("pageChange", function PaginatorComponent_Template_ng_pagination_pageChange_1_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginatorComponent_div_3_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaginatorComponent_Template_select_ngModelChange_4_listener($event) { return ctx.paginator.pageSize = $event; })("change", function PaginatorComponent_Template_select_change_4_listener() { return ctx.sizeChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginatorComponent_option_5_Template, 2, 1, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.paginator.total)("page", ctx.paginator.page)("maxSize", 4)("rotate", true)("boundaryLinks", true)("pageSize", ctx.paginator.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.paginator.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageSizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("\u00A0Showing rows ", ctx.paginator.page, " to\u00A0", ctx.paginator.pageSize, " of\u00A0", ctx.paginator.total, "");
    } }, directives: [_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_2__["NgPagination"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19tZXRyb25pYy9zaGFyZWQvY3J1ZC10YWJsZS9jb21wb25lbnRzL3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paginator',
                templateUrl: './paginator.component.html',
                styleUrls: ['./paginator.component.scss']
            }]
    }], function () { return []; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paginate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "gWCS":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/user-profile/saved-credit-cards/saved-credit-cards.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SavedCreditCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedCreditCardsComponent", function() { return SavedCreditCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class SavedCreditCardsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SavedCreditCardsComponent.ɵfac = function SavedCreditCardsComponent_Factory(t) { return new (t || SavedCreditCardsComponent)(); };
SavedCreditCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SavedCreditCardsComponent, selectors: [["app-saved-credit-cards"]], decls: 2, vars: 0, template: function SavedCreditCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "saved-credit-cards works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL3NhdmVkLWNyZWRpdC1jYXJkcy9zYXZlZC1jcmVkaXQtY2FyZHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavedCreditCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-saved-credit-cards',
                templateUrl: './saved-credit-cards.component.html',
                styleUrls: ['./saved-credit-cards.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mXZP":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/user-profile/email-settings/email-settings.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EmailSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSettingsComponent", function() { return EmailSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth */ "tmEo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");






function EmailSettingsComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function EmailSettingsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailSettingsComponent_ng_container_0_ng_container_2_Template, 3, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Change your email settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailSettingsComponent_ng_container_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailSettingsComponent_ng_container_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Setup Email Notification:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email Notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Send Copy To Personal Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Activity Related Emails:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "When To Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "You have new notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "You're sent a direct message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Someone adds you as a connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "When To Escalate Emails");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Upon new order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "New membership approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Member registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Updates From Keenthemes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Email You With");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "News about Keenthemes products and feature updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Tips on getting more out of Keen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Things you missed since you last logged into Keen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "News about Metronic on partner products and other services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Tips on Metronic business products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r0.isLoading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.formGroup.invalid);
} }
class EmailSettingsComponent {
    constructor(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.subscriptions = [];
        this.isLoading$ = this.userService.isLoadingSubject.asObservable();
    }
    ngOnInit() {
        const sb = this.userService.currentUserSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(user => !!user)).subscribe(user => {
            this.user = Object.assign({}, user);
            this.firstUserState = Object.assign({}, user);
            this.loadForm();
        });
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    loadForm() {
        this.formGroup = this.fb.group({
            emailNotification: [this.user.emailSettings.emailNotification],
            sendCopyToPersonalEmail: [this.user.emailSettings.sendCopyToPersonalEmail],
            youHaveNewNotifications: [this.user.emailSettings.activityRelatesEmail.youHaveNewNotifications],
            youAreSentADirectMessage: [this.user.emailSettings.activityRelatesEmail.youAreSentADirectMessage],
            someoneAddsYouAsAsAConnection: [this.user.emailSettings.activityRelatesEmail.someoneAddsYouAsAsAConnection],
            uponNewOrder: [this.user.emailSettings.activityRelatesEmail.uponNewOrder],
            newMembershipApproval: [this.user.emailSettings.activityRelatesEmail.newMembershipApproval],
            memberRegistration: [this.user.emailSettings.activityRelatesEmail.memberRegistration],
            newsAboutKeenthemesProductsAndFeatureUpdates: [this.user.emailSettings.updatesFromKeenthemes.newsAboutKeenthemesProductsAndFeatureUpdates],
            tipsOnGettingMoreOutOfKeen: [this.user.emailSettings.updatesFromKeenthemes.tipsOnGettingMoreOutOfKeen],
            thingsYouMissedSindeYouLastLoggedIntoKeen: [this.user.emailSettings.updatesFromKeenthemes.thingsYouMissedSindeYouLastLoggedIntoKeen],
            newsAboutMetronicOnPartnerProductsAndOtherServices: [this.user.emailSettings.updatesFromKeenthemes.newsAboutMetronicOnPartnerProductsAndOtherServices],
            tipsOnMetronicBusinessProducts: [this.user.emailSettings.updatesFromKeenthemes.tipsOnMetronicBusinessProducts]
        });
    }
    save() {
        this.formGroup.markAllAsTouched();
        if (!this.formGroup.valid) {
            return;
        }
        const formValues = this.formGroup.value;
        this.user = Object.assign(this.user, {
            emailSettings: {
                emailNotification: formValues.emailNotification,
                sendCopyToPersonalEmail: formValues.sendCopyToPersonalEmail,
                activityRelatesEmail: {
                    youHaveNewNotifications: formValues.youHaveNewNotifications,
                    youAreSentADirectMessage: formValues.youAreSentADirectMessage,
                    someoneAddsYouAsAsAConnection: formValues.someoneAddsYouAsAsAConnection,
                    uponNewOrder: formValues.uponNewOrder,
                    newMembershipApproval: formValues.newMembershipApproval,
                    memberRegistration: formValues.memberRegistration
                },
                updatesFromKeenthemes: {
                    newsAboutKeenthemesProductsAndFeatureUpdates: formValues.newsAboutKeenthemesProductsAndFeatureUpdates,
                    tipsOnGettingMoreOutOfKeen: formValues.tipsOnGettingMoreOutOfKeen,
                    thingsYouMissedSindeYouLastLoggedIntoKeen: formValues.thingsYouMissedSindeYouLastLoggedIntoKeen,
                    newsAboutMetronicOnPartnerProductsAndOtherServices: formValues.newsAboutMetronicOnPartnerProductsAndOtherServices,
                    tipsOnMetronicBusinessProducts: formValues.tipsOnMetronicBusinessProducts
                }
            }
        });
        // Do request to your server for user update, we just imitate user update there
        this.userService.isLoadingSubject.next(true);
        setTimeout(() => {
            this.userService.currentUserSubject.next(Object.assign({}, this.user));
            this.userService.isLoadingSubject.next(false);
        }, 2000);
    }
    cancel() {
        this.user = Object.assign({}, this.firstUserState);
        this.loadForm();
    }
}
EmailSettingsComponent.ɵfac = function EmailSettingsComponent_Factory(t) { return new (t || EmailSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
EmailSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailSettingsComponent, selectors: [["app-email-settings"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "card", "card-custom", 3, "formGroup"], [1, "card-header", "py-3"], [1, "card-title", "align-items-start", "flex-column"], [1, "card-label", "font-weight-bolder", "text-dark"], [1, "text-muted", "font-weight-bold", "font-size-sm", "mt-1"], [1, "card-toolbar"], ["type", "submit", 1, "btn", "btn-success", "mr-2", 3, "disabled", "click"], ["type", "reset", 1, "btn", "btn-secondary", 3, "click"], [1, "form"], [1, "card-body"], [1, "row"], [1, "col-xl-3"], [1, "col-lg-9", "col-xl-6"], [1, "font-weight-bold", "mb-6"], [1, "form-group", "row", "align-items-center"], [1, "col-xl-3", "col-lg-3", "col-form-label", "font-weight-bold", "text-left", "text-lg-right"], [1, "switch", "switch-sm"], ["type", "checkbox", "formControlName", "emailNotification"], ["type", "checkbox", "formControlName", "sendCopyToPersonalEmail"], [1, "separator", "separator-dashed", "my-10"], [1, "form-group", "row"], [1, "checkbox-list"], [1, "checkbox"], ["type", "checkbox", "formControlName", "youHaveNewNotifications"], ["type", "checkbox", "formControlName", "youAreSentADirectMessage"], ["type", "checkbox", "formControlName", "someoneAddsYouAsAsAConnection"], [1, "checkbox", "checkbox-primary"], ["type", "checkbox", "formControlName", "uponNewOrder"], ["type", "checkbox", "formControlName", "newMembershipApproval"], ["type", "checkbox", "formControlName", "memberRegistration"], ["type", "checkbox", "formControlName", "newsAboutKeenthemesProductsAndFeatureUpdates"], ["type", "checkbox", "formControlName", "tipsOnGettingMoreOutOfKeen"], ["type", "checkbox", "formControlName", "thingsYouMissedSindeYouLastLoggedIntoKeen"], ["type", "checkbox", "formControlName", "newsAboutMetronicOnPartnerProductsAndOtherServices"], ["type", "checkbox", "formControlName", "tipsOnMetronicBusinessProducts"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]], template: function EmailSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmailSettingsComponent_ng_container_0_Template, 109, 5, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL2VtYWlsLXNldHRpbmdzL2VtYWlsLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email-settings',
                templateUrl: './email-settings.component.html',
                styleUrls: ['./email-settings.component.scss']
            }]
    }], function () { return [{ type: _auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "rEKL":
/*!****************************************************!*\
  !*** ./src/app/_metronic/partials/layout/index.ts ***!
  \****************************************************/
/*! exports provided: SubheaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subheader_services_subheader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subheader/_services/subheader.service */ "K3AU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubheaderService", function() { return _subheader_services_subheader_service__WEBPACK_IMPORTED_MODULE_0__["SubheaderService"]; });




/***/ }),

/***/ "skVc":
/*!****************************************************************!*\
  !*** ./src/app/modules/user-profile/user-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _metronic_partials_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_metronic/partials/layout */ "rEKL");
/* harmony import */ var _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/profile-card/profile-card.component */ "6UdT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





class UserProfileComponent {
    constructor(subheader) {
        this.subheader = subheader;
    }
    ngOnInit() {
        setTimeout(() => {
            this.subheader.setTitle('User Profile');
            this.subheader.setBreadcrumbs([{
                    title: 'User profile',
                    linkText: 'User profile',
                    linkPath: '/user-profile'
                }]);
        }, 1);
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_metronic_partials_layout__WEBPACK_IMPORTED_MODULE_1__["SubheaderService"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 5, vars: 0, consts: [[1, "d-flex", "flex-row"], ["id", "kt_profile_aside", 1, "flex-row-auto", "offcanvas-mobile", "w-300px", "w-xl-350px"], [1, "flex-row-fluid", "ml-lg-8"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-profile-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_2__["ProfileCardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.scss']
            }]
    }], function () { return [{ type: _metronic_partials_layout__WEBPACK_IMPORTED_MODULE_1__["SubheaderService"] }]; }, null); })();


/***/ }),

/***/ "ssmD":
/*!*************************************************************!*\
  !*** ./src/app/modules/user-profile/user-profile.module.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-inline-svg */ "W79Q");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_metronic/partials/content/widgets/widgets.module */ "kFOB");
/* harmony import */ var _metronic_partials_content_dropdown_menus_dropdown_menus_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_metronic/partials/content/dropdown-menus/dropdown-menus.module */ "51fn");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile.component */ "skVc");
/* harmony import */ var _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile-overview/profile-overview.component */ "f+48");
/* harmony import */ var _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./personal-information/personal-information.component */ "yQxR");
/* harmony import */ var _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account-information/account-information.component */ "Hr9Q");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./change-password/change-password.component */ "CwcJ");
/* harmony import */ var _email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./email-settings/email-settings.component */ "mXZP");
/* harmony import */ var _saved_credit_cards_saved_credit_cards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./saved-credit-cards/saved-credit-cards.component */ "gWCS");
/* harmony import */ var _tax_information_tax_information_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tax-information/tax-information.component */ "O4eP");
/* harmony import */ var _statements_statements_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./statements/statements.component */ "W1F+");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-profile-routing.module */ "3WTx");
/* harmony import */ var _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_components/profile-card/profile-card.component */ "6UdT");
/* harmony import */ var _i18n_translation_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../i18n/translation.module */ "tM0M");





















class UserProfileModule {
}
UserProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserProfileModule });
UserProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserProfileModule_Factory(t) { return new (t || UserProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_5__["CRUDTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__["InlineSVGModule"],
            _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_17__["UserProfileRoutingModule"],
            _metronic_partials_content_dropdown_menus_dropdown_menus_module__WEBPACK_IMPORTED_MODULE_7__["DropdownMenusModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"],
            _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"],
            _i18n_translation_module__WEBPACK_IMPORTED_MODULE_19__["TranslationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProfileModule, { declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"],
        _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_9__["ProfileOverviewComponent"],
        _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_10__["PersonalInformationComponent"],
        _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_11__["AccountInformationComponent"],
        _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_12__["ChangePasswordComponent"],
        _email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_13__["EmailSettingsComponent"],
        _saved_credit_cards_saved_credit_cards_component__WEBPACK_IMPORTED_MODULE_14__["SavedCreditCardsComponent"],
        _tax_information_tax_information_component__WEBPACK_IMPORTED_MODULE_15__["TaxInformationComponent"],
        _statements_statements_component__WEBPACK_IMPORTED_MODULE_16__["StatementsComponent"],
        _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_18__["ProfileCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_5__["CRUDTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__["InlineSVGModule"],
        _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_17__["UserProfileRoutingModule"],
        _metronic_partials_content_dropdown_menus_dropdown_menus_module__WEBPACK_IMPORTED_MODULE_7__["DropdownMenusModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"],
        _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"],
        _i18n_translation_module__WEBPACK_IMPORTED_MODULE_19__["TranslationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"],
                    _profile_overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_9__["ProfileOverviewComponent"],
                    _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_10__["PersonalInformationComponent"],
                    _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_11__["AccountInformationComponent"],
                    _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_12__["ChangePasswordComponent"],
                    _email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_13__["EmailSettingsComponent"],
                    _saved_credit_cards_saved_credit_cards_component__WEBPACK_IMPORTED_MODULE_14__["SavedCreditCardsComponent"],
                    _tax_information_tax_information_component__WEBPACK_IMPORTED_MODULE_15__["TaxInformationComponent"],
                    _statements_statements_component__WEBPACK_IMPORTED_MODULE_16__["StatementsComponent"],
                    _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_18__["ProfileCardComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_5__["CRUDTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_3__["InlineSVGModule"],
                    _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_17__["UserProfileRoutingModule"],
                    _metronic_partials_content_dropdown_menus_dropdown_menus_module__WEBPACK_IMPORTED_MODULE_7__["DropdownMenusModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"],
                    _metronic_partials_content_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_6__["WidgetsModule"],
                    _i18n_translation_module__WEBPACK_IMPORTED_MODULE_19__["TranslationModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xGIk":
/*!*****************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/sort-icon/sort-icon.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SortIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortIconComponent", function() { return SortIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ "W79Q");




function SortIconComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Navigation/Up-2.svg");
} }
function SortIconComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Navigation/Down-2.svg");
} }
function SortIconComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SortIconComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SortIconComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeDirection === "asc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeDirection === "desc");
} }
function SortIconComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Shopping/Sort1.svg");
} }
class SortIconComponent {
    constructor(el) {
        this.el = el;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isActive = false;
    }
    ngOnChanges() {
        const parent = this.el.nativeElement.parentElement;
        if (!parent) {
            return;
        }
        // Load css classes
        parent.classList.add('sortable');
        parent.classList.remove('sortable-active');
        if (this.column === this.activeColumn) {
            parent.classList.add('sortable-active');
        }
        // load icons
        this.isActive = this.column === this.activeColumn;
    }
    ngOnInit() {
        const parent = this.el.nativeElement.parentElement;
        if (!parent) {
            return;
        }
        parent.addEventListener('click', () => {
            this.sort.emit(this.column);
        });
    }
}
SortIconComponent.ɵfac = function SortIconComponent_Factory(t) { return new (t || SortIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SortIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SortIconComponent, selectors: [["app-sort-icon"]], inputs: { column: "column", activeColumn: "activeColumn", activeDirection: "activeDirection" }, outputs: { sort: "sort" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-sm", "svg-icon-primary", "ml-1", 3, "inlineSVG"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-sm", "svg-icon-primary", "ml-1", "svg-icon-sort", 3, "inlineSVG"]], template: function SortIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SortIconComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SortIconComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__["InlineSVGDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19tZXRyb25pYy9zaGFyZWQvY3J1ZC10YWJsZS9jb21wb25lbnRzL3NvcnQtaWNvbi9zb3J0LWljb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sort-icon',
                templateUrl: './sort-icon.component.html',
                styleUrls: ['./sort-icon.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "yQxR":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/user-profile/personal-information/personal-information.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PersonalInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInformationComponent", function() { return PersonalInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth */ "tmEo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");







function PersonalInformationComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function PersonalInformationComponent_ng_container_0_span_34_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalInformationComponent_ng_container_0_span_34_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.deletePic(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PersonalInformationComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PersonalInformationComponent_ng_container_0_ng_container_2_Template, 3, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Personal Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Update your personal informaiton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalInformationComponent_ng_container_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalInformationComponent_ng_container_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Customer Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PersonalInformationComponent_ng_container_0_span_34_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Allowed file types: png, jpg, jpeg.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "If you want your invoices addressed to a company. Leave blank to use your full name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Contact Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "We'll never share your email with anyone else.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Company Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 34, ctx_r0.isLoading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.formGroup.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(./assets/media/users/blank.png)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("image-input-empty", !ctx_r0.user.userprofile.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx_r0.getPic());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.userprofile.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.isControlInvalid("firstname"))("is-valid", ctx_r0.isControlValid("firstname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.isControlInvalid("lastname"))("is-valid", ctx_r0.isControlValid("lastname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.isControlInvalid("companyName"))("is-valid", ctx_r0.isControlValid("companyName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.isControlInvalid("phone"))("is-valid", ctx_r0.isControlValid("phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.isControlInvalid("email"))("is-valid", ctx_r0.isControlValid("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.isControlInvalid("website"))("is-valid", ctx_r0.isControlValid("website"));
} }
class PersonalInformationComponent {
    constructor(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.subscriptions = [];
        this.avatarPic = 'none';
        this.isLoading$ = this.userService.isLoadingSubject.asObservable();
    }
    ngOnInit() {
        const sb = this.userService.currentUserSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(user => !!user)).subscribe(user => {
            this.user = Object.assign({}, user);
            this.firstUserState = Object.assign({}, user);
            this.loadForm();
        });
        this.subscriptions.push(sb);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
    loadForm() {
        this.formGroup = this.fb.group({
            avatar: [this.user.userprofile.avatar],
            firstname: [this.user.first_name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastname: [this.user.last_name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            companyName: [this.user.companyName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: [this.user.userprofile.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            website: [this.user.userprofile.website, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    save() {
        this.formGroup.markAllAsTouched();
        if (!this.formGroup.valid) {
            return;
        }
        const formValues = this.formGroup.value;
        this.user = Object.assign(this.user, formValues);
        // Do request to your server for user update, we just imitate user update there
        this.userService.isLoadingSubject.next(true);
        setTimeout(() => {
            this.userService.currentUserSubject.next(Object.assign({}, this.user));
            this.userService.isLoadingSubject.next(false);
        }, 2000);
    }
    cancel() {
        this.user = Object.assign({}, this.firstUserState);
        this.loadForm();
    }
    getPic() {
        if (!this.user.userprofile.avatar) {
            return 'none';
        }
        return `url('${this.user.userprofile.avatar}')`;
    }
    deletePic() {
        this.user.userprofile.avatar = '';
    }
    // helpers for View
    isControlValid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.formGroup.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
}
PersonalInformationComponent.ɵfac = function PersonalInformationComponent_Factory(t) { return new (t || PersonalInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
PersonalInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalInformationComponent, selectors: [["app-personal-information"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "card", "card-custom", "card-stretch", 3, "formGroup"], [1, "card-header", "py-3"], [1, "card-title", "align-items-start", "flex-column"], [1, "card-label", "font-weight-bolder", "text-dark"], [1, "text-muted", "font-weight-bold", "font-size-sm", "mt-1"], [1, "card-toolbar"], ["type", "submit", 1, "btn", "btn-success", "mr-2", 3, "disabled", "click"], ["type", "reset", 1, "btn", "btn-secondary", 3, "click"], [1, "form"], [1, "card-body"], [1, "row"], [1, "col-xl-3"], [1, "col-lg-9", "col-xl-6"], [1, "font-weight-bold", "mb-6"], [1, "form-group", "row"], [1, "col-xl-3", "col-lg-3", "col-form-label"], ["id", "kt_profile_avatar", 1, "image-input", "image-input-outline"], [1, "image-input-wrapper"], ["data-action", "change", "data-toggle", "tooltip", "title", "", "data-original-title", "Change avatar", 1, "btn", "btn-xs", "btn-icon", "btn-circle", "btn-white", "btn-hover-text-primary", "btn-shadow"], [1, "fa", "fa-pen", "icon-sm", "text-muted"], ["type", "file", "name", "profile_avatar", "accept", ".png, .jpg, .jpeg"], ["type", "hidden", "name", "profile_avatar_remove", "formControlName", "avatar"], ["data-action", "cancel", "data-toggle", "tooltip", "title", "", "data-original-title", "Cancel avatar", 1, "btn", "btn-xs", "btn-icon", "btn-circle", "btn-white", "btn-hover-text-primary", "btn-shadow"], [1, "ki", "ki-bold-close", "icon-xs", "text-muted"], ["class", "btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow", "data-action", "remove", "data-toggle", "tooltip", "title", "", "data-original-title", "Remove avatar", 3, "click", 4, "ngIf"], [1, "form-text", "text-muted"], ["type", "text", "formControlName", "firstname", 1, "form-control", "form-control-lg", "form-control-solid"], ["type", "text", "value", "Bold", "formControlName", "lastname", 1, "form-control", "form-control-lg", "form-control-solid"], ["type", "text", "formControlName", "companyName", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "font-weight-bold", "mt-10", "mb-6"], [1, "input-group", "input-group-lg", "input-group-solid"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-phone"], ["type", "text", "placeholder", "Phone", "formControlName", "phone", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "fa", "fa-at"], ["type", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-lg", "form-control-solid"], ["type", "text", "placeholder", "Company Website", "formControlName", "website", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"], ["data-action", "remove", "data-toggle", "tooltip", "title", "", "data-original-title", "Remove avatar", 1, "btn", "btn-xs", "btn-icon", "btn-circle", "btn-white", "btn-hover-text-primary", "btn-shadow", 3, "click"]], template: function PersonalInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PersonalInformationComponent_ng_container_0_Template, 85, 36, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm9maWxlL3BlcnNvbmFsLWluZm9ybWF0aW9uL3BlcnNvbmFsLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-personal-information',
                templateUrl: './personal-information.component.html',
                styleUrls: ['./personal-information.component.scss']
            }]
    }], function () { return [{ type: _auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-user-profile-user-profile-module-es2015.js.map