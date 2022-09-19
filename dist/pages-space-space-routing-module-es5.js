(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-space-space-routing-module"], {
    /***/
    "PbGn":
    /*!*****************************************************!*\
      !*** ./src/app/pages/space/space-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: SpaceRoutingModule */

    /***/
    function PbGn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpaceRoutingModule", function () {
        return SpaceRoutingModule;
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


      var _space_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./space.component */
      "PyXA");
      /* harmony import */


      var _spaces_spaces_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./spaces/spaces.component */
      "T5kf");
      /* harmony import */


      var _spaces_space_edit_space_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./spaces/space-edit/space-edit.component */
      "a8ZP");

      var routes = [{
        path: '',
        component: _space_component__WEBPACK_IMPORTED_MODULE_2__["SpaceComponent"],
        children: [{
          path: 'list',
          component: _spaces_spaces_component__WEBPACK_IMPORTED_MODULE_3__["SpacesComponent"]
        }, {
          path: 'add',
          component: _spaces_space_edit_space_edit_component__WEBPACK_IMPORTED_MODULE_4__["SpaceEditComponent"]
        }, {
          path: 'edit/:id',
          component: _spaces_space_edit_space_edit_component__WEBPACK_IMPORTED_MODULE_4__["SpaceEditComponent"],
          children: [{
            path: 'rooms',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-room-room-routing-module */
              "pages-room-room-routing-module").then(__webpack_require__.bind(null,
              /*! ../../pages/room/room-routing.module */
              "8+wY")).then(function (m) {
                return m.RoomRoutingModule;
              });
            }
          }]
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

      var SpaceRoutingModule = function SpaceRoutingModule() {
        _classCallCheck(this, SpaceRoutingModule);
      };

      SpaceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SpaceRoutingModule
      });
      SpaceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SpaceRoutingModule_Factory(t) {
          return new (t || SpaceRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SpaceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpaceRoutingModule, [{
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
//# sourceMappingURL=pages-space-space-routing-module-es5.js.map