import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../_models/usuario";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  private url = environment.host + "user";

  constructor(private http: HttpClient) {}

  public getUsuario(): Usuario {
    const usuario = new Usuario();
    usuario.name = "Flavio";
    usuario.email = "flavio2201@gmail.com";
    return usuario;
  }

  public getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  public salvar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }
  public delete(id: string): Observable<any> {
    return this.http.delete(this.url + "/" + id);
  }
}
