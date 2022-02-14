import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ava-tab-bar',
  template: ` <ul class="nav nav-tabs">
    <li
      class="nav-item"
      *ngFor="let item of items"
      (click)="tabClick.emit(item)"
    >
      <a class="nav-link" [ngClass]="{ active: item.id === active?.id }">{{
        item.label
      }}</a>
    </li>
  </ul>`,
  styles: [],
})
export class TabBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() items: any[] = [];
  @Input() active: any;

  // @Input() labelField = 'label';
  @Output() tabClick = new EventEmitter();
}
