import {Actions, Effect, ofType} from '@ngrx/effects';
import {CoinService} from '../Service/CoinService';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/mergeMap';
import * as fromActions from './coin.action';

import {
  AddCoinAction,
   AddSuccessAction,
  CoinActionTypes, deleteCoinAction, deleteCoinSuccessAction, GetAction,
  GetSuccessAction
} from './coin.action';
import {Inject, Injectable} from '@angular/core';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';

@Injectable()
export class CoinEffects {

  constructor(private action$ : Actions
    , private coinService : CoinService){}

  @Effect()
  addcoin$ : Observable<Action> = this.action$.pipe(
    ofType<AddCoinAction>(CoinActionTypes.ADD_COIN)
    ,switchMap(action=> this.coinService.addCoin(action.payload))
    ,tap(res =>console.log(res))
    ,map(res => new fromActions.AddSuccessAction(res))
    //   .catch(err => of(new AddFailureAction(err))
  );

  @Effect()
  getcoins$ : Observable<Action> = this.action$.pipe(
    ofType<GetAction>(CoinActionTypes.GET_COIN)
    ,switchMap(() => this.coinService.getCoins())
    ,map(res => new fromActions.GetSuccessAction(res))
  );

  @Effect()
  deletecoin$ : Observable<Action> =this.action$.pipe(
    ofType<deleteCoinAction>(CoinActionTypes.REMOVE_COIN),
    switchMap((action)=>this.coinService.deleteCoin(action.payload))
    ,tap(res =>console.log(res))
    ,map(res => new fromActions.deleteCoinSuccessAction(res))
  )
}
