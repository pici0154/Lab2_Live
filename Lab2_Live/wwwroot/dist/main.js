(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <app-nav-menu></app-nav-menu>\n\n    <div class=\"container\">\n\n        <router-outlet></router-outlet>\n\n    </div>\n\n</body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cost-item-details/cost-item-details.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cost-item-details/cost-item-details.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>cost-item-details works!</p>\n\n<p *ngIf=\"!costItem\"><em>Loading...</em></p>\n\n<a [routerLink]=\"['/fetch-data']\" routerLinkActive=\"active\">Back</a>\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"costItem\">\n    <tbody>\n\n        <tr>\n            <th>Description</th>\n            <td>{{ costItem.description }}</td>\n        </tr>\n        <tr>\n            <th>Location</th>\n            <td>{{ costItem.location }}</td>\n        </tr>\n        <tr>\n            <th>Date</th>\n            <td>{{ costItem.date }}</td>\n        </tr>\n        <tr>\n            <th>Type</th>\n            <td>{{ costItem.type }}</td>\n        </tr>\n    </tbody>\n</table>\n\n<h2>Comments</h2>\n<table *ngIf=\"costItem\">\n    <thead>\n        <tr>\n            <th>Text</th>\n            <th>Important</th>\n        </tr>\n    </thead>\n    <tr *ngFor=\"let comment of costItem.comments\">\n        <td>{{ comment.text }}</td>\n        <td>{{ comment.important }}</td>\n    </tr>\n</table>\n<a [routerLink]=\"['/fetch-data']\" routerLinkActive=\"active\">Back</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\n\n<p>This is a simple example of an Angular component.</p>\n\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\n\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\n\n\n\n<input type=\"text\" [(ngModel)]=\"name\" />\n\n<p>{{name}}</p>\n\n<input type=\"text\" [(ngModel)]=\"name\" />\n<input type=\"text\" [(ngModel)]=\"name\" />\n<input type=\"text\" [(ngModel)]=\"name\" />\n<input type=\"text\" [(ngModel)]=\"name\" />\n<input type=\"text\" [(ngModel)]=\"name\" />\n<input type=\"text\" [(ngModel)]=\"name\" />\n<input type=\"text\" [(ngModel)]=\"name\" />\n\n\n<input type=\"text\" value=\"{{name}}\" />\n\n\n\n<p>{{name}}</p>\n<p>{{name}}</p>\n<p>{{name}}</p>\n<p>{{name}}</p>\n<p>{{name}}</p>\n<p>{{name}}</p>\n<p>{{name}}</p>\n<p>{{name}}</p>\n<p>{{name}}</p>\n\n\n<input type=\"text\" value=\"{{name}}\" />\n\n\n\n<p> {{name}}</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Cost Items</h1>\n\n<p>This component demonstrates fetching data from the cost item server.</p>\n\n<p *ngIf=\"!costItems\"><em>Loading...</em></p>\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"costItems\">\n    <thead>\n        <tr>\n            <th>Description</th>\n            <th>Sum</th>\n            <th>Location</th>\n            <th>Date</th>\n            <th>Currency</th>\n            <th>Type</th>\n            <th>Number of comments </th>\n            <th>Operatii</th>\n\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let costItem of costItems\">\n            <td>{{ costItem.description }}</td>\n            <td>{{ costItem.sum }}</td>\n            <td>{{ costItem.location }}</td>\n            <td>{{ costItem.date }}</td>\n            <td>{{ costItem.currency }}</td>\n            <td>{{ costItem.type }}</td>\n            <td>{{ costItem.numberOfComments }}</td>\n            <td>\n                <a class=\"btn btn-primary\" [routerLink]=\"['/fetch-data', costItem.id]\" routerLinkActive=\"active\">Details</a> |\n                <a class=\"btn btn-info\">Edit</a> |\n                <a class=\"btn btn-danger\" (click)=\"delete(costItem.id)\">Delete</a>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<p>Add a new cost </p>\n<p>Description:</p>\n<input [(ngModel)]=\"description\" id=\"description\" />\n<p id=\"ErrorDescription\">{{description}}</p>\n\n<p>Sum:</p>\n<input [(ngModel)]=\"sum\" id=\"sum\" /> \n<p>{{sum}}</p>\n\n<p>Location:</p>\n<input [(ngModel)]=\"location\" id=\"location\" />\n<p>{{location}}</p>\n\n<p>Currency:</p>\n<input [(ngModel)]=\"currency\" id=\"currency\"/>\n<p id=\"ErrorCurrency\">{{currency}}</p>\n\n<p>Type: </p>\n<input [(ngModel)]=\"type\" id=\"type\" />\n<p id=\"ErrorType\">{{type}}</p>\n\n<button (click)=\"submit()\">Submit!</button>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Hello, world!</h1>\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n  <li><strong>Angular CLI integration</strong>. In development mode, there's no need to run <code>ng serve</code>. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration automatically invokes <code>ng build</code> to produce minified, ahead-of-time compiled JavaScript files.</li>\n</ul>\n<p>The <code>ClientApp</code> subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any <code>ng</code> command (e.g., <code>ng test</code>), or use <code>npm</code> to install extra packages into it.</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\n        <div class=\"container\">\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\">NetCoreAngularApp2</a>\n            <button class=\"navbar-toggler\"\n                    type=\"button\"\n                    data-toggle=\"collapse\"\n                    data-target=\".navbar-collapse\"\n                    aria-label=\"Toggle navigation\"\n                    [attr.aria-expanded]=\"isExpanded\"\n                    (click)=\"toggle()\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\n                 [ngClass]=\"{ show: isExpanded }\">\n                <ul class=\"navbar-nav flex-grow\">\n\n                    <li class=\"nav-item\"\n                        [routerLinkActive]=\"['link-active']\"\n                        [routerLinkActiveOptions]=\"{ exact: true }\">\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\n                    </li>\n\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\">Counter</a>\n                    </li>\n\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\">Fetch data</a>\n                    </li>\n\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/my-route']\">My route</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</header>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _cost_item_details_cost_item_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cost-item-details/cost-item-details.component */ "./src/app/cost-item-details/cost-item-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
            _cost_item_details_cost_item_details_component__WEBPACK_IMPORTED_MODULE_10__["CostItemDetailsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
                {
                    path: 'fetch-data',
                    component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
                },
                {
                    path: 'fetch-data/:costItemId',
                    component: _cost_item_details_cost_item_details_component__WEBPACK_IMPORTED_MODULE_10__["CostItemDetailsComponent"],
                },
                { path: 'my-route', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cost-item-details/cost-item-details.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/cost-item-details/cost-item-details.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvc3QtaXRlbS1kZXRhaWxzL2Nvc3QtaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/cost-item-details/cost-item-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/cost-item-details/cost-item-details.component.ts ***!
  \******************************************************************/
/*! exports provided: CostItemDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostItemDetailsComponent", function() { return CostItemDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let CostItemDetailsComponent = class CostItemDetailsComponent {
    constructor(http, baseUrl, route) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.route = route;
    }
    loadCostItem(costItemId) {
        this.http.get(this.baseUrl + 'api/costItems/' + costItemId).subscribe(result => {
            this.costItem = result;
            console.log(this.costItem);
        }, error => console.error(error));
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.loadCostItem(params.get('costItemId'));
        });
    }
};
CostItemDetailsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CostItemDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-cost-item-details',
        template: __importDefault(__webpack_require__(/*! raw-loader!./cost-item-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cost-item-details/cost-item-details.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./cost-item-details.component.css */ "./src/app/cost-item-details/cost-item-details.component.css")).default]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], CostItemDetailsComponent);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 2;
        this.name = "test";
    }
    incrementCounter() {
        this.currentCount++;
        this.name = '';
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.loadCostItems();
    }
    loadCostItems() {
        this.http.get(this.baseUrl + 'api/costItems').subscribe(result => {
            this.costItems = result;
            console.log(this.costItems);
        }, error => console.error(error));
    }
    delete(costItemId) {
        if (confirm('Are you sure you want to delete the cost item with id ' + costItemId + '?')) {
            this.http.delete(this.baseUrl + 'api/costItems/' + costItemId)
                .subscribe(result => {
                alert('cost Item successfully deleted!');
                this.loadCostItems();
            }, error => alert('Cannot delete cost item - maybe it has comments?'));
        }
    }
    submit() {
        var costItem = {};
        // costItem.id = 10;
        costItem.description = document.getElementById("description").value;
        costItem.sum = Number(document.getElementById("sum").value);
        costItem.location = document.getElementById("location").value;
        costItem.date = new Date;
        costItem.currency = document.getElementById("currency").value;
        costItem.type = CostType.food;
        this.http.post(this.baseUrl + 'api/costItems', costItem).subscribe(result => {
            console.log('success!');
            this.loadCostItems();
        }, error => {
            if (error.status == 400) {
                console.log(error.error.errors);
                if (error.error.errors.Description != "") {
                    document.getElementById("description").value = error.error.errors.Description;
                }
                if (error.error.errors.Sum != "") {
                    document.getElementById("sum").value = error.error.errors.Sum;
                }
                if (error.error.errors.Type != "") {
                    document.getElementById("type").value = error.error.errors.Type;
                }
            }
        });
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);

var CostType;
(function (CostType) {
    CostType[CostType["food"] = 0] = "food";
    CostType[CostType["utilities"] = 1] = "utilities";
    CostType[CostType["transportation"] = 2] = "transportation";
    CostType[CostType["outing"] = 3] = "outing";
    CostType[CostType["groceries"] = 4] = "groceries";
    CostType[CostType["clothes"] = 5] = "clothes";
    CostType[CostType["electronics"] = 6] = "electronics";
    CostType[CostType["other"] = 7] = "other";
})(CostType || (CostType = {}));


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n}\n\nhtml {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\n.box-shadow {\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Roxana\source\repos\Lab2_Live\Lab2_Live\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map