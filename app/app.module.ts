import './rxjs-extensions';
import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule } 		from '@angular/forms';
import { HttpModule } 		from '@angular/http';

import { AppRoutingModule }		from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } 	from './shared/in-memory-data.service';

import { AppComponent }  		from './app.component';
import { DashboardComponent } 	from './components/dashboard/dashboard.component';
import { HeroDetailComponent } 	from './components/hero/hero-detail.component';
import { HeroService } 			from './components/hero/hero.service';



@NgModule({
	imports: [
		BrowserModule, 
		FormsModule, 
		HttpModule,
		InMemoryWebApiModule
			.forRoot(InMemoryDataService),
		AppRoutingModule,
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		HeroDetailComponent
	],
	providers: [ HeroService ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
