import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HistoryLog } from '../../models/history.model';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  private logsSubject = new BehaviorSubject<HistoryLog[]>([]);
  logs$ = this.logsSubject.asObservable();
  private nextId = 1;

  addLog(action: 'ADDED' | 'REMOVED', productName: string): void {
    const newLog: HistoryLog = {
      id: this.nextId++,
      action,
      productName,
      timestamp: new Date()
    };
    this.logsSubject.next([newLog, ...this.logsSubject.value]);
  }
}