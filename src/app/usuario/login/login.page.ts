import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertController, LoadingController } from '@ionic/angular';
import { ConeccionapiService } from 'src/app/coneccionapi.service';


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
    private cnx: ConeccionapiService

  ) {

    this.loginForm = formBuilder.group({
      usuarionombre: ['mi@correo.com', Validators.required],
      password: ['admin', Validators.required]
    });


  }
  autentificar() {
    this.cnx.login(this.loginForm.value.usuarionombre, this.loginForm.value.password).subscribe(
      ok => {

        console.log(ok);

      },
      error => {
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
