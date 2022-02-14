import { Component, OnInit } from '@angular/core';
interface Country {
  id: number;
  label: string;
}
@Component({
  selector: 'ava-uikit-demo2',
  template: `
    <p>uikit-demo2 works!</p>
    <ava-tab-bar
      [items]="countries"
      [active]="selectedCountry"
      (tabClick)="selectedCountryHandler($event)"
    ></ava-tab-bar>
  `,
  styles: [],
})
export class UikitDemo2Component implements OnInit {
  constructor() {}
  selectedCountry: Country | null = null;
  ngOnInit(): void {}

  countries: Country[] = [
    { id: 1, label: 'Italy' },
    { id: 1, label: 'Spain' },
  ];
  selectedCountryHandler(c: Country) {
    this.selectedCountry = c;
  }
}
