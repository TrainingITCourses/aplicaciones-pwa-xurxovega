import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Actions, ActionTypes, Global, GlobalSlideTypes, globalInitialState } from './store.actions';
import { storeReducer } from './store.reducer';

@Injectable({
    providedIn: 'root'
})

export class StoreService {

    private state: Global = { ... globalInitialState }; // Inicializa state vacío por si nos suscribimos antes de tiempo?
    private status$    = new BehaviorSubject<any>(this.state.status);
    private agency$    = new BehaviorSubject<any>(this.state.agency);
    private mission$   = new BehaviorSubject<any>(this.state.mission);
    private launches$  = new BehaviorSubject<any>(this.state.launches);

    constructor() {}

    public select$ (slice: GlobalSlideTypes) {
        switch (slice) {
            case GlobalSlideTypes.status:
                return this.status$.asObservable();
            case GlobalSlideTypes.agency:
                return this.agency$.asObservable();
            case GlobalSlideTypes.mission:
                return this.mission$.asObservable();
                case GlobalSlideTypes.launches:
                return this.launches$.asObservable();
        }
    }

    public getSnapshot(slice: GlobalSlideTypes) {
        switch (slice) {
            case GlobalSlideTypes.status:
                return [ ... this.state.status];
            case GlobalSlideTypes.agency:
                return [ ... this.state.agency];
            case GlobalSlideTypes.mission:
                return [ ... this.state.mission];
            case GlobalSlideTypes.launches:
                return [ ... this.state.launches];
        }
    }

    public dispatch (action: Actions) {
        this.state = storeReducer(this.state, action);

        switch (action.type) {
            case ActionTypes.LoadStatus:
                this.status$.next([...this.state.status]);
                break;
            case ActionTypes.LoadAgency:
                this.agency$.next([...this.state.agency]);
                break;
            case ActionTypes.LoadMission:
                this.mission$.next([...this.state.mission]);
                break;
            case ActionTypes.LoadLaunches:
                this.launches$.next([...this.state.launches]);
                break;
        }
    }

}


