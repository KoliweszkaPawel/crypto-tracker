import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CryptoCurrency} from './models';
import {CryptoCard} from './crypto-card/crypto-card';
import {CurrencyPipe} from '@angular/common';
import {Crypto} from './crypto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CryptoCard, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  balance = 0;
  coins: CryptoCurrency[] = [];

  constructor(private crypto: Crypto) {}

  ngOnInit() {
    this.coins = this.crypto.getCoins();
    this.balance = this.crypto.getBallance();
  }

  handleBuy(coin: CryptoCurrency) {
    const success = this.crypto.purchase(coin);
    if (success) {
      this.balance = this.crypto.getBallance();
      console.log(`Kupiłeś: ${coin.name} Zostało: ${this.balance}`);
    } else {
      alert('Brak środków!');
    }
  }
}
