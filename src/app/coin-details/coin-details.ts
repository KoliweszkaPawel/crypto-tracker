import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Observable} from 'rxjs';
import {Crypto} from '../crypto';
import {AsyncPipe, CurrencyPipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-coin-details',
  imports: [
    RouterLink,
    CurrencyPipe,
    UpperCasePipe,
    AsyncPipe
  ],
  templateUrl: './coin-details.html',
  styleUrl: './coin-details.scss',
})
export class CoinDetails implements OnInit {
  details$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private crypto: Crypto
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.details$ = this.crypto.getCoinDetails(id);
    }

  }
}
