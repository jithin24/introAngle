import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loggedIn: boolean;
  constructor(private http: HttpClient) { 
  }

  get loggedIn(){
    return this._loggedIn;
  }
  set loggedIn(status: boolean){
    this._loggedIn=status
  }
  getUserDetails (username: string, password: string){
    //POST these details to API Server and return User info if correct
    return this.http.post<boolean>('/api/validate', {
      "username": username, 
      "password": password
    });
  }

}
