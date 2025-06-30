import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { LoginResp } from '../model/LoginResp';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = "https://7445-41-82-215-155.ngrok-free.app/api";

  constructor(private http: HttpClient) {}

  login(data: User) {
    return this.http.post<LoginResp>(`${this.API_URL}/login`, data);
  }

  register(data: User) {
    return this.http.post<LoginResp>(`${this.API_URL}/register`, data);
  }

  saveToken(token : string){
    localStorage.setItem("token",token);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  removeToken(){
    return localStorage.removeItem("token");
  }

  logout() {
    return this.http.post(`${this.API_URL}/logout`, {});
  }

  isLoggedIn(){
    return !!this.getToken();
  }
}
