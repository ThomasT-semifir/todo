import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {
  @Input() todoList: Todo[] = []
  @Output() check:EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodoById: EventEmitter<number> = new EventEmitter<number>();
  @Output() redirectByName: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    
  }

  changeCheck(todo: Todo){
    this.check.emit(todo)
  }

  deleteTodo(id: number){
    this.deleteTodoById.emit(id)
  }

  clickOnName = (username: string) => {
    this.redirectByName.emit(username)
  }





}
