import { Action } from '@ngrx/store';
import { LaunchActions, LaunchActionTypes } from './launch.actions';

export interface LaunchState {
  launch: any[];
}

export const initialState: LaunchState = {
  launch: []
};

export function reducer(state = initialState, action: LaunchActions): LaunchState {
  const result = { ... state };

  switch (action.type) {

    case LaunchActionTypes.LoadLaunch:
      result.launch = action.payload;
      break;

    case LaunchActionTypes.LaunchLoaded:
      result.launch = action.payload;
      break;

    default:
      return {... result};
  }

  return {... result};
}
