// got this from https://sankhadip.medium.com/how-to-sort-table-rows-according-column-in-angular-9-b04fdafb4140

import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { Sort } from '../tickets/utils/sort';

@Directive({
  selector: '[appSort]',
})
export class SortDirective {
  @Input()
  appSort: Array<any> = [];

  constructor(private renderer: Renderer2, private targetElem: ElementRef) {}

  @HostListener('click')
  sortData() {
    const sort = new Sort();

    const elem = this.targetElem.nativeElement;

    const order = elem.getAttribute('data-order');

    const type = elem.getAttribute('data-type');

    const property = elem.getAttribute('data-name');
    if (order === 'desc') {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute('data-order', 'asc');
    } else {
      this.appSort.sort(sort.startSort(property, order, type));
    }
  }
}
