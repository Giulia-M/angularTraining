import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  template: `
    <!-- <h4>Users</h4>
    <pre>{{ users | json }}</pre> -->
    <div class="container">
      <h4>Users</h4>
      <div *ngFor="let u of users" class="list-group-item">
        <i
          class="fa fa-3x"
          [ngClass]="{
            'fa-mars': u.gender === 'M',
            'fa-venus': u.gender === 'F'
          }"
        ></i>
        {{ u.label }}
      </div>
    </div>
  `,

  styles: [''],
})
export class AppComponent {
  title = 'demo1';
  users: User[] = [
    // list of users
    { id: 1, label: 'Fabio', gender: 'M', age: 20 },
    { id: 2, label: 'Lorenzo', gender: 'M', age: 37 },
    { id: 3, label: 'Silvia', gender: 'F', age: 70 },
  ];
}
