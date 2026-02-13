import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CryptoCurrency} from '../models';
import {CurrencyPipe, NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-crypto-card',
  imports: [
    CurrencyPipe,
    NgClass,
    RouterLink
  ],
  templateUrl: './crypto-card.html',
  styleUrl: './crypto-card.scss',
})
export class CryptoCard {
  @Input() crypto!: CryptoCurrency;

  @Output() buyClicked: EventEmitter<CryptoCurrency> = new EventEmitter<CryptoCurrency>();

  buyCrypto() {
    this.buyClicked.emit(this.crypto);
  }
}
