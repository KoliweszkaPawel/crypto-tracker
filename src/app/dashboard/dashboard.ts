import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CryptoCurrency} from '../models';
import {Crypto} from '../crypto';
import {AsyncPipe, CurrencyPipe} from '@angular/common';
import {CryptoCard} from '../crypto-card/crypto-card';

@Component({
  selector: 'app-dashboard',
  imports: [
    AsyncPipe,
    CryptoCard,
    CurrencyPipe
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  balance$!: Observable<number>;
  coins$!: Observable<CryptoCurrency[]>;

  constructor(private crypto: Crypto) {}

  ngOnInit() {
    this.coins$ = this.crypto.getCoins();
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
