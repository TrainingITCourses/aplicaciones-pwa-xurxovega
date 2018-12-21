import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import * as fromStatus from './status/status.reducer';
import * as fromAgency from './agency/agency.reducer';
import * as fromMission from './mission/mission.reducer';
import * as fromLaunch from './launch/launch.reducer';

export interface State {
  router: any;
  status: fromStatus.StatusState;
  agency: fromAgency.AgencyState;
  mission: fromMission.MissionState;
  launch: fromLaunch.LaunchState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  status: fromStatus.reducer,
  agency: fromAgency.reducer,
  mission: fromMission.reducer,
  launch: fromLaunch.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
