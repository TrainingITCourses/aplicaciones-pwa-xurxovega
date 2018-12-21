import { Actions, ActionTypes, globalInitialState, Global } from '../store/store.actions';

export function storeReducer(
    state = globalInitialState,
    action: Actions ): Global {

    // console.log('store.reducer', action);

    const result = { ... state };
    switch (action.type) {
        case ActionTypes.LoadStatus:
            result.status = action.payload;
            break;
        case ActionTypes.LoadAgency:
            result.agency = action.payload;
            break;
        case ActionTypes.LoadMission:
            result.mission = action.payload;
            break;
        case ActionTypes.LoadLaunches:
            result.launches = action.payload;
            break;
    }
    return result;
}
