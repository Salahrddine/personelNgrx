/*
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CoinState} from './coin.reducer';
import * as fromReducer from './coin.reducer';
import {pageQuery} from './coin.action';

export const selectCoinState = createFeatureSelector<CoinState>("coin");

export const selectAllCoins = createSelector(
  selectCoinState,
  fromReducer.selectAllCoins
);

export const selectCoinsPage = (page : pageQuery)=> createSelector(
  selectAllCoins,
  allCoins => {
    const start = page.pageIndex * page.pageSize;
    const end = start + page.pageSize;
    return allCoins.slice(start,end);
  }
);
*/
