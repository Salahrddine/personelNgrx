import {HttpClient} from '@angular/common/http';
import {Coin} from '../model/Coin';
import {Injectable} from '@angular/core';

@Injectable()
export class CoinService  {
  constructor(private http: HttpClient) {}

  addCoin(coin : Coin){
    return this.http.post<Coin>('http://localhost:8081//meal',coin);
  }

  getCoins(){
    return this.http.get<Coin>('http://localhost:8081//meal');
  }

  deleteCoin(id){
    return this.http.delete('http://localhost:8081//meal/'+id);
  }
  edit
}
