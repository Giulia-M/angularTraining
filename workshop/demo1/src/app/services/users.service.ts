import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[];
  URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {
    // this.init();
  }
  init() {
    this.http.get<User[]>(this.URL + '/users').subscribe((res) => {
      this.users = res;
    });
  }

  deleteHandler(userToRemove: User) {
    this.http.delete(`${this.URL}/users/${userToRemove.id}`).subscribe(() => {
      this.users = this.users.filter((u) => u.id !== userToRemove.id);
    });
  }

  //services should have no references to the UI.
  /*
  saveHandler(f: NgForm) {
    const user = f.value as User;

    this.http.post<User>(`${this.URL}/users/`, user).subscribe((dbUser) => {
      this.users = [...this.users, dbUser];
      f.reset();
    });
    // add a fake ID
    // user.id = Date.now();
    // this.users = [...this.users, user];
  }
  */

  saveHandler(user: User): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post<User>(`${this.URL}/users/`, user).subscribe(
        (dbUser) => {
          this.users = [...this.users, dbUser];
          resolve();
        },
        () => reject()
      );
    });
  }
}
