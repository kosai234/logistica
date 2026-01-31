
export type TabType = 'tracking' | 'quote' | 'assistant';

export interface Office {
  name: string;
  location: string;
  phone: string;
  isMain?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface QuoteRequest {
  origin: string;
  destination: string;
  cargoType: string;
  weight: string;
}
