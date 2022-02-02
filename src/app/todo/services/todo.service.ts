import { Todo } from './../models/todo.model';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  findAll = (): Observable<Todo[]> => {
    return this.http.get<Todo[]>(`${environment.url}/data`)
  }

  changeCheck = (data:Todo):Observable<Todo> => {
    return this.http.patch<Todo>(`${environment.url}/data/${data.id}`, data)
  }

  deleteTodoById = (id: number) => {
    return this.http.delete<Todo>(`${environment.url}/data/${id}`)
  }

  addTodo = (todo: Todo) => {
    return this.http.post<Todo>(`${environment.url}/data/`, todo)
  }

  findTodoByName = (name:string|null):Observable<Todo[]> => {
    return this.http.get<Todo[]>(`${environment.url}/data?user=` + name)
  }
}
