import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { TodoService } from './services/todo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { ListTodoComponent } from './list-todo/list-todo.component';
import {CheckboxModule} from 'primeng/checkbox'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoPageComponent } from '../pages/todo-page/todo-page.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button'



@NgModule({
  declarations: [
    ListTodoComponent,
    TodoPageComponent,
    AddTodoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    TableModule,
    CheckboxModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  providers: [TodoService]
})
export class TodoModule { }
