import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-coin-details',
  imports: [
    RouterLink
  ],
  templateUrl: './coin-details.html',
  styleUrl: './coin-details.scss',
})
export class CoinDetails implements OnInit {
  coinId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.coinId = this.route.snapshot.params['id'];
    console.log("Otwarto szczegóły dla", this.coinId);
  }
}
