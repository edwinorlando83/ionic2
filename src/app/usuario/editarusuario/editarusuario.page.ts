import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ConeccionapiService } from 'src/app/coneccionapi.service';
import { MustMatch } from 'src/app/Utils/Utils';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.page.html',
  styleUrls: ['./editarusuario.page.scss'],
})
export class EditarusuarioPage implements OnInit {
  objForm: FormGroup;
  lstRol;
  constructor(private formBuilder: FormBuilder,
    private ld: LoadingController,
    public alertController: AlertController,
    private cnx: ConeccionapiService,
    private loadingController: LoadingController,
    private router: Router) {

    this.objForm = formBuilder.group({
      usu_correo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      usu_nombres: ['', Validators.required],
      usu_password: ['', Validators.required],
      rusu_password: ['', Validators.required],
      rol_codigo: ['', Validators.required]
    }, {
      validator: MustMatch('rusu_password', 'usu_password')
    });

  }

  ngOnInit() {
    this.getRol();
  }

  getRol() {
    this.cnx.listaRol().subscribe(
      (datos: any) => {
        console.log(datos);
        this.lstRol = datos;
      }
    );
  }

}
