(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-permission-permission-routing-module"], {
    /***/
    "m1CI":
    /*!***************************************************************!*\
      !*** ./src/app/pages/permission/permission-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: PermissionRoutingModule */

    /***/
    function m1CI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionRoutingModule", function () {
        return PermissionRoutingModule;
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


      var _permission_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./permission.component */
      "ISSM");
      /* harmony import */


      var _permissions_permissions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./permissions/permissions.component */
      "1RpS");
      /* harmony import */


      var _permissions_permission_edit_permission_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./permissions/permission-edit/permission-edit.component */
      "jlho");

      var routes = [{
        path: '',
        component: _permission_component__WEBPACK_IMPORTED_MODULE_2__["PermissionComponent"],
        children: [{
          path: 'list',
          component: _permissions_permissions_component__WEBPACK_IMPORTED_MODULE_3__["PermissionsComponent"]
        }, {
          path: 'add',
          component: _permissions_permission_edit_permission_edit_component__WEBPACK_IMPORTED_MODULE_4__["PermissionEditComponent"]
        }, {
          path: 'edit/:id',
          component: _permissions_permission_edit_permission_edit_component__WEBPACK_IMPORTED_MODULE_4__["PermissionEditComponent"]
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

      var PermissionRoutingModule = function PermissionRoutingModule() {
        _classCallCheck(this, PermissionRoutingModule);
      };

      PermissionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PermissionRoutingModule
      });
      PermissionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PermissionRoutingModule_Factory(t) {
          return new (t || PermissionRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PermissionRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionRoutingModule, [{
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
//# sourceMappingURL=pages-permission-permission-routing-module-es5.js.map