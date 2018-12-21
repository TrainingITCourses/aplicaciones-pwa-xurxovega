import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { MissionActionTypes, LoadMissions, MissionsLoaded } from './mission.actions';
import { map, tap, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';


@Injectable()
export class MissionEffects {

  @Effect()
  public StatusEffect$ =
    this.actions$
      .ofType(MissionActionTypes.LoadMissions)
      .pipe(
          mergeMap( (action: LoadMissions) =>
            this._api.getMissionTypes$().pipe( map(mission => new MissionsLoaded(mission)))
          )
      );

  constructor(private actions$: Actions, private _api: ApiService) {}

}
