import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 Revisa que la ruta sea '@angular/common'
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './components/history-page/history-page.component';

@NgModule({
  imports: [
    CommonModule,          // 👈 Posición 0
    HistoryRoutingModule,
    HistoryPageComponent
  ]
})
export class HistoryModule {}