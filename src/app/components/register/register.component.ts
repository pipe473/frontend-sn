import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel;

  constructor() { }

  ngOnInit(): void {
    this.user = new UserModel();

    this.user.email = "pipe473@gmail.com"
  }

}
