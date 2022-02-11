import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  template: `
    <!-- <h4>Users</h4>
    <pre>{{ users | json }}</pre> -->

    <div class="container">
      <form
        class="card card-body mt-2"
        #f="ngForm"
        (submit)="saveHandler(f)"
        [ngClass]="{
          male: f.value.gender === 'M',
          female: f.value.gender === 'F'
        }"
      >
        <input
          type="text"
          [ngModel]
          name="label"
          placeholder="Add user name"
          class="form-control"
          required
          #labelInput="ngModel"
          [ngClass]="{ 'is-invalid': labelInput.invalid && f.dirty }"
        />

        <select
          [ngModel]
          name="gender"
          class="form-control"
          required
          #genderInput="ngModel"
          [ngClass]="{ 'is-invalid': genderInput.invalid && f.dirty }"
        >
          <option [ngValue]="null">Select option</option>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>

        <button
          class="btn"
          [disabled]="f.invalid"
          [ngClass]="{
            'btn-dark': f.valid,
            'btn-warning': f.invalid
          }"
        >
          Save
        </button>
      </form>

      <hr />

      <hr />
      <!--  -->

      <div class="container">
        <h4>Users</h4>
        <div
          *ngFor="let u of users"
          class="list-group-item"
          [ngClass]="{
            male: u.gender === 'M',
            female: u.gender === 'F'
          }"
        >
          <i
            class="fa fa-3x"
            [ngClass]="{
              'fa-mars male': u.gender === 'M',
              'fa-venus female': u.gender === 'F'
            }"
          ></i>
          {{ u.label }}
          <i
            class="fa fa-trash fa-2x pull-right"
            (click)="deleteHandler(u)"
          ></i>
        </div>
      </div>
    </div>
  `,

  styles: [
    `
      .male {
        background-color: #36caff;
      }
      .female {
        background-color: pink;
      }
      .card {
        transition: all 0.5s;
      }
    `,
  ],
})
export class AppComponent {
  // users: User[] = [
  //   // list of users
  //   { id: 1, label: 'Fabio', gender: 'M', age: 20 },
  //   { id: 2, label: 'Lorenzo', gender: 'M', age: 37 },
  //   { id: 3, label: 'Silvia', gender: 'F', age: 70 },
  // ];

  users: User[];
  URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {
    this.init();
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
}
