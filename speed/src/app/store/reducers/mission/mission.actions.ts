import { Action } from '@ngrx/store';

export enum MissionActionTypes {
  LoadMissions = '[Mission] Load Missions',
  MissionsLoaded = '[Mission] Missions Loaded'
}

export class LoadMissions implements Action {
  readonly type = MissionActionTypes.LoadMissions;
  constructor(public readonly payload?: any[]) {}
}
export class MissionsLoaded implements Action {
  readonly type = MissionActionTypes.MissionsLoaded;
  constructor(public readonly payload?: any[]) {}
}

export type MissionActions = LoadMissions | MissionsLoaded;
