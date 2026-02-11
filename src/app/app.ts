import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CryptoCurrency} from './models';
import {CryptoCard} from './crypto-card/crypto-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CryptoCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  myCoins: CryptoCurrency[] = [
    { name: 'Bitcoin', symbol: 'BTC', price: 45000, trend: 'UP' },
    { name: 'Ethereum', symbol: 'ETH', price: 3200, trend: 'DOWN' },
    { name: 'Polkadot', symbol: 'DOT', price: 7, trend: 'UP' }
  ];
}
