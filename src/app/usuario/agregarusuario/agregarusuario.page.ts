import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx'; 
import { AlertController, LoadingController } from '@ionic/angular';
 
import { ConeccionapiService } from 'src/app/coneccionapi.service';
import { MustMatch } from 'src/app/Utils/Utils';

@Component({
  selector: 'app-agregarusuario',
  templateUrl: './agregarusuario.page.html',
  styleUrls: ['./agregarusuario.page.scss'],
})
export class AgregarusuarioPage implements OnInit {
  objForm: FormGroup;
  lstRol;
  constructor(private formBuilder: FormBuilder,
    private ld: LoadingController,
    public alertController: AlertController,
    private cnx: ConeccionapiService,
    private loadingController: LoadingController,
    private router: Router,
    private geolocation: Geolocation) {

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
    this.obtenerDatosGeo();
  }

  getRol() {
    this.cnx.listaRol().subscribe(
      (datos: any) => {
        console.log(datos);
        this.lstRol = datos;
      },
      error=>{
        console.log(error);
      }
    );
  }

  insertarUsuario(){
   
    let  usu_nombres =  this.objForm.value.usu_nombres ;
    let  usu_password = this.objForm.value.usu_password ;
    let  rol_codigo  = this.objForm.value.rol_codigo ;
    this.cnx.insertarUsuario(this.objForm.value.usu_correo, usu_nombres ,usu_password,  rol_codigo ).subscribe(
     ( resultado:any) =>{  
     console.log(resultado);
      alert(resultado.mensaje);
      },
     error=>{ console.log(error) }

    );
  }

  obtenerDatosGeo(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {   
      alert(geoposition.coords.longitude);
      alert(geoposition.coords.latitude);
      console.log(geoposition.coords.longitude + ' ' + geoposition.coords.latitude);
    });
    
  }

}
