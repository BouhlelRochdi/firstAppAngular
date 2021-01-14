import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  email;
  pwd;
    ngOnInit(): void {
  }




  data = JSON.parse(localStorage.getItem('users'));
	login(){
	 let loguser = 
			{
			username : this.email,
			password: this.pwd,
			}
	
		if (this.data.find(x => x.Mail == this.email && x.pwd==this.pwd))
		{ 	
			window.location.replace("http://localhost:4200/home");
			localStorage.setItem('userConnect', JSON.stringify(loguser));
		}
		else
			alert ("user undefind");

	}

}
