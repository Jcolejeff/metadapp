export interface IGetTrades {
  page: number;
  size: number;
  previous_page: string | null;
  next_page: string | null;
  total: number;
}
