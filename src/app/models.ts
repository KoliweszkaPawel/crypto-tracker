export interface CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  price: number;
  trend: 'UP' | 'DOWN';
}
