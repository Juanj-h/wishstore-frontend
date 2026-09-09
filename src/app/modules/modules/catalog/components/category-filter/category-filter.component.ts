import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent {

  @Output()
  categorySelected = new EventEmitter<string>();

  categories: string[] = [
    'Electrónica',
    'Ropa',
    'Hogar',
    'Deportes',
    'Libros'
  ];

  selectCategory(category: string): void {
    this.categorySelected.emit(category);
  }

  clearCategory(): void {
    this.categorySelected.emit('');
  }

}