import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  user: UserModel;

  constructor(private fb: FormBuilder, private auth: AuthService )
  { 
    this.RegisterForm();
  }

  ngOnInit(): void {
    // this.user = new UserModel();

    // this.user.email = "pipe473@gmail.com"
  }

  RegisterForm(){
    this.form = this.fb.group({
      nickname:['', [Validators.required, Validators.minLength(4)]],
      email:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      contrasena:['', Validators.minLength(5)],
      tags:['',  Validators.required],
    });
  }

  save(){
    console.log(this.form);
    
  }

}
