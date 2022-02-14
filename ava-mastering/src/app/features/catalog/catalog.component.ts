import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';
@Component({
  selector: 'ava-catalog',
  template: ` <p>catalog works!</p>
    <ava-card *ngFor="let user of users" [title]="user.name"></ava-card>
    <ava-users-list [data]="users"></ava-users-list>`,
  styles: [],
})
export class CatalogComponent implements OnInit {
  users: User[] = [];
  constructor(private http: HttpClient) {
    http
      // .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .get<User[]>('http://localhost:3000/users')
      .subscribe((res) => {
        this.users = res;
      });
  }

  ngOnInit(): void {}
  deleteUser(userToDelete: User) {}
}
