import { Action } from '@ngrx/store';

export enum AgencyActionTypes {
  LoadAgencys = '[Agency] Load Agencys',
  AgencyLoaded = '[Agency] Agency Loaded'
}

export class LoadAgencys implements Action {
  readonly type = AgencyActionTypes.LoadAgencys;
  constructor(public readonly payload?: any[]) {}
}


export class AgencyLoaded implements Action {
  readonly type = AgencyActionTypes.AgencyLoaded;
  constructor(public readonly payload?: any[]) {}
}


export type AgencyActions = LoadAgencys | AgencyLoaded;
