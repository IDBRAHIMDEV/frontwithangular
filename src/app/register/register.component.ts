import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  user = {
    email: "",
    name: "",
    password: ""
  }

  register() {
    this.auth.userRegister(this.user).subscribe(res =>  {
      console.log(res.json())
      localStorage.setItem('atostoken', res.json().token)
      this.route.navigate(['/courses']);
    })
  }

}
