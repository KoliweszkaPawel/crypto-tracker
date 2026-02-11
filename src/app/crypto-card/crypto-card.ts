import {Component, Input} from '@angular/core';
import {CryptoCurrency} from '../models';

@Component({
  selector: 'app-crypto-card',
  imports: [],
  templateUrl: './crypto-card.html',
  styleUrl: './crypto-card.scss',
})
export class CryptoCard {
  @Input() crypto!: CryptoCurrency;
}
