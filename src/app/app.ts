import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CryptoCurrency} from './models';
import {CryptoCard} from './crypto-card/crypto-card';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CryptoCard, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  myCoins: CryptoCurrency[] = [
    { name: 'Bitcoin', symbol: 'BTC', price: 45000, trend: 'UP' },
    { name: 'Ethereum', symbol: 'ETH', price: 3200, trend: 'DOWN' },
    { name: 'Polkadot', symbol: 'DOT', price: 7, trend: 'UP' }
  ];

  walletBalance = 1000;
  assets: CryptoCurrency[] = [];

  handleBuy(crypto: CryptoCurrency) {
    if (crypto.price <= this.walletBalance) {
      this.walletBalance -= crypto.price;
      this.assets.push(crypto);
      console.log(`Kupiłeś: ${crypto.name} Zostało: ${this.walletBalance}`);
    } else {
      alert('Brak środków!');
    }
  }
}
