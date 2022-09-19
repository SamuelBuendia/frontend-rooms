(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-group-routing-module"], {
    /***/
    "YAB7":
    /*!*****************************************************!*\
      !*** ./src/app/pages/group/group-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: GroupRoutingModule */

    /***/
    function YAB7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupRoutingModule", function () {
        return GroupRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./group.component */
      "WUQW");
      /* harmony import */


      var _groups_groups_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./groups/groups.component */
      "+Yal");
      /* harmony import */


      var _groups_group_edit_group_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./groups/group-edit/group-edit.component */
      "a9li");

      var routes = [{
        path: '',
        component: _group_component__WEBPACK_IMPORTED_MODULE_2__["GroupComponent"],
        children: [{
          path: 'list',
          component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_3__["GroupsComponent"]
        }, {
          path: 'add',
          component: _groups_group_edit_group_edit_component__WEBPACK_IMPORTED_MODULE_4__["GroupEditComponent"]
        }, {
          path: 'edit/:id',
          component: _groups_group_edit_group_edit_component__WEBPACK_IMPORTED_MODULE_4__["GroupEditComponent"]
        }, {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        }, {
          path: '**',
          redirectTo: 'list',
          pathMatch: 'full'
        }]
      }];

      var GroupRoutingModule = function GroupRoutingModule() {
        _classCallCheck(this, GroupRoutingModule);
      };

      GroupRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GroupRoutingModule
      });
      GroupRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GroupRoutingModule_Factory(t) {
          return new (t || GroupRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GroupRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-group-group-routing-module-es5.js.map