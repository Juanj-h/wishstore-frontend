export interface HistoryLog {
  id: number;
  action: 'ADDED' | 'REMOVED';
  productName: string;
  timestamp: Date;
}