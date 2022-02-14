import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'ava-uikit-demo1',
  template: `
    <p>uikit-demo1 works!</p>
    <ava-card
      title="one"
      icon="fa fa-times"
      body="bla"
      footerButtonLabel="go to ..."
    ></ava-card>
    <ava-card
      title="link"
      icon="fa fa-linkedin"
      body="bla"
      (iconClick)="openUrl('http://www.linkedin.com')"
      (footer)="openUrl('http://www.facebook.com')"
      footerButtonLabel="go to fb"
    ></ava-card>
    <ava-card
      title="fb"
      body="..."
      icon="fa fa-facebook"
      (iconClick)="openUrl('http://www.facebook.com')"
      footerButtonLabel="go to .."
    ></ava-card>

    <ava-card
      title="go "
      body="..."
      icon="fa fa-trash"
      (iconClick)="page = 'pluto'"
      (footer)="changeRoute('home')"
      footerButtonLabel="go to home"
    ></ava-card>
    {{ page }}
  `,
  styles: [],
})
export class UikitDemo1Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  page = 'pippo';

  openUrl(url: string) {
    window.open(url);
  }
  changeRoute(url: string) {
    this.router.navigateByUrl('home');
  }
}
