(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./src/app/components/header-landing/header-landing.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/header-landing/header-landing.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLandingComponent", function() { return HeaderLandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo/logo.component */ "./src/app/components/logo/logo.component.ts");



var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1926157928707021468$$SRC_APP_COMPONENTS_HEADER_LANDING_HEADER_LANDING_COMPONENT_TS_1 = goog.getMsg("Inicio");
    I18N_0 = MSG_EXTERNAL_1926157928707021468$$SRC_APP_COMPONENTS_HEADER_LANDING_HEADER_LANDING_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟45a4b797ab6931fb10ed4ad33c49a77582db3db8␟1926157928707021468:Inicio`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4546458009532801804$$SRC_APP_COMPONENTS_HEADER_LANDING_HEADER_LANDING_COMPONENT_TS_3 = goog.getMsg("Tecnolog\u00EDas");
    I18N_2 = MSG_EXTERNAL_4546458009532801804$$SRC_APP_COMPONENTS_HEADER_LANDING_HEADER_LANDING_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:␟549ca2f616cb06c6ee0414ff11f6973032a1db07␟4546458009532801804:Tecnologías`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5570724406774044967$$SRC_APP_COMPONENTS_HEADER_LANDING_HEADER_LANDING_COMPONENT_TS_5 = goog.getMsg("Beneficios");
    I18N_4 = MSG_EXTERNAL_5570724406774044967$$SRC_APP_COMPONENTS_HEADER_LANDING_HEADER_LANDING_COMPONENT_TS_5;
}
else {
    I18N_4 = $localize `:␟8eafbb4e71258770e73c931f66dcc64ce131b151␟5570724406774044967:Beneficios`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8060857996537210324$$SRC_APP_COMPONENTS_HEADER_LANDING_HEADER_LANDING_COMPONENT_TS_7 = goog.getMsg("Requerimientos");
    I18N_6 = MSG_EXTERNAL_8060857996537210324$$SRC_APP_COMPONENTS_HEADER_LANDING_HEADER_LANDING_COMPONENT_TS_7;
}
else {
    I18N_6 = $localize `:␟807c39a6da67e3f357e7b102cc531f8eccde305a␟8060857996537210324:Requerimientos`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5752331855682104921$$SRC_APP_COMPONENTS_HEADER_LANDING_HEADER_LANDING_COMPONENT_TS_9 = goog.getMsg("Ingresar");
    I18N_8 = MSG_EXTERNAL_5752331855682104921$$SRC_APP_COMPONENTS_HEADER_LANDING_HEADER_LANDING_COMPONENT_TS_9;
}
else {
    I18N_8 = $localize `:␟66e9daee15cbf831a40b0f4c5df884ec139f710f␟5752331855682104921:Ingresar`;
}
class HeaderLandingComponent {
    constructor() {
        this.showMenu = false;
    }
    ngOnInit() {
    }
}
HeaderLandingComponent.ɵfac = function HeaderLandingComponent_Factory(t) { return new (t || HeaderLandingComponent)(); };
HeaderLandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderLandingComponent, selectors: [["wlx-header-landing"]], decls: 20, vars: 0, consts: [["type", "button", 3, "click"], ["href", "#home"], [1, "round", "primary"], ["href", "#Login"]], template: function HeaderLandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "wlx-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderLandingComponent_Template_button_click_2_listener() { return ctx.showMenu = !ctx.showMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](13, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](16, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](19, I18N_8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__["LogoComponent"]], styles: ["[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%]   nav[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n}\n[_nghost-%COMP%]   nav[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0;\n  list-style: none;\n}\n[_nghost-%COMP%]   nav[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dvbG94L3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXItbGFuZGluZy9oZWFkZXItbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQURGO0FBRUU7RUFDRSxzQkFBQTtBQUFKO0FBRUU7RUFDRSxhQUFBO0FBQUo7QUFDSTtFQUZGO0lBR0ksb0JBQUE7RUFFSjtBQUNGO0FBREk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBR047QUFGTTtFQUNFLGNBQUE7QUFJUiIsImZpbGUiOiJwcm9qZWN0cy93b2xveC9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyLWxhbmRpbmcvaGVhZGVyLWxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgJiA+ICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiRicmVha3BvaW50LXNtKSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB9XG4gICAgJiA+IG9sIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgJiA+IGxpIHtcbiAgICAgICAgbWFyZ2luOiAwICRzcGFjZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderLandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'wlx-header-landing',
                templateUrl: './header-landing.component.html',
                styleUrls: ['./header-landing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home-landing/home-landing.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-landing/home-landing.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLandingComponent", function() { return HomeLandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_landing_header_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header-landing/header-landing.component */ "./src/app/components/header-landing/header-landing.component.ts");



class HomeLandingComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeLandingComponent.ɵfac = function HomeLandingComponent_Factory(t) { return new (t || HomeLandingComponent)(); };
HomeLandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeLandingComponent, selectors: [["wlx-home-landing"]], decls: 2, vars: 0, template: function HomeLandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "wlx-header-landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "main");
    } }, directives: [_header_landing_header_landing_component__WEBPACK_IMPORTED_MODULE_1__["HeaderLandingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93b2xveC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1sYW5kaW5nL2hvbWUtbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeLandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'wlx-home-landing',
                templateUrl: './home-landing.component.html',
                styleUrls: ['./home-landing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_746075312014910836$$SRC_APP_COMPONENTS_LOGO_LOGO_COMPONENT_TS_1 = goog.getMsg("Wolox logo");
    I18N_0 = MSG_EXTERNAL_746075312014910836$$SRC_APP_COMPONENTS_LOGO_LOGO_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟6e7b9bfcc452453d0ab4885c4df87893094d83a2␟746075312014910836:Wolox logo`;
}
const _c2 = ["title", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_746075312014910836$$SRC_APP_COMPONENTS_LOGO_LOGO_COMPONENT_TS_4 = goog.getMsg("Wolox logo");
    I18N_3 = MSG_EXTERNAL_746075312014910836$$SRC_APP_COMPONENTS_LOGO_LOGO_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟6e7b9bfcc452453d0ab4885c4df87893094d83a2␟746075312014910836:Wolox logo`;
}
class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["wlx-logo"]], decls: 12, vars: 0, consts: [["width", "100%", "height", "100%", "viewBox", "0 0 100% 100%", 6, "title"], ["id", "logo-w", "fill", "#050013", "points", "46.852707 -1.42108547e-14 28.5524802 48.2513989 11.0302684 3.26824197 0.000192816635 3.26824197 28.5987561 74.8764839 46.6367524 27.1562949 63.9420454 74.8369565 94.0146919 3.26824197 82.9913648 3.26824197 64.3835955 48.2513989"], ["id", "logo-o", "fill", "#00A7E8", "d", "M141.505236,36.724242 C141.505236,44.1467183 144.000284,50.2676824 149.001947,55.0639962 C153.970832,59.8477769 159.709055,62.2415955 166.213724,62.2415955 C173.283346,62.2415955 179.240416,59.7957164 184.08397,54.9299887 C188.942949,49.9948469 191.36569,43.9828242 191.36569,36.8929565 C191.36569,29.7230699 188.972836,23.7139395 184.177486,18.8703856 C179.415879,13.9824839 173.509905,11.5394972 166.474991,11.5394972 C159.474783,11.5394972 153.566881,13.9824839 148.734896,18.8703856 C143.915444,23.6888733 141.505236,29.6459433 141.505236,36.724242 M131.25896,36.6124083 C131.25896,27.1412552 134.72966,19.0072854 141.679735,12.2066427 C148.593176,5.406 156.904537,2.00375047 166.61189,2.00375047 C176.200662,2.00375047 184.423327,5.43106616 191.27603,12.291482 C198.16344,19.1586465 201.606181,27.3890246 201.606181,37.0096106 C201.606181,46.6841853 198.1538,54.887569 191.230718,61.6265104 C184.290284,68.4069074 175.909509,71.7889112 166.086465,71.7889112 C157.397183,71.7889112 149.594858,68.7886843 142.691059,62.7641285 C135.072873,56.115811 131.25896,47.3956786 131.25896,36.6124083"], ["id", "logo-l", "fill", "#050013", "points", "266.649113 3.2686276 266.649113 61.0287788 286.434992 61.0287788 286.434992 70.5712741 256.493461 70.5712741 256.493461 3.2686276"], ["id", "logo-o", "fill", "#9FC739", "d", "M351.691662,36.724242 C351.691662,44.1467183 354.186709,50.2676824 359.183552,55.0639962 C364.14858,59.8477769 369.89548,62.2415955 376.403042,62.2415955 C383.456274,62.2415955 389.420093,59.7957164 394.273287,54.9299887 C399.129374,49.9948469 401.555008,43.9828242 401.555008,36.8929565 C401.555008,29.7230699 399.156369,23.7139395 394.360055,18.8703856 C389.588807,13.9824839 383.696331,11.5394972 376.668164,11.5394972 C369.662172,11.5394972 363.746558,13.9824839 358.92325,18.8703856 C354.10187,23.6888733 351.691662,29.6459433 351.691662,36.724242 M341.44635,36.6124083 C341.44635,27.1412552 344.914157,19.0072854 351.857484,12.2066427 C358.776709,5.406 367.08807,2.00375047 376.79928,2.00375047 C386.387087,2.00375047 394.605896,5.43106616 401.471132,12.291482 C408.349866,19.1586465 411.792607,27.3890246 411.792607,37.0096106 C411.792607,46.6841853 408.335405,54.887569 401.419072,61.6265104 C394.476709,68.4069074 386.09497,71.7889112 376.270962,71.7889112 C367.578788,71.7889112 359.779355,68.7886843 352.862059,62.7641285 C345.245802,56.115811 341.44635,47.3956786 341.44635,36.6124083"], ["id", "logo-x", "fill", "#050013", "points", "477.657034 35.3874442 459.128319 3.26901323 470.673216 3.26901323 483.541798 26.0628318 497.045711 3.26901323 508.682195 3.26901323 489.290626 35.3874442 509.64917 70.5716597 498.263348 70.5716597 483.361514 44.8113573 468.021987 70.5716597 456.50987 70.5716597"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wolox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "polygon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "polygon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "polygon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  background-color: #00A7E8;\n  height: 41px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dvbG94L3NyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy93b2xveC9zcmMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJDRlE7RURHUixZQUFBO0FBREYiLCJmaWxlIjoicHJvamVjdHMvd29sb3gvc3JjL2FwcC9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHN2Z3tcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gIGhlaWdodDogNDFweDtcbn1cbiIsIiRzcGFjZTogMXJlbTtcbiRwcmltYXJ5OiAjMDBBN0U4O1xuJHNlY29uZGFyeTogIzlGQzczOTtcblxuJGJyZWFrcG9pbnQtc206IDc2OHB4O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'wlx-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/landing/landing-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/landing/landing-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home-landing/home-landing.component */ "./src/app/components/home-landing/home-landing.component.ts");





const routes = [
    {
        path: '',
        component: _components_home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_2__["HomeLandingComponent"]
    }
];
class LandingRoutingModule {
}
LandingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingRoutingModule });
LandingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingRoutingModule_Factory(t) { return new (t || LandingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home-landing/home-landing.component */ "./src/app/components/home-landing/home-landing.component.ts");
/* harmony import */ var _components_header_landing_header_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header-landing/header-landing.component */ "./src/app/components/header-landing/header-landing.component.ts");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/logo/logo.component */ "./src/app/components/logo/logo.component.ts");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/landing/landing-routing.module.ts");







class LandingModule {
}
LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingModule });
LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingModule_Factory(t) { return new (t || LandingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_components_home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_2__["HomeLandingComponent"],
        _components_header_landing_header_landing_component__WEBPACK_IMPORTED_MODULE_3__["HeaderLandingComponent"],
        _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_2__["HomeLandingComponent"],
                    _components_header_landing_header_landing_component__WEBPACK_IMPORTED_MODULE_3__["HeaderLandingComponent"],
                    _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=landing-landing-module.js.map