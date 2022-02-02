import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];
  color: string = "#00000";

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Accueil', icon:'pi pi-fw pi-home', routerLink:"/accueil"},
      { label: 'Todo', icon: 'pi pi-fw pi-pencil', routerLink:"/todo"}
    ]
  }

  changeColor(){
    document.documentElement.style.setProperty('--background-color', this.color);
  }

}
