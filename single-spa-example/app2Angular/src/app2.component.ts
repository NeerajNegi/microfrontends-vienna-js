import {Component, forwardRef, Inject, NgZone} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState, ListActions} from './store';
import {Globals} from './globals.service';

@Component({
    selector: 'app2',
    template: `
        <div class="card">
            <div class="header">
                <h2>List of items</h2>
                <img class="header-logo" src="https://angular.io/assets/images/logos/angular/angular.svg">
            </div>
            <div class="container">
                <p>
                    This was rendered by App2 which is written in Angular 6
                </p>

                Items in list TODO: <strong>{{list.length}}</strong> & FINISHED: <strong>{{list.length}}</strong>
                <ng-container *ngFor="let item of list; let i = index">
                    <div *ngIf="!item.completed">
                    <span style="width: 100px">
                    {{item.value}}
                    </span>
                        <span>
                        <button (click)="removeOne(i)">Finished!</button>
                    </span>
                    </div>
                </ng-container>
                <br>
                <br>
                <button (click)="removeAll()">Finish all</button>
                <br/>

                <a [routerLink]="['/subroute1']" routerLinkActive="active">Angular route 1</a>&nbsp;
                <a [routerLink]="['/subroute2']" routerLinkActive="active">Angular route 2</a>

                <router-outlet></router-outlet>
            </div>
        </div>
    `,
})
export class App2 {
    list: any[];
    subscription;

    constructor(
        @Inject(forwardRef(() => NgRedux)) private ngRedux: NgRedux<IAppState>,
        @Inject(forwardRef(() => ListActions)) private actions: ListActions,
        @Inject(forwardRef(() => Globals)) private globals: Globals,
        private zone: NgZone) {
        this.subscription = ngRedux.select<any[]>('elementList')
            .subscribe(value => this.zone.run(() => this.updateList(value)));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    removeOne(elementId) {
        this.globals.globalEventDistributor.dispatch(this.actions.removeItem(elementId));
    }

    removeAll() {
        this.globals.globalEventDistributor.dispatch(this.actions.removeAll());
    }

    private updateList(value: any[]) {
        console.log(value);
        this.list = value;
    }
}
