
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { formTrigger } from './auth-form.animations';
import { User } from './../user.model';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  animations: [formTrigger]
})
export class AuthFormComponent implements OnInit {
  public title = 'login';
  public formView = true;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  destroyComponent() {
    this.formView = false;
    return timer(500);
  }

}
