import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: [ 'dashboard.component.css'],
})

export class DashboardComponent implements OnInit{
	heroes: Hero[] = [];
	errorMessage: string;

	constructor(private heroService: HeroService) {}

	ngOnInit(): void {
		//this lambda expression can be changed to specific
		this.heroService
			.getHeroes()
			.subscribe(
				heroes => this.heroes = heroes.slice(0, 4),
				error => this.errorMessage = <any>error
			);

			// .then(heroes => this.heroes = 
			// 		heroes.slice(0, 4));
	}
}