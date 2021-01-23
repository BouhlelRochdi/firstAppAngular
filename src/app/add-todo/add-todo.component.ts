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

  constructor() { }

  ngOnInit(): void {
    this.addTodoForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(8)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(8)])

    });
    
    
  }
  save(){
    console.log(this.addTodoForm.value);
    console.log(this.addTodoForm.controls['name'].value);
    }
  }

 
