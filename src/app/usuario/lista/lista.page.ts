import { Component, OnInit } from '@angular/core';
 
import { ConeccionapiService } from 'src/app/coneccionapi.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(
    private cnx: ConeccionapiService

  ) { }

  lstUsuarios;
  ngOnInit() {
    this.listaDeUsuarios();
  }

  listaDeUsuarios() {
    this.cnx.listaUsuarios().subscribe(
      (datos: any) => {
        
        this.lstUsuarios = datos;

      },
      error => { }

    );

  }

}
