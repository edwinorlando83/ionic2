import { Component } from '@angular/core';

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
  constructor() {
    this.nombre='Orlando';
  } 
  cambiarNombre(){
    this.nombre = this.texto;
  }
}
