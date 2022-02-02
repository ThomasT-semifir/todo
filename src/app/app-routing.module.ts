import { TodoModule } from './todo/todo.module';

import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "accueil", component: AccueilComponent},
  {path: "", redirectTo:"/accueil", pathMatch: 'full'},
  {path: "todo", loadChildren: () => import("./todo/todo.module").then(_ => TodoModule) },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
