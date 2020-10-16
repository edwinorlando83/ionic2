import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,           
    private  ld : LoadingController,
    public alertController: AlertController
  ) {
 
    this.loginForm = formBuilder.group({
      usuarionombre: ['', Validators.required],
      password: ['', Validators.required] 
    });


  }
   autentificar() {
   
    this.presentAlert('Error!');
    
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
