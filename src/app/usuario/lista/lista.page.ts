import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
 
import { ConeccionapiService } from 'src/app/coneccionapi.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(
    private cnx: ConeccionapiService,
    public alertController: AlertController

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

  async confirmar(correo) {
    const alert = await this.alertController.create({
      header: 'Confirmar!',
      message: 'Desea eliminar el item   seleccionado:<b> ' + correo + '</b>',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SI',
          handler: () => {
              this.eliminarUsuario(correo);    
          }
        }
      ]
    });

    await alert.present();
  }

  eliminarUsuario(correo){
 this.cnx.eliminarUsuario(correo).subscribe(
  (resultado:any)=>{
    this.listaDeUsuarios();
    console.log(resultado);
  }

 );
  }


}
