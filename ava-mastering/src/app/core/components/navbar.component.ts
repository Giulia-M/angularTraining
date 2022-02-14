import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ava-navbar',
  template: `
    <p>RouterLink</p>
    <button routerLink="home" routerLinkActive="active">home</button>
    <button routerLink="uikit1" routerLinkActive="active">uikit1</button>
    <button routerLink="uikit2" routerLinkActive="active">uikit2</button>
    <button routerLink="catalog" routerLinkActive="active">catalog</button>
    <button routerLink="login" routerLinkActive="active">login</button>
    <hr />
    <p>Componente padre navbar</p>
    <div>
      <p>componente figlio tab-bar: ava-tab-bar</p>
      <ava-tab-bar
        [items]="pages"
        (tabClick)="changePage($event)"
        [active]="activePage"
      ></ava-tab-bar>
    </div>
  `,
  styles: [
    `
      .active {
        background-color: pink;
      }
    `,
  ],
})
export class NavbarComponent {
  activePage: any;

  pages = [
    {
      id: 1,
      label: 'catalog',
      url: '/catalog',
    },
    {
      id: 2,
      label: 'home',
      url: '/home',
    },
    {
      id: 3,
      label: 'login',
      url: '/login',
    },
    {
      id: 4,
      label: 'uikit1',
      url: '/uikit1',
    },
    {
      id: 5,
      label: 'uikit2',
      url: '/uikit2',
    },
  ];

  constructor(private router: Router, private location: Location) {
    /*
    non ho capito cosa fa questo pezzo di codice
    this.activePage = this.pages.find((page) => {
      return page.url === this.location.path();
    });
    */
  }
  changePage(page: any) {
    this.activePage = page;
    this.router.navigateByUrl(page.url);
  }
}
