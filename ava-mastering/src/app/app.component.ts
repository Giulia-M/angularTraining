import { Component } from '@angular/core';

@Component({
  selector: 'ava-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <ava-navbar></ava-navbar>

    <div style="margin:0 auto">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ava-mastering';
}
