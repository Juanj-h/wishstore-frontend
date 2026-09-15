import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HistoryService } from '../../../../core/service/history.service';
import { HistoryLog } from '../../../../models/history.model';

@Component({
  selector: 'app-history-page',
  standalone: true, // 👈 Esta línea es obligatoria para poder ponerlo en 'imports'
  imports: [CommonModule],
  template: `
    <h2>Historial de Actividad</h2>
    <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th>Acción</th>
          <th>Producto</th>
          <th>Fecha/Hora</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let log of logs$ | async">
          <td>{{ log.action === 'ADDED' ? 'Añadido' : 'Eliminado' }}</td>
          <td>{{ log.productName }}</td>
          <td>{{ log.timestamp | date:'short' }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class HistoryPageComponent {
  logs$: Observable<HistoryLog[]> 

  constructor(private historyService: HistoryService) {
    this.logs$ = this.historyService.logs$;
}
}