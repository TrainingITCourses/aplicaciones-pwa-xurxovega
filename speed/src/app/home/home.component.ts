import { Component, OnInit } from '@angular/core';
import { ApiService } from '../store/services/api.service';
import { Observable, of, observable, pipe, PartialObserver } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../store/reducers';
import { LoadStatus } from '../store/reducers/status/status.actions';
import { LoadAgencys } from '../store/reducers/agency/agency.actions';
import { LoadMissions } from '../store/reducers/mission/mission.actions';
import { LoadLaunch } from '../store/reducers/launch/launch.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {

  public launches: any[];
  public counterLaunch: number;
  public filterLaunches$: Observable<any>;

  constructor( private _api: ApiService,  private _store: Store<State> ) {  }

  ngOnInit() {
      this._store.dispatch(new LoadLaunch());
      this._store.dispatch(new LoadStatus());
      this._store.dispatch(new LoadAgencys());
      this._store.dispatch(new LoadMissions());
  }

  selectLaunches(valuesFilters) {
      this.filterLaunches$ = this._api.getFilterLaunches(valuesFilters[0], valuesFilters[1]);
  }
}
