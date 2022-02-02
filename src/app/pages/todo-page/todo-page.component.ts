import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/todo/models/todo.model';
import { TodoService } from 'src/app/todo/services/todo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  todoList: Todo[] = []
  todoSubscription: Subscription = new Subscription()
  name = this.route.snapshot.paramMap.get("name")!;
  showReturnButton: boolean = false;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {
    if(this.name){
      this.showReturnButton = true;
      this.findAllByUser(this.name);
    }
    else{
      this.findAll()
    }
  }

  ngOnDestroy(): void {
    this.todoSubscription.unsubscribe()
  }

  findAll = (): void => {
    this.todoSubscription = this.todoService.findAll().subscribe(data => this.todoList = data);
  }

  findAllByUser(name: string){
    this.todoSubscription = this.todoService.findTodoByName(name).subscribe(
      {
        next: (data) => this.todoList = data,
        error: err => console.error(err),
        complete: () => this.todoList.length === 0 ? this.router.navigateByUrl('/PageNotFound'): null
      }
    )
  }

  patchTodo = (data:Todo): void => {
    this.todoService.changeCheck(data).subscribe( 
      {
        next : () => this.todoService.findAll(),
        error : err => console.error(err)
      }      
    )
  }

  deleteTodo = (id: number) => {
    this.todoService.deleteTodoById(id).subscribe(
      {
        next: () => this.findAll(),
        error : err => console.error(err)
      }
    )
  }

  addTodo = (todo: Todo) => {
    this.todoService.addTodo(todo).subscribe(
      {
        next: (data) => this.todoList.push(data),
        error: err => console.error(err)
      }
    )
  }

  redirectTo = (username: string) => {
    this.router.navigateByUrl(`/todo/${username}`);
  }

  goBack = () => {
    this.location.back()
  }

}
