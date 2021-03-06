import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS} from 'src/app/config/config';
import { Usuario } from '../../models/usuario.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) { }

  crearUsuario (usuario: Usuario): Observable <any> {
    let url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario).
    pipe(map((response: any) => {
      return response.usuario;
    })
    );
  }
}
