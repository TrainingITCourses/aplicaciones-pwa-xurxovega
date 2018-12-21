import { Action } from '@ngrx/store';

export enum StatusActionTypes {
  LoadStatus = '[Status] Load Status',
  StatusLoaded = '[Status] Status Loaded',
  StatusNotLoaded = '[Status] Status NOT Loaded'
}

export class LoadStatus implements Action {
  readonly type = StatusActionTypes.LoadStatus;
  constructor(public readonly payload?: any[]) {}
}

export class StatusLoaded implements Action {
  readonly type = StatusActionTypes.StatusLoaded;
  constructor(public readonly payload?: any[]) {}
}

export class StatusNotLoaded implements Action {
  readonly type = StatusActionTypes.StatusNotLoaded;
  constructor(public readonly payload?: any[]) {}
}

export type StatusActions = LoadStatus | StatusLoaded | StatusNotLoaded;
