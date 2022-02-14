import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ava-navbar',
  template: `
    <button routerLink="home">home</button>
    <button routerLink="uikit1">uikit1</button>
    <button routerLink="catalog">catalog</button>
    <button routerLink="login">login</button>
    <button routerLink="uikit2" routerLinkActive="active">uiki2</button>
  `,
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
