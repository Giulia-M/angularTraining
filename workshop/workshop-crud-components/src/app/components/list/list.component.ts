import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { User } from 'src/app/model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() items: User[] | undefined;

  @Output() delete: EventEmitter<User> = new EventEmitter<User>();
}
