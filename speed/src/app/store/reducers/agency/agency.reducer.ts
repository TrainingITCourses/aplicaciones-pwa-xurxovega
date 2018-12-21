import { Action } from '@ngrx/store';
import { AgencyActions, AgencyActionTypes } from './agency.actions';


export interface AgencyState {
  agency:   any[];
}

export const initialState: AgencyState = {
  agency:  []
};

export function reducer(state = initialState, action: AgencyActions): AgencyState {
  const result = { ... state };

  switch (action.type) {

    case AgencyActionTypes.LoadAgencys:
      result.agency = action.payload;
      break;

    case AgencyActionTypes.AgencyLoaded:
      result.agency = action.payload;
      break;

    default:
      return {... result};
  }

  return {... result};
}
