export interface IGetTrades {
  page: number;
  size: number;
  previous_page: string | null;
  next_page: string | null;
  total: number;
}
interface TimePeriodData {
  avgBoughtPriceUSD: number;
  avgSoldPriceUSD: number;
  loseCount: number;
  realizedPnL: number;
  realizedROI: number;
  revolution: string;
  timestamp: number;
  totalBoughtTxns: number;
  totalBoughtUSD: number;
  totalSoldTxns: number;
  totalSoldUSD: number;
  totalTrades: number;
  unRealizedPnL: number;
  walletAddress: string;
  winCount: number;
  winRate: number;
}

interface WalletData {
  '15d': TimePeriodData;
  '1d': TimePeriodData;
  '30d': TimePeriodData;
  '7d': TimePeriodData;
  timestamp: number;
  walletAddress: string;
}

export interface WalletResponse {
  data: WalletData[];
  message: string;
  page: number;
  page_size: number;
  status: number;
  total: number;
}
