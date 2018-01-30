webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_form_search_form_component__ = __webpack_require__("../../../../../src/app/search-form/search-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_result_search_result_component__ = __webpack_require__("../../../../../src/app/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_page_search_page_component__ = __webpack_require__("../../../../../src/app/search-page/search-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__login_form_login_form_component__["a" /* LoginFormComponent */] },
    { path: 'find', redirectTo: 'search' },
    { path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_11__search_page_search_page_component__["a" /* SearchPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__home_page_home_page_component__["a" /* HomePageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__search_form_search_form_component__["a" /* SearchFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__search_result_search_result_component__["a" /* SearchResultComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__search_page_search_page_component__["a" /* SearchPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_form_login_form_component__["a" /* LoginFormComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].firebase, 'angular-auth-firebase'),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['home']\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"isUserLoggedIn\">\r\n        <a class=\"nav-link\" [routerLink]=\"['search']\">Search</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"!isUserLoggedIn\">\r\n        <a class=\"nav-link\" [routerLink]=\"['login']\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"isUserLoggedIn\">\r\n        <a class=\"nav-link\">Hello {{userName}}</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngIf=\"isUserLoggedIn\">\r\n        <a class=\"nav-link\" href=\"\" (click)=\"logOut($event)\">Log out</a>\r\n      </li>\r\n    </ul>\r\n    </div>\r\n  </nav>\r\n  <h1>\r\n    {{title}} powered by:\r\n    <a href=\"https://pixabay.com/\" target=\"_blank\">\r\n      <img src=\"https://pixabay.com/static/img/logo.svg\" alt=\"Pixabay\" width=\"200\">\r\n    </a>\r\n  </h1>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = 'Photo app';
        this.userName = '';
        this.isUserLoggedIn = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.user.subscribe(function (user) {
            _this.userName = user && user.displayName || 'noName';
            _this.isUserLoggedIn = !!user;
        });
    };
    HeaderComponent.prototype.logOut = function (event) {
        event.preventDefault();
        if (window.confirm("Are you sure?")) {
            this.authService.logout();
            this.router.navigate(['login']);
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Simply app to search nice photos. Please login first to perform searching.\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Login form</h3>\r\n<form novalidate [formGroup]=\"myform\" (ngSubmit)=\"signInWithEmail()\">\r\n  <div class=\"form-group\" [ngClass]=\"{\r\n      'has-error': email.invalid && email.dirty, \r\n      'has-success': email.valid && email.dirty \r\n    }\">\r\n    <label>Email</label>\r\n    <input type=\"email\" class=\"form-control\" formControlName=\"email\">\r\n    <p class=\"help-block\" *ngIf=\"email.errors && (email.dirty || email.touched)\">\r\n      <span *ngIf=\"email.errors.required\">Email is required</span>\r\n      <span *ngIf=\"email.errors.pattern\">Pattern \"[^ @]*@[^ @]*\" doesn't match</span>\r\n    </p>\r\n  </div>\r\n  <div class=\"form-group\" [ngClass]=\"{\r\n    'has-error': password.invalid && password.dirty, \r\n    'has-success': password.valid && password.dirty \r\n  }\">\r\n    <label>Password</label>\r\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\">\r\n    <p class=\"help-block\" *ngIf=\"password.errors && (password.dirty || password.touched)\">\r\n      <span *ngIf=\"password.errors.required\">Password is required</span>\r\n      <span *ngIf=\"password.errors.minlength\">\r\n        Password must be 8 characters long, we need another {{password.errors.minlength.requiredLength - password.errors.minlength.actualLength}}\r\n        characters\r\n      </span>\r\n    </p>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"myform.invalid\">Login</button>\r\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"signInWithGoogle()\">\r\n    <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\r\n    Login with Google\r\n  </button>\r\n</form>\r\n<p></p>\r\n<p class=\"bg-danger\" *ngIf=\"error\">{{error}}</p>"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = (function () {
    function LoginFormComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    LoginFormComponent.prototype.createFormControls = function () {
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern("[^ @]*@[^ @]*")
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(8)
        ]);
    };
    LoginFormComponent.prototype.createForm = function () {
        this.myform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: this.email,
            password: this.password
        });
    };
    LoginFormComponent.prototype.signInWithEmail = function () {
        var _this = this;
        if (this.myform.valid) {
            this.authService.signInRegular(this.email.value, this.password.value)
                .then(function (res) {
                _this.myform.reset();
                console.log(res, 'log-in  regular');
                _this.router.navigate(['search', { term: 'nature' }]);
            })
                .catch(function (err) {
                console.log(err);
                if (err.message)
                    _this.error = err.message;
            });
        }
    };
    LoginFormComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signInWithGoogle()
            .then(function (res) {
            console.log(res, 'log-in with google');
            _this.router.navigate(['search', { term: 'cars' }]);
        })
            .catch(function (err) {
            console.log(err);
            if (err.message)
                _this.error = err.message;
        });
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search-form/search-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-form/search-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline pull-left\">\r\n  <div class=\"form-group\">\r\n    <input type=\"search\" class=\"form-control\" placeholder=\"Enter search string\" [formControl]=\"searchField\">\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/search-form/search-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchFormComponent = (function () {
    function SearchFormComponent(photosService, router, route) {
        var _this = this;
        this.photosService = photosService;
        this.router = router;
        this.route = route;
        this.onSearchFinished = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.changeLoadingState = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.route.params.subscribe(function (params) {
            if (params['term']) {
                _this.doSearch(params['term'], params['type'] || 'all');
                _this.searchField.setValue(params['term']);
            }
        });
    }
    SearchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchField = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.searchField.valueChanges
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(function (value) { return _this.onSearch(value); });
    };
    SearchFormComponent.prototype.doSearch = function (term, type) {
        var _this = this;
        if (term) {
            this.router.navigate(['search', { term: term, type: type }]);
            this.changeLoadingState.emit(true);
            this.photosService.search(term, type)
                .subscribe(function (value) {
                _this.onSearchFinished.emit(value);
                _this.changeLoadingState.emit(false);
            });
        }
    };
    SearchFormComponent.prototype.onSearch = function (term) {
        this.router.navigate(['search', { term: term }]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchFormComponent.prototype, "onSearchFinished", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchFormComponent.prototype, "changeLoadingState", void 0);
    SearchFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-form',
            template: __webpack_require__("../../../../../src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search-page/search-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-page/search-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-search-form (onSearchFinished)=\"onSearchFinished($event)\" (changeLoadingState)=\"changeLoadingState($event)\">\r\n</app-search-form>\r\n<div class=\"pull-right\">\r\n  <p>Filters by type:\r\n    <button class=\"btn btn-default\" [ngClass]=\"{'btn-primary': type === 'all'}\" [routerLink]=\"[{ term: term, type: 'all'}]\">all</button>\r\n    <button class=\"btn btn-default\" [ngClass]=\"{'btn-primary': type === 'photo'}\" [routerLink]=\"[{ term: term, type: 'photo' }]\">photos</button>\r\n    <button class=\"btn btn-default\" [ngClass]=\"{'btn-primary': type === 'illustration'}\" [routerLink]=\"[{ term: term, type: 'illustration' }]\">illustrations</button>\r\n    <button class=\"btn btn-default\" [ngClass]=\"{'btn-primary': type === 'vector'}\" [routerLink]=\"[{ term: term, type: 'vector' }]\">vector-graphics</button>\r\n  </p>\r\n</div>\r\n<br>\r\n<h3>Search results:</h3>\r\n<div class=\"text-center\">\r\n  <p class=\"lead\" *ngIf=\"loading\">Loading...</p>\r\n</div>\r\n<p class=\"bg-danger\" *ngIf=\"isNoResult\">No result found!</p>\r\n<app-search-result [results]=\"photos\"></app-search-result>"

/***/ }),

/***/ "../../../../../src/app/search-page/search-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPageComponent = (function () {
    function SearchPageComponent(router, route) {
        this.router = router;
        this.route = route;
        this.loading = false;
        this.photos = [];
    }
    SearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['term']) {
                _this.term = params['term'];
            }
            if (params['type']) {
                _this.type = params['type'];
            }
        });
    };
    SearchPageComponent.prototype.changeLoadingState = function (value) {
        this.loading = value;
    };
    SearchPageComponent.prototype.onSearchFinished = function (results) {
        this.photos = results;
        this.isNoResult = !results.length;
    };
    SearchPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-page',
            template: __webpack_require__("../../../../../src/app/search-page/search-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-page/search-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SearchPageComponent);
    return SearchPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photo {\r\n    margin-right: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\" *ngIf=\"results.length\">\r\n  <li class=\"list-group-item clearfix\" *ngFor=\"let item of results\">\r\n    <a class=\"pull-left\" href=\"{{item.pageURL}}\" target=\"_blank\">\r\n      <img class=\"photo\" src=\"{{item.previewURL}}\" alt=\"{{item.tags}}\" width=\"{{item.previewWidth}}\" height=\"{{item.previewHeight}}\">\r\n    </a>\r\n    <ul *ngFor=\"let tag of item.tags.split(',')\">\r\n      <li><a href=\"\" (click)=\"searchByTag(tag, $event)\">{{tag}}</a></li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n<p *ngIf=\"results.length\" class=\"text-center\">\r\n  <a href=\"https://pixabay.com/en/photos/?q={{term}}&image_type={{type}}\" target=\"_blank\">more photos</a>\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultComponent = (function () {
    function SearchResultComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['term']) {
                _this.term = params['term'];
            }
            if (params['type']) {
                _this.type = params['type'];
            }
        });
    };
    SearchResultComponent.prototype.searchByTag = function (tag, event) {
        event.preventDefault();
        this.router.navigate(['search', { term: tag }]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('results'),
        __metadata("design:type", Array)
    ], SearchResultComponent.prototype, "results", void 0);
    SearchResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-result',
            template: __webpack_require__("../../../../../src/app/search-result/search-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-result/search-result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* unused harmony export SearchItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.API_KEY = '7689962-059ef4a23ea05886a72c3a85d';
        this.apiRoot = "https://pixabay.com/api/?key=" + this.API_KEY;
        this.results = [];
        this.loading = false;
    }
    SearchService.prototype.search = function (term, type) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('q', term);
        params.set('per_page', '10');
        if (type)
            params.set('image_type', type);
        return this.http.get(this.apiRoot, { params: params })
            .map(function (res) {
            return res.json().hits.map(function (item) {
                return new SearchItem(item.pageURL, item.previewURL, item.previewWidth, item.previewHeight, item.tags);
            });
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SearchService);
    return SearchService;
}());

var SearchItem = (function () {
    function SearchItem(pageURL, previewURL, previewWidth, previewHeight, tags) {
        this.pageURL = pageURL;
        this.previewURL = previewURL;
        this.previewWidth = previewWidth;
        this.previewHeight = previewHeight;
        this.tags = tags;
    }
    return SearchItem;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
// src/app/services/auth.service.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(_firebaseAuth, router) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.userDetails = null;
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                console.log(_this.userDetails);
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.signInRegular = function (email, password) {
        var credential = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].EmailAuthProvider.credential(email, password);
        return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this._firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.signInWithGithub = function () {
        return this._firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GithubAuthProvider());
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.userDetails == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this._firebaseAuth.auth.signOut()
            .then(function (res) { return _this.router.navigate(['/']); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDKdqbpDlhcyrIDseapNPmhMbM31QNrc_8",
        authDomain: "photo-finder-app.firebaseapp.com",
        databaseURL: "https://photo-finder-app.firebaseio.com",
        projectId: "photo-finder-app",
        storageBucket: "photo-finder-app.appspot.com",
        messagingSenderId: "904958291405"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map