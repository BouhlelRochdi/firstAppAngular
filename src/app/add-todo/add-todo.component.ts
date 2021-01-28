import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import {ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  addTodoForm : FormGroup;
  a = JSON.parse(localStorage.getItem('add-todo')) || [];

  constructor() { }

  ngOnInit(): void {
    this.addTodoForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(8)]),
      lastname : new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.maxLength(8)])
    });
    
  }

  getAddtodo(){
    let todo = {
      name: this.addTodoForm.controls['name'].value,
      desc: this.addTodoForm.controls['description'].value
    }
    this.a.push(todo);
    alert(todo);
    localStorage.setItem('add-todo', JSON.stringify(this.a));
  }  

  test(){
    console.log(this.addTodoForm.value);
    console.log(this.addTodoForm.controls['name'].value);
    }
   
  onSubmit(){
    console.log(this.addTodoForm.value);
  }
    
  }

 
