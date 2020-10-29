import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ConeccionapiService } from "src/app/coneccionapi.service";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
@Component({
  selector: "app-editarimagen",
  templateUrl: "./editarimagen.page.html",
  styleUrls: ["./editarimagen.page.scss"],
})
export class EditarimagenPage implements OnInit {
  imagen;
  imageData;
  correo;
  constructor(
    private route: ActivatedRoute,
    private camera: Camera,
    private cnx: ConeccionapiService,
    private activatedroute: ActivatedRoute,
    private router:Router
  ) {
    this.correo = this.activatedroute.snapshot.paramMap.get("correo");
  }

  ngOnInit() {}
  tomarFotografia() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        this.imageData = imageData;
        this.imagen = "data:image/jpeg;base64," + imageData;
      },
      (err) => {
        console.error(err);
      }
    );
  }
  guardarInformacion() {
    const postParams = {
      file: this.imagen,
      correo: this.correo,
    };
    this.cnx.guardarImagen(postParams).subscribe(
      (res:any) => {
       
        if( res=='1' )
        {
          this.router.navigateByUrl('tabprincipal/listausuario');
        }
        else
       alert( res);
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );
  }
}
