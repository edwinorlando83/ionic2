import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConeccionapiService {
 //  URL = 'http://apirest.ingenio-ti.net/';
  URL = 'http://192.168.100.9/ionic/';
  constructor(public http: HttpClient ) { }

  login(inusuario, inpassword) {
    const urlServer = this.URL + 'usuarios.php';
    let body = new HttpParams();
    body = body.set('usuario', inusuario);
    body = body.set('password', inpassword);
    body = body.set('op', 'login');    
    return this.http.post(urlServer, body, { responseType: 'json' });
  }
  listaUsuarios( ) {
    const urlServer = this.URL + 'usuarios.php';
    let body = new HttpParams();   
    body = body.set('op', 'lista-usuario');    
    return this.http.post(urlServer, body, { responseType: 'json' });
  }



}
