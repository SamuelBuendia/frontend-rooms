(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-type-content-type-routing-module"], {
    /***/
    "yaWj":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/content-type/content-type-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ContentTypeRoutingModule */

    /***/
    function yaWj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentTypeRoutingModule", function () {
        return ContentTypeRoutingModule;
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


      var _content_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./content-type.component */
      "mjWm");
      /* harmony import */


      var _content_types_content_types_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./content-types/content-types.component */
      "+OYP");
      /* harmony import */


      var _content_types_content_type_edit_content_type_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./content-types/content-type-edit/content-type-edit.component */
      "yRXL");

      var routes = [{
        path: '',
        component: _content_type_component__WEBPACK_IMPORTED_MODULE_2__["ContentTypeComponent"],
        children: [{
          path: 'list',
          component: _content_types_content_types_component__WEBPACK_IMPORTED_MODULE_3__["ContentTypesComponent"]
        }, {
          path: 'add',
          component: _content_types_content_type_edit_content_type_edit_component__WEBPACK_IMPORTED_MODULE_4__["ContentTypeEditComponent"]
        }, {
          path: 'edit/:id',
          component: _content_types_content_type_edit_content_type_edit_component__WEBPACK_IMPORTED_MODULE_4__["ContentTypeEditComponent"]
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

      var ContentTypeRoutingModule = function ContentTypeRoutingModule() {
        _classCallCheck(this, ContentTypeRoutingModule);
      };

      ContentTypeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ContentTypeRoutingModule
      });
      ContentTypeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ContentTypeRoutingModule_Factory(t) {
          return new (t || ContentTypeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentTypeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentTypeRoutingModule, [{
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
//# sourceMappingURL=pages-content-type-content-type-routing-module-es5.js.map