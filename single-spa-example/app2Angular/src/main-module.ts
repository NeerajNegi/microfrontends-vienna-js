import {Inject, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App2} from './app2.component';
import {Subroute1} from './subroute1.component';
import {Subroute2} from './subroute2.component';
import {enableProdMode} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { IAppState, ListActions } from './store';
import { Globals } from "./globals.service";

const appRoutes: Routes = [
	{
		path: 'subroute1',
		component: Subroute1
	},
	{
		path: 'subroute2',
		component: Subroute2
	},
];

enableProdMode();

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
        NgReduxModule
	],
	providers: [{provide: APP_BASE_HREF, useValue: '/'}, ListActions, Globals],
	declarations: [
		App2,
		Subroute1,
		Subroute2,
	],
	bootstrap: [App2]
})
export class MainModule {
    constructor(private ngRedux: NgRedux<IAppState>,
                private globals:Globals,
                @Inject('localStoreRef') private localStoreRef: any,
                @Inject('globalEventDispatcherRef') private globalEventDispatcherRef: any) {

        this.ngRedux.provideStore(localStoreRef);
        this.globals.globalEventDistributor = globalEventDispatcherRef;
    }
}
