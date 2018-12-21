import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, observable, pipe, PartialObserver } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StoreService } from './store/store.state';
// import { LoadStatus, LoadAgency, LoadMission, LoadLaunches } from '../services/store/store.actions';
import { GlobalSlideTypes } from '../services/store/store.actions';
import { Launch } from '../models/launch';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class ApiService {
    public agencies:     any[];
    public launches:     any[];
    public status:       any[];
    public missionTypes: any[];
    private _url:        string;
    public missions: any[];

    public filterTypes = [
        { 'id': 0, 'name': 'State', 'value': 0 },
        { 'id': 1, 'name': 'Agency', 'value': 1},
        { 'id': 2, 'name': 'Mission  Type', 'value': 2 } ];

    constructor(private _http:     HttpClient,
                private _storeOld: StoreService,
                private _store:    Store<State>) {
        this._url = environment.url;
    }

    public getFilterTypes (): any[] {
        return this.filterTypes;
    }

    getLaunchStatus$ () {
        return this._http.get(this._url + '/assets/data/launchstatus.json')
            .pipe(map(res => res['types']));
    }

    getAgencies$ () {
        return this._http.get(this._url + '/assets/data/agencies.json')
            .pipe(map(res => res['agencies']));
    }

    getMissionTypes$ ()  {
        return this._http.get(this._url + '/assets/data/missiontypes.json')
            .pipe(map(res => res['types']));
    }

    getAllLaunches$() {
        return this._http.get('https://launchlibrary.net/1.4/launch/1950-01-01?limit=2000')
            // (this._url + '/assets/data/launches.json')
            .pipe(map(res => res['launches']));
    }


    public getFilterLaunches( filterType: any, valueFilter: any): Observable<any> {

        const i = parseInt(filterType, 10);

        switch (i) {
            case 0: { // Status Filter
                return this._store
                    .select('launch')
                    .pipe(
                        map( (res: any): Launch[] =>
                            res.launch.filter(launch => launch.status === valueFilter )
                        )
                    );
            }

            case 1: { // Agency Filter

                // launches.locations.pads.agencies
                // launches.rocket.agencies
                // launches.missions.agencies
                // launches.lsp.id ¿?

                return  this._store
                    .select('launch')
                    .pipe(
                        map( (res: any): Launch[] =>
                            res.launch.filter( (launch: Launch) =>
                                launch.rocket.agencies &&
                                launch.rocket.agencies.some( agency => agency.id === valueFilter)
                            )
                        ),

                    );
            }

            case 2: { // Mission Filter
                return this._store
                    .select('launch')
                    .pipe(
                        map( (res: any): Launch[] =>
                            res.launch.filter( (launch: Launch) =>
                                launch.missions.find(mission => mission.type === valueFilter)
                            )
                        ),
                    );
            }

        }
    }

}
