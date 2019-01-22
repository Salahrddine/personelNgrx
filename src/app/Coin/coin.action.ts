import {Action} from '@ngrx/store';
import {Coin} from '../model/Coin';


export interface pageQuery {
  pageIndex : number;
  pageSize : number;
}

export enum CoinActionTypes{

ADD_COIN='[Coin] Add',
CREATE_SUCCESS='[Coin] Add Success',
CREATE_FAILURE='[Coin] Add Failure',
GET_COIN='[Coin] Get ',
GET_SUCCESS='[Coin] Get Success',
REMOVE_COIN = '[Coin] Remove ',
REMOVE_COIN_SUCCESS = '[Coin] Remove Success ',
EDIT_COIN = '[Coin] Edit',
EDIT_COIN_SUCCESS = '[Coin] Edit Success'
}

export class AddCoinAction implements Action{

  readonly type = CoinActionTypes.ADD_COIN;

  constructor(public payload: Coin){}

}

export class AddSuccessAction implements Action {
  readonly type = CoinActionTypes.CREATE_SUCCESS;

  constructor(public payload: Coin) {}
}

export class AddFailureAction implements Action{
  readonly type = CoinActionTypes.CREATE_FAILURE;

  constructor(public payload : Coin){};
}

export class GetAction implements Action{

  readonly type = CoinActionTypes.GET_COIN;

  constructor( ){};
}

export class GetSuccessAction implements Action{

  readonly type = CoinActionTypes.GET_SUCCESS;

  constructor(public payload : any){};
}

export class deleteCoinAction implements Action {

  readonly type = CoinActionTypes.REMOVE_COIN;

  constructor(public payload){};
}

export class deleteCoinSuccessAction implements Action {

  readonly type = CoinActionTypes.REMOVE_COIN_SUCCESS;

  constructor(public payload : any){};
}

export class editcoin implements Action{

  readonly type = CoinActionTypes.EDIT_COIN;

  constructor(public payload : any){};
}

export class editcoinsuccess implements Action{

  readonly type = CoinActionTypes.EDIT_COIN_SUCCESS;

  constructor(public payload : any){};
}

export type CoinActions = AddCoinAction | GetAction | GetSuccessAction | AddSuccessAction | deleteCoinAction | deleteCoinSuccessAction | editcoin | editcoinsuccess;
