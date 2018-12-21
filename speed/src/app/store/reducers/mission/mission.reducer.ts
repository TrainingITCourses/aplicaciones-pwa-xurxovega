import { Action } from '@ngrx/store';
import { MissionActions, MissionActionTypes } from './mission.actions';


export interface MissionState {
  mission: any[];
}

export const initialState: MissionState = {
  mission: []
};

export function reducer(state = initialState, action: MissionActions): MissionState {
  const result = { ... state };

  switch (action.type) {

    case MissionActionTypes.LoadMissions:
      result.mission = action.payload;
      break;

    case MissionActionTypes.MissionsLoaded:
      result.mission = action.payload;
      break;

    default:
      return {... result};
  }

  return {... result};
}
