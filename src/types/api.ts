export interface ICurrencyItem {
  code: string;
  value: number;
}

export interface ICurrencyResponse {
  meta: {
    last_updated_at: string;
  };
  data: {
    [currencyCode: string]: ICurrencyItem;
  };
}

export interface ICurrenciesList {
  [key: string]: { title: string; image: string; alt: string };
}
