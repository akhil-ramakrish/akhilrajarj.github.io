(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/internship/internship.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/internship/internship.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n    <head><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"></head>\n    <body>\n        <img src=\"./assets/images/internship.jpg\" style =\"width:100%;height:400px;\">\n        <hr>\n        <p style=\"color:black;\">Experience is becoming a crucial factor for employers when deciding who gets their foot in the door. It’s strongly advised that students and graduates take the opportunity to complete a period of work experience to ensure they have a competitive advantage over their peers; and that’s where an internship can make all the difference.</p>\n        <hr>\n        <div class=\"card\" style=\"width:25%;float:right;\">\n                <div class=\"card-header\" style=\"background-color: crimson;color:White;\" >\n                  <h3>Featured</h3>\n                </div>\n                <div class=\"card-body\">\n                  <a href=\"https://internshala.com\"><b>INTERNSHALA</b></a><br>\n                  <a href=\"https://www.internships.com\"><b>INTERNSHIPS.COM</b></a><br>\n                  <a href=\"https://career.berkeley.edu/Internships/Internships\"><b>BERKELY CAREER CENTER</b></a><br>\n                  <a href=\"https://www.linkedin.com/jobs/search/?keywords=internship&redirect=false&position=1&pageNum=0\"><b>LINKEDIN INTERNSHIPS</b></a><br>\n                  <a href=\"http://www.letsintern.com\"><b>LETSINTERN</b></a><br>\n                  <a href=\"https://www.hellointern.com\"><b>HELLO INTERN</b></a><br>\n                  <a href=\"https://www.qualityinfo.org/-/benefits-of-an-internship\"><b>BENEFIFTS OF INTERNSHIP</b></a><br>\n                  <a href=\"https://www.fastweb.com/career-planning/articles/college-internships-2019-edition\"><b>COLLEGE INTERNSHIPS:2019 EDITION</b></a><br>\n                  <a href=\"https://www.internshipfinder.com/members/resource-list/\"><b>BEST COMPANIES FOR INTERNSHIP</b></a><br>\n                  <a href=\"https://hbr.org/2016/07/6-ways-to-make-the-most-of-your-internship\"><b>TIPS FOR SUCCESS</b></a><br>\n                  <a href=\"https://www.wsj.com/articles/debating-the-unpaid-internship-11559084860\"><b>UNPAID INTERNSHIPS</b></a><br>\n                  <a href=\"https://www.hercampus.com/money-career/7-things-you-re-not-doing-get-your-dream-internship\"><b>THINGS YOU DON'T DO</b></a>\n                </div>\n         </div>\n         <div>\n             <h4><b>Tips to Follow:</b></h4>\n             <ul> \n                <li><p>Find your area of Interest</p></li> \n                <li><p>Make a List of Employers.</p></li>\n                <li> <p> Have a Standout Resume.</p></li>\n                <li><p> Build Connections.</p></li>\n                <li><p> Nail the Interview.</p></li>\n                \n                </ul>\n            \n         </div>\n         <youtube-player\n            [videoId]=\"id\"\n            width=50%\n            (ready)=\"savePlayer($event)\"\n            (change)=\"onStateChange($event)\"\n          ></youtube-player>\n\n    </body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n    <head>\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n    </head>\n    <body>\n        <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n            <a class=\"navbar-brand\" href=\"#\">STUDENT</a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n              <ul class=\"navbar-nav\">\n                <li class=\"nav-item active\">\n                  <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\"/internship\">Internships</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\"/scholarship\">Scholarships</a>\n                </li>\n              </ul>\n            </div>\n          </nav>\n          <div>\n             <img src=\"./assets/images/Menu.jpg\" style=\"width:100%;height:400px;\">\n          </div>\n          <div class=\"card text-center\" style=\"position: fixed;bottom:0px;background-color: black;width:100%;border-radius: 0px;\">\n            <div class=\"card-header\" style=\"color:White;\">\n              <b>About</b>\n            </div>\n             <div class=\"card-body\" style=\"color:White;\" >\n              <h5 class=\"card-title\">Learn about things that matters most for a Student</h5>\n              <p class=\"card-text\">A perfect Guide for students</p>\n              \n             </div>\n           \n          </div>\n    </body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/scholarship/scholarship.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/scholarship/scholarship.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n    <head>\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n    </head>\n    <body>\n      <img src=\"./assets/images/scholarship.jpg\" style=\"margin:0px;width:100%;height:300px;position:relative;top:0px;left:0px;\">\n       <div class=\"container-fluid card\" style=\"background-color:white;\">\n        <div class=\"card-body\">\n            \n            <p  class=\"card-title\" style=\"font-size: large;color:red;\"><b>Tips To Follow</b></p>\n            <p>Most incoming college students are understandably concerned about going into debt to pay for their education. The good news is you can reduce how much it costs you to earn your college degree. Follow these simple tips to earn lots of scholarship money, and you’ll be well on your way to lowering your college costs.</p>\n            <hr>\n            <p><b>1. Start early.</b>There’s no need to wait until junior year to start applying for scholarships. Starting early gives you more time to research and complete scholarship applications. Plus, starting early shows those who are awarding scholarships that you’re a motivated student!</p>\n            <p><b>2. Use a scholarship matching tool.</b> Sites like Scholly, Cappex, Unigo, and Fastweb search through vast databases of the latest scholarships and deliver you a list of scholarships that are best suited for you. Before you apply, carefully read the scholarship rules. Focus in on the scholarships you’re a good match for, and rule out the ones where you don’t meet all of the requirements. Not to worry—there will be plenty to pick from where you’re a good fit!</p>\n            <p><b>3. Apply for scholarships, big and small.</b> Don’t overlook scholarships with smaller awards. The more you apply to, the better your odds of winning. And they can quickly add up to help cover college expenses.</p>\n            <youtube-player\n            [videoId]=\"id\"\n            width = 800px\n            height=400px\n            (ready)=\"savePlayer($event)\"\n            (change)=\"onStateChange($event)\"\n          ></youtube-player>\n            <p><b>4. Don’t be afraid of scholarships that require essays.</b> Many students shy away from scholarships that require essays, but a well-written essay can be your ticket to standing out from the crowd. If you don’t have great writing skills, consider working with your high school guidance counselor or attending a writing workshop to help you develop a memorable essay.</p>\n            <p><b>5. Look beyond your grades.</b> You don’t have to have a 4.0 to qualify for scholarships. In fact, some scholarships don’t take grades into account. Regardless of whether you have top grades or not, it’s important to find a way to stand out from the crowd on your scholarship applications. Before you start filling out the application, think about why you should be that scholarship winner.</p>\n            <p><b>6. Network</b>. Ask your parents to check with their HR department about scholarships for family members. Also, get the word out to your parent’s friends, your employer, and others in your community that you’re looking for scholarships to help pay for college. Your odds of winning are likely to be higher if there’s already a personal connection. There are usually a lot of scholarships offered locally that are not particularly well advertised. You can often find these through your high school counselor, in the local paper, or at the library.</p>\n            <p><b>7. Keep applying.</b> Keep looking for new scholarships each year that you’re in school. There are scholarships available for high school students, undergrads, and graduate students. Some scholarships allow you to enter multiple times. For example, you can enter to win CollegeWeekLive’s $1,000 scholarship once a month.</p>\n            <p><b>8. Ask for help.</b> Your high school counselor is a great sounding board when it comes to scholarships. They can help you choose which scholarships are the best to apply for, and they often will take the time to review your submissions and provide guidance on improving them. You can also learn a lot by checking out who won the scholarships in previous years.</p>\n            <p><b>9. Practice your interview skills.</b> Many scholarships require an in-person interview. Being a good interviewee takes time, so practice answering questions about your background, interests, achievements, and aspirations. Remember, an interview also requires a certain degree of social skills, so the more comfortable you are chatting with the interviewer and answering questions, the better the interview will go. Don’t be nervous though. There’s no right or wrong answer. Your interviewer wants to get a real feel for who you are, so ultimately, the most important thing to remember is to be yourself!</p>\n\n        </div>\n           \n          \n     </div>   \n       \n    </body>\n</html>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _scholarship_scholarship_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scholarship/scholarship.component */ "./src/app/scholarship/scholarship.component.ts");
/* harmony import */ var _internship_internship_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internship/internship.component */ "./src/app/internship/internship.component.ts");






var routes = [{ path: 'Menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"] },
    { path: '', redirectTo: '/Menu', pathMatch: 'full' },
    { path: 'scholarship', component: _scholarship_scholarship_component__WEBPACK_IMPORTED_MODULE_4__["ScholarshipComponent"] },
    { path: 'internship', component: _internship_internship_component__WEBPACK_IMPORTED_MODULE_5__["InternshipComponent"] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _scholarship_scholarship_component__WEBPACK_IMPORTED_MODULE_4__["ScholarshipComponent"], _internship_internship_component__WEBPACK_IMPORTED_MODULE_5__["InternshipComponent"]];


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Website';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _progress_kendo_angular_scrollview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-scrollview */ "./node_modules/@progress/kendo-angular-scrollview/dist/fesm5/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _scholarship_scholarship_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scholarship/scholarship.component */ "./src/app/scholarship/scholarship.component.ts");
/* harmony import */ var _internship_internship_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./internship/internship.component */ "./src/app/internship/internship.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routingComponents"],
                _scholarship_scholarship_component__WEBPACK_IMPORTED_MODULE_8__["ScholarshipComponent"],
                _internship_internship_component__WEBPACK_IMPORTED_MODULE_9__["InternshipComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _progress_kendo_angular_scrollview__WEBPACK_IMPORTED_MODULE_6__["ScrollViewModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_3__["NgxYoutubePlayerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/internship/internship.component.scss":
/*!******************************************************!*\
  !*** ./src/app/internship/internship.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-family: Ember, Helvetica, sans-serif;\n  text-align: justify;\n  color: #f02244;\n}\n\nli {\n  color: #f02244;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJuc2hpcC9FOlxcQW5ndWxhckRlbW9cXFdlYnNpdGUvc3JjXFxhcHBcXGludGVybnNoaXBcXGludGVybnNoaXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ludGVybnNoaXAvaW50ZXJuc2hpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9pbnRlcm5zaGlwL2ludGVybnNoaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuXHJcbiAgICBmb250LWZhbWlseTpFbWJlciwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBjb2xvcjpyZ2IoMjQwLCAzNCwgNjgpO1xyXG59XHJcblxyXG5saXtcclxuICAgIGNvbG9yOnJnYigyNDAsIDM0LCA2OCk7XHJcbn0iLCJwIHtcbiAgZm9udC1mYW1pbHk6IEVtYmVyLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiAjZjAyMjQ0O1xufVxuXG5saSB7XG4gIGNvbG9yOiAjZjAyMjQ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/internship/internship.component.ts":
/*!****************************************************!*\
  !*** ./src/app/internship/internship.component.ts ***!
  \****************************************************/
/*! exports provided: InternshipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternshipComponent", function() { return InternshipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InternshipComponent = /** @class */ (function () {
    function InternshipComponent() {
        this.id = 'pXK6cUxyoFw';
    }
    InternshipComponent.prototype.ngOnInit = function () {
    };
    InternshipComponent.prototype.savePlayer = function (player) {
        this.player = player;
        console.log('player instance', player);
    };
    InternshipComponent.prototype.onStateChange = function (event) {
        console.log('player state', event.data);
    };
    InternshipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-internship',
            template: __webpack_require__(/*! raw-loader!./internship.component.html */ "./node_modules/raw-loader/index.js!./src/app/internship/internship.component.html"),
            styles: [__webpack_require__(/*! ./internship.component.scss */ "./src/app/internship/internship.component.scss")]
        })
    ], InternshipComponent);
    return InternshipComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/scholarship/scholarship.component.scss":
/*!********************************************************!*\
  !*** ./src/app/scholarship/scholarship.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: black;\n  font-family: Ember, Helvetica, sans-serif;\n  text-align: justify;\n}\n\nb {\n  color: rgba(228, 74, 74, 0.726);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nob2xhcnNoaXAvRTpcXEFuZ3VsYXJEZW1vXFxXZWJzaXRlL3NyY1xcYXBwXFxzY2hvbGFyc2hpcFxcc2Nob2xhcnNoaXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NjaG9sYXJzaGlwL3NjaG9sYXJzaGlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zY2hvbGFyc2hpcC9zY2hvbGFyc2hpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OkVtYmVyLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IFxyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuYntcclxuICAgIGNvbG9yOnJnYmEoMjI4LCA3NCwgNzQsIDAuNzI2KVxyXG59IiwicCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IEVtYmVyLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbmIge1xuICBjb2xvcjogcmdiYSgyMjgsIDc0LCA3NCwgMC43MjYpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/scholarship/scholarship.component.ts":
/*!******************************************************!*\
  !*** ./src/app/scholarship/scholarship.component.ts ***!
  \******************************************************/
/*! exports provided: ScholarshipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScholarshipComponent", function() { return ScholarshipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScholarshipComponent = /** @class */ (function () {
    function ScholarshipComponent() {
        this.id = 'XhyFGSCCMiQ';
    }
    ScholarshipComponent.prototype.ngOnInit = function () {
    };
    ScholarshipComponent.prototype.savePlayer = function (player) {
        this.player = player;
        console.log('player instance', player);
    };
    ScholarshipComponent.prototype.onStateChange = function (event) {
        console.log('player state', event.data);
    };
    ScholarshipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scholarship',
            template: __webpack_require__(/*! raw-loader!./scholarship.component.html */ "./node_modules/raw-loader/index.js!./src/app/scholarship/scholarship.component.html"),
            styles: [__webpack_require__(/*! ./scholarship.component.scss */ "./src/app/scholarship/scholarship.component.scss")]
        })
    ], ScholarshipComponent);
    return ScholarshipComponent;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\AngularDemo\Website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map