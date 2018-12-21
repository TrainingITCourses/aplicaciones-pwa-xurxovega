import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LaunchActionTypes, LoadLaunch, LaunchLoaded } from './launch.actions';
import { map, tap, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

@Injectable()
export class LaunchEffects {

  @Effect()
  public StatusEffect$ =
    this.actions$
      .ofType(LaunchActionTypes.LoadLaunch)
      .pipe(
          mergeMap( (action: LoadLaunch) =>
            this._api.getAllLaunches$().pipe( map(launch => new LaunchLoaded(launch)))
          )
      );

  constructor(private actions$: Actions, private _api: ApiService) {}

}
