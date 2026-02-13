import { Injectable } from '@angular/core';
import {CryptoCurrency} from './models';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Crypto {
  private balanceSubject = new BehaviorSubject<number>(1000);
  public balance$ = this.balanceSubject.asObservable();

  private myCoins: CryptoCurrency[] = [
    { name: 'Bitcoin', symbol: 'BTC', price: 45000, trend: 'UP' },
    { name: 'Ethereum', symbol: 'ETH', price: 3200, trend: 'DOWN' },
    { name: 'Polkadot', symbol: 'DOT', price: 7, trend: 'UP' }
  ];

  getCoins(): CryptoCurrency[] {
    return this.myCoins;
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
}
