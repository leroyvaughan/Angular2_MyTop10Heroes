import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit }  from '@angular/core';
import { Router, ActivatedRoute, Params }    from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: [ 'hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit{
  errorMessage: string;
  hero: Hero;
  heroes: Hero[];
  selectedHero: Hero;
  heroesLoading: boolean = true;

  constructor(
    private heroService: HeroService, 
    private router: Router,
    private route: ActivatedRoute
  ){
  }

  ngOnInit(): void{
      this.getHero();    //selected hero detail
      this.getHeroes();  //list of heroes in left nav
  }


  getHero(): void{
    this.route.params
        .switchMap((params: Params) => this.heroService
        .getHero(+params['id']))
        .subscribe(hero => {
          this.hero = hero;
          this.onSelect(this.hero);
        });
  };

  //TODO: this should probably be a separate component so that it only loads once
  getHeroes(): void{
    this.heroService
        .getHeroes()
        .debounceTime(300)
        .subscribe(
          heroes => {
            this.heroes = heroes;
          },
          error => this.errorMessage = <any>error,
          () => this.heroesLoading = false
        );
  };


  //event listener for each hero in the displayed list
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.router.navigate(['detail', this.selectedHero.id]);
  }

}
