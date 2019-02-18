import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  userLogin(e: any) {
    e.preventDefault();
    //console.log(e);
    let target: any =e.target;
    const username=target.querySelector('#username').value;
    const password=target.querySelector('#password').value;
    this.Auth.getUserDetails(username, password).subscribe(data => {
      console.log(data);
      this.Auth.loggedIn=data;
      if(data){
        console.log('Authentication Successful!!!');
        this.router.navigate(['admin']);
      }
      else{
        console.log('Authentication Failed');
        window.alert('Unauthorized');
      }
    });
  }
}
