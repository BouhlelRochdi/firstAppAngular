import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
index;
username;
lastname;
email;
age;
pwd;

data = JSON.parse(localStorage.getItem('users'));

  constructor(private activatedRouter: ActivatedRoute) {
   }

  ngOnInit(): void {
   this.index =  this.activatedRouter.snapshot.params.index;
   this.getUser(this.index);
  }
  
  getUser(index){
    console.log(this.index);
    //this.username.value = this.data[index].name;
    this.username = this.data[index].name;
    this.lastname = this.data[index].lastname;
    this.email = this.data[index].Mail;
    this.age = this.data[index].age;
    this.pwd = this.data[index].pwd;
  }

  editUser(){
    this.data[this.index].name = this.username;
    this.data[this.index].lastname = this.lastname;
    this.data[this.index].Mail = this.email;
    this.data[this.index].age = this.age;
    this.data[this.index].pwd = this.pwd;

    localStorage.setItem('users', JSON.stringify(this.data));
    window.location.replace("http://localhost:4200/login");
  }
}
