import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Coin} from '../model/Coin';
import * as fromActions from './coin.action';
import {CoinActionTypes} from './coin.action';

export interface CoinState extends EntityState<Coin>{}

export const adapter : EntityAdapter<Coin> = createEntityAdapter<Coin>({
  sortComparer: false
});

export const initialCoinState : CoinState = adapter.getInitialState({

});


//export  const initialCoinState=[];

export function coinsReducer(state = initialCoinState , action : fromActions.CoinActions ) {
  switch (action.type) {
    case CoinActionTypes.CREATE_SUCCESS : ///changed from get
     // return  action.payload;
    return adapter.addOne(action.payload, state);
    case CoinActionTypes.GET_SUCCESS :
      return action.payload;
    case CoinActionTypes.REMOVE_COIN_SUCCESS :
      return adapter.removeOne(action.payload, state);

     // return action.payload;

/*     case  CoinActionTypes.REMOVE_COIN :
      return adapter.removeOne() */
    //adapter.addAll(action.payload, state);
    default:
      return state;
  }
}

export const {
  selectIds: selectCoinIds,
  selectEntities: selectCoinEntities,
  selectAll: selectAllCoins,
  selectTotal: CoinsCount
} = adapter.getSelectors();
