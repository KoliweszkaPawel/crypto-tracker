import { Injectable } from '@angular/core';
import {CryptoCurrency} from './models';

@Injectable({
  providedIn: 'root',
})
export class Crypto {
  private walletBalance = 1000;

  private myCoins: CryptoCurrency[] = [
    { name: 'Bitcoin', symbol: 'BTC', price: 45000, trend: 'UP' },
    { name: 'Ethereum', symbol: 'ETH', price: 3200, trend: 'DOWN' },
    { name: 'Polkadot', symbol: 'DOT', price: 7, trend: 'UP' }
  ];


  getBallance(): number {
    return this.walletBalance;
  }

  getCoins(): CryptoCurrency[] {
    return this.myCoins;
  }

  purchase(coin: CryptoCurrency): boolean {
    if (this.walletBalance >= coin.price) {
      this.walletBalance -= coin.price;
      return true;
    }
    return false;
  }
}
