import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule'  },
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioModule' },
  { path: 'estado', loadChildren: './estado/estado.module#EstadoModule' },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
