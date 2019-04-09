import { UsuarioService } from './../../_services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/_models/usuario';

@Component({
  selector: 'app-usuario-new',
  templateUrl: './usuario-new.component.html',
  styleUrls: ['./usuario-new.component.css']
})
export class UsuarioNewComponent implements OnInit {
  public usuario: Usuario = new Usuario();
  constructor(private usuarioSerivce: UsuarioService) { }

  ngOnInit() {
  }

  public salvar() {

    this.usuarioSerivce.salvar(this.usuario).subscribe(
      res => {
        alert('Sucesso');
      },
      error => {
        alert('Falhou');
      }
    );
  }

}
