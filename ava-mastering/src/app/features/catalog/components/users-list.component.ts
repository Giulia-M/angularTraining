import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'ava-users-list',
  template: `
    <p>
      users-list works!
      <li *ngFor="let user of data"></li>
    </p>
  `,
  styles: [],
})
export class UsersListComponent implements OnInit {
  @Input() data: User[] = [];
  constructor() {}

  ngOnInit(): void {}
}
