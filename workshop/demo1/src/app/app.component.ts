import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './model/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  template: `
    <!-- <h4>Users</h4>
    <pre>{{ users | json }}</pre> -->

    <div class="container">
      <form
        class="card card-body mt-2"
        #f="ngForm"
        (submit)="usersService.saveHandler(f)"
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
          *ngFor="let u of usersService.users"
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
            (click)="usersService.deleteHandler(u)"
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

  constructor(public usersService: UsersService) {
    usersService.init();
  }
}
