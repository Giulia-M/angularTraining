import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ava-card',
  template: `
    <div class="card">
      <div class="card-header">
        {{ title }}
        <div class="pull-right">
          <i [class]="icon" (click)="doAction()"></i>
        </div>
        <button (click)="this.footer.emit()">{{ footerButtonLabel }}</button>
      </div>
      <div class="card-body">{{ body }}</div>
    </div>
  `,
  styles: [],
})
export class CardComponent {
  @Input() title: string | null = null;
  @Input() body: string = '';
  @Input() icon: string | null = null;
  @Input() url: string | null = null;
  @Input() footerButtonLabel: string | null = null;
  @Output() iconClick = new EventEmitter();
  @Output() footer = new EventEmitter();

  doAction() {
    // if (this.url) {
    //   window.open(this.url);
    // }
    this.iconClick.emit();
  }
}
