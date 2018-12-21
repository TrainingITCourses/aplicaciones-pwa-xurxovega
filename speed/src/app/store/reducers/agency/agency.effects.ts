import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, tap, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { AgencyActionTypes, LoadAgencys, AgencyLoaded } from './agency.actions';

@Injectable()
export class AgencyEffects {

  @Effect()
  public StatusEffect$ =
    this.actions$
    .ofType(AgencyActionTypes.LoadAgencys)
    .pipe(
        mergeMap( (action: LoadAgencys) =>
          this._api.getAgencies$().pipe( map(agency => new AgencyLoaded(agency)))
        )
      );

      constructor(private actions$: Actions, private _api: ApiService) {}
}
