import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertController, LoadingController } from '@ionic/angular';
import { ConeccionapiService } from 'src/app/coneccionapi.service';
import { MUsuario } from 'src/app/modelos/usuario.modelo';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private ld: LoadingController,
    public alertController: AlertController,
    private cnx: ConeccionapiService,
    private loadingController: LoadingController,
    private router:Router

  ) {

    this.loginForm = formBuilder.group({
      usuarionombre: ['mi@correo.com', Validators.required],
      password: ['admin', Validators.required]
    });


  }
  async autentificar() {

    const loading = await this.loadingController.create({
      message: 'Verificando...',
    });
    loading.present();

 


    this.cnx.login(this.loginForm.value.usuarionombre, this.loginForm.value.password).subscribe(
     ( resultado :any)  => {
        loading.dismiss();
        console.log(resultado);
        if (resultado.usu_correo == undefined) {
          this.presentAlert('Error en los datos');
       
        }
        else{
          let usuario = Object.assign(new MUsuario, resultado);    
         
          localStorage.setItem("correo",resultado.usu_correo  );
          localStorage.setItem("nombre",resultado.usu_nombres );
          this.router.navigateByUrl('tabprincipal/listausuario');
        }


      },
      error => {
        loading.dismiss();
        console.log(error);
      }
    );


  }

  ngOnInit() {
  }

  async presentAlert(mensaje) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mi app',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
 


}
