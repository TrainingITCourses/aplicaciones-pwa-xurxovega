import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { StatusActionTypes, LoadStatus, StatusLoaded } from './status.actions';
import { map, tap, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';



@Injectable()
export class StatusEffects {

  @Effect()
  public StatusEffect$ =
    this.actions$
      .ofType(StatusActionTypes.LoadStatus)
      .pipe(
          mergeMap( (action: LoadStatus) =>
            this._api.getLaunchStatus$().pipe( map(status => new StatusLoaded(status)))
          )
        );

  constructor(private actions$: Actions, private _api: ApiService) {}


}
