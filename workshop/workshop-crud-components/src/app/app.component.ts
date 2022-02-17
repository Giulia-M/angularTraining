import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  template: ` <div class="container mt-2">
    <!-- <h4>users</h4>
    <pre>{{ users | json }}</pre> -->
    <app-list [items]="users" (delete)="deleteUser($event)"></app-list>
  </div>`,
  styles: [],
})
export class AppComponent {
  users: User[] = [
    { id: 1, label: 'Fabio', gender: 'M', age: 20 },
    { id: 2, label: 'Lorenzo', gender: 'M', age: 37 },
    { id: 3, label: 'Silvia', gender: 'F', age: 70 },
  ];
  deleteUser(user: User) {
    const indexToRemove = this.users.findIndex((u) => u.id === user.id);
    this.users.splice(indexToRemove, 1);
  }
}
