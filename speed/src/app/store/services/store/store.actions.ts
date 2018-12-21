
export enum GlobalSlideTypes {
  status   = '[Global] LoadStatus',
  agency   = '[Global] LoadAgency',
  mission  = '[Global] LoadMission',
  launches = '[Global] LoadLaunches'
}

export interface Global {
    status:   any[];
    agency:   any[];
    mission:  any[];
    launches: any[];
  }

  export const globalInitialState: Global = {
    status:  [],
    agency:  [],
    mission: [],
    launches: []
  };

export enum ActionTypes {
    LoadStatus,
    LoadAgency,
    LoadMission,
    LoadLaunches
  }

export interface Action {
    readonly type: ActionTypes;
    readonly payload?: any;
}

export class LoadStatus implements Action {
    public readonly type = ActionTypes.LoadStatus;
    constructor(public readonly payload?: any[]) {}
}

export class LoadAgency implements Action {
  public readonly type = ActionTypes.LoadAgency;
  constructor(public readonly payload?: any[]) {}
}

export class LoadMission implements Action {
  public readonly type = ActionTypes.LoadMission;
  constructor(public readonly payload?: any[]) {}
}

export class LoadLaunches implements Action {
  public readonly type = ActionTypes.LoadLaunches;
  constructor(public readonly payload?: any[]) {}
}



export type Actions =  LoadStatus | LoadAgency | LoadMission | LoadLaunches;


