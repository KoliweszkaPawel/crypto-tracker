export interface CryptoCurrency {
  name: string;
  symbol: string;
  price: number;
  trend: 'UP' | 'DOWN';
}
