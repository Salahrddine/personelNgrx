/*import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';*/
import { environment } from '../../environments/environment';
/*
import {storeFreeze} from 'ngrx-store-freeze';
import {routerReducer} from '@ngrx/router-store';
*/
import {Coin} from '../model/Coin';
import {ActionReducerMap} from '@ngrx/store';
import {CoinState} from '../Coin/coin.reducer';
import {EntityState} from '@ngrx/entity';


export interface AppState extends EntityState<Coin  > {
coin : any;
}
/*

export const reducers: ActionReducerMap<AppState> = {
  coin : CoinState
};
*/


/*



export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];
*/
