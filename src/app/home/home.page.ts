import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { MUsuario } from '../modelos/usuario.modelo';
  
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre;
  edad=30;
  apellido='Cholota';
  fecha;
  sueldo=400.55;
  imagen='assets/otros.jpg';
  texto;
  n1 = '1';
  n2;
  usuario:MUsuario;
  listaUsuarios : Array<MUsuario> ; 
  listaUsuarios2: MUsuario[];
  data:Data;
  condicion=false;
  condicion2= 0;
  constructor() {
    this.nombre='Orlando';
    this.usuariosList();
  } 
  cambiarNombre(){
    this.nombre = this.texto;
    let n3 = Number(this.n1);
    this.n2 = Number(this.n1);
    this.condicion = !this.condicion;
    this.condicion2 = 1;
  }

  usuariosList() {
    this.listaUsuarios = [
        {
            correo: 'correo1@correo.com',
            nombres: 'nombre1',
            rol: 'nombre1',
            activo: true,
            created: new Date(),
        },
        {
            correo: 'correo2@correo.com',
            nombres: 'nombre2',
            rol: 'nombre2',
            activo: true,
            created: new Date(),
        },
        {
            correo: 'correo3@correo.com',
            nombres: 'nombre3',
            rol: 'nombre3',
            activo: true,
            created: new Date(),
        },
        {
            correo: 'correo4@correo.com',
            nombres: 'nombre4',
            rol: 'nombre4',
            activo: true,
            created: new Date(),
        },
        {
            correo: 'correo5@correo.com',
            nombres: 'nombre5',
            rol: 'nombre5',
            activo: true,
            created: new Date(),
        }
    ];

   
}


}
