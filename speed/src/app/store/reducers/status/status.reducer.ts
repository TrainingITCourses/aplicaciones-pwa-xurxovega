import { Action } from '@ngrx/store';
import { StatusActions, StatusActionTypes } from './status.actions';


export interface StatusState {
  status: any[];
  message?: string;
}

export const initialState: StatusState = {
  status: [],
  message: ''
};

export function reducer(state = initialState, action: StatusActions): StatusState {
  const result = { ... state };

  switch (action.type) {

    case StatusActionTypes.LoadStatus:
      result.status = action.payload;
      break;

    case StatusActionTypes.StatusLoaded:
      result.status = action.payload;
      break;

    case StatusActionTypes.StatusNotLoaded:
      result.status = action.payload;
      result.message = action.payload.toString();
      break;

    default:
      return {... result};
  }

  return {... result};
}
