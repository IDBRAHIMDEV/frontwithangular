import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  user = {
    email: "",
    password: ""
  }

  login() {
    this.auth.userLogin(this.user).subscribe(res => {
      console.log(res.json());
      this.route.navigate(['/courses']);
    })
  }


}
