import { Injectable } from '@angular/core';
import {CryptoCurrency} from './models';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Crypto {
  private balanceSubject = new BehaviorSubject<number>(1000);
  public balance$ = this.balanceSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getCoins(): Observable<CryptoCurrency[]> {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';

    return this.http.get<any[]>(url).pipe(
      map(apiData => {
        return apiData.map(coin => ({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol,
          price: coin.current_price,
          trend: coin.price_change_percentage_24h > 0 ? 'UP' : 'DOWN'
        }));
      })
    );
  }

  purchase(coin: CryptoCurrency): boolean {
    const currentBalance = this.balanceSubject.getValue();

    if (currentBalance >= coin.price) {
      const newBalance = currentBalance - coin.price;
      this.balanceSubject.next(newBalance);
      return true;
    }
    return false;
  }

  getCoinDetails(id: string): Observable<any> {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    return this.http.get<any>(url);
  }
}
