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
  n1 = '1';
  n2;
  constructor() {
    this.nombre='Orlando';
  } 
  cambiarNombre(){
    this.nombre = this.texto;
    let n3 = Number(this.n1);
    this.n2 = Number(this.n1);
  }
}
