import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CryptoCurrency} from './models';
import {CryptoCard} from './crypto-card/crypto-card';
import {AsyncPipe, CurrencyPipe} from '@angular/common';
import {Crypto} from './crypto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CryptoCard, CurrencyPipe, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  balance$!: Observable<number>;
  coins: CryptoCurrency[] = [];

  constructor(private crypto: Crypto) {}

  ngOnInit() {
    this.coins = this.crypto.getCoins();
    this.balance$ = this.crypto.balance$;
  }

  handleBuy(coin: CryptoCurrency) {
    const success = this.crypto.purchase(coin);
    if (success) {
      console.log(`Kupiłeś: ${coin.name}`);
    } else {
      alert('Brak środków!');
    }
  }
}
