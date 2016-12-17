import { Injectable } 		from '@angular/core';
import { Headers, Http, Response } 	from '@angular/http';
import { Observable }		from 'rxjs/Rx';

import { Hero } from './hero';


@Injectable()
export class HeroService {
	private heroesUrl = 'api/heroes';
	private headers = new Headers({'Content-Type': 'application/json'});


	constructor(private http: Http) {}


	getHero(id: number): Promise<Hero>{
		// return this.getHeroes()
		// 		.then(heroes => heroes.find(hero => hero.id === id));

		const url = `${this.heroesUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as Hero)
			.catch(this.handleError);
	}


	getHeroes(): Observable<Hero[]>{
		return this.http
					.get(this.heroesUrl)
					.map((r: Response) => r.json().data as Hero[])
					.catch(this.handleError);

		// return this.http.get(this.heroesUrl)
		// 	.toPromise()
		// 	.then(response => response.json().data as Hero[])
		// 	.catch(this.handleError);
	}



	create(name: string): Observable<Hero> {
	    return this.http
	    			.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
	                .map(res =>  <Hero> res.json().data)
	                .catch(this.handleError)

		// return this.http
		// 	.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
		// 	.toPromise()
		// 	.then(res => res.json().data)
		// 	.catch(this.handleError)
	}


	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);  //for demo
		return Promise.reject(error.message || error);
	}


}

