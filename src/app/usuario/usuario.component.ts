import { UsuarioService } from '../_services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../_models/usuario';
import { ThrowStmt } from '@angular/compiler';
import {ConfirmationService} from 'primeng/api';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ConfirmationService]
})
export class UsuarioComponent implements OnInit {

  public usuarios: Usuario[];
  constructor(private usuarioService: UsuarioService,private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.listUsers();
  }

  listUsers() {
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
      },
      error => {
       alert('Erro');
      });
  }

  deletar(id: string) {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
      this.usuarioService.delete(id).subscribe(
          res => {
            this.listUsers();
          },
          error => {
            alert('error');
        });
      }
  });
  }


}
