"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, router, route) {
        this.heroService = heroService;
        this.router = router;
        this.route = route;
        this.heroesLoading = true;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        this.getHero(); //selected hero detail
        this.getHeroes(); //list of heroes in left nav
    };
    HeroDetailComponent.prototype.getHero = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.heroService
            .getHero(+params['id']); })
            .subscribe(function (hero) {
            _this.hero = hero;
            _this.onSelect(_this.hero);
        });
    };
    ;
    //TODO: this should probably be a separate component so that it only loads once
    HeroDetailComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService
            .getHeroes()
            .debounceTime(300)
            .subscribe(function (heroes) {
            _this.heroes = heroes;
        }, function (error) { return _this.errorMessage = error; }, function () { return _this.heroesLoading = false; });
    };
    ;
    //event listener for each hero in the displayed list
    HeroDetailComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        this.router.navigate(['detail', this.selectedHero.id]);
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-hero-detail',
            templateUrl: 'hero-detail.component.html',
            styleUrls: ['hero-detail.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router, router_1.ActivatedRoute])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map