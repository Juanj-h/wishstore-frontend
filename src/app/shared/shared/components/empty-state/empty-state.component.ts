import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {

  @Input() title = 'No encontramos productos.';

  @Input()
  message = 'No hay información disponible.';

}