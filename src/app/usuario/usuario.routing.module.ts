import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioNewComponent } from './usuario-new/usuario-new.component';

const routes: Routes = [
  { path: '', component: UsuarioComponent  },
  { path: 'new', component: UsuarioNewComponent  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
