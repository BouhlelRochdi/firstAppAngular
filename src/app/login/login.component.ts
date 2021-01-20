import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	email;
	pwd;
	data = JSON.parse(localStorage.getItem('users')) || [];
  constructor(private router:Router) { }

  ngOnInit(): void {

  }

	login(){
		let loguser =  this.data.find(x => x.Mail == this.email && x.pwd==this.pwd)
		if(loguser !== undefined)
		{
			//window.location.replace("http://localhost:4200/home");
			this.router.navigateByUrl("/home");

			localStorage.setItem('userConnect', JSON.stringify(loguser));
		}
		else
		{
			alert ("verify your e-mail or password !!!");
		}	

	}

}
