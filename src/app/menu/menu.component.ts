import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Home',
          items: [{
                  label: 'New',
                  icon: 'pi pi-fw pi-home',
                  routerLink: 'home'
              }
          ]
      },
      {
        label: 'Usuario',
        icon: 'pi pi-fw pi-user',
        routerLink: 'usuario'
      },
      {
          label: 'Estado',
          icon: 'pi pi-fw pi-pencil',
          routerLink: 'estado'
      }
  ];
  }

}
