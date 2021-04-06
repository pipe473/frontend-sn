import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'localhost:3000/api/user'

  // Register
 // localhost:3000/api/user/register

  // Login
  // localhost:3000/api/user/login


  constructor(private http: HttpClient) { }

  logout(){

  }

  login(usuario: UserModel){

  }

  register(usuario: UserModel){

  }

}
