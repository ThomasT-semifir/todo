import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  user = this.route.snapshot.paramMap.get("name")

  @Output() createTodo:EventEmitter<Todo> = new EventEmitter<Todo>()
  @Output() validate:EventEmitter<boolean> = new EventEmitter<boolean>()

  todoForm = this.fb.group({
    task:["", Validators.required],
    user:[this.user, Validators.required],
    completed:[false]
  })
  
  constructor(private fb:FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.todoForm.valid) {
      this.validate.emit(false)
      this.createTodo.emit(this.todoForm.value)
    }
  }

}
