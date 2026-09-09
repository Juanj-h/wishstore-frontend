import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

import { FormControl } from '@angular/forms';

import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap
} from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Product } from '../../../../models/product.model';
import { CatalogService } from '../../../../core/services/catalog.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  searchControl = new FormControl('');

  @Output()
  results = new EventEmitter<Product[]>();

  constructor(
    private catalogService: CatalogService
  ) {}

  ngOnInit(): void {

    this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => value ?? ''),
        debounceTime(400),
        distinctUntilChanged(),

        switchMap(value => {

          if (!value.trim()) {
            return of([]);
          }

          return this.catalogService.searchProducts(
            value.trim()
          );

        })
      )
      .subscribe(products => {
        this.results.emit(products);
      });

  }

}