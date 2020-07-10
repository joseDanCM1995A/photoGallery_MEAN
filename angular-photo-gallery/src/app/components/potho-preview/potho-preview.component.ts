import { Component, OnInit } from '@angular/core';
// importando el service
import { PhotoService } from '../../services/photo.service';
// importando lo necesario para laas rutas // el ActivatedRpute es para que nos de los datos de esa ruta dónde estamos
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../../interfaces/Photo';

@Component({
  selector: 'app-potho-preview',
  templateUrl: './potho-preview.component.html',
  styleUrls: ['./potho-preview.component.css']
})
export class PothoPreviewComponent implements OnInit {

  id: string;
  photo: Photo;

  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute, private router: Router){
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { // de la ruta tomamos la información
      // tslint:disable-next-line: no-string-literal
      this.id = params['id']; // asignando solo el id de la URL
      this.photoService.getPhoto(this.id) // llamando el servicio para mostrar la imgn pasando su id respectivo
      .subscribe(
        res => { // la información recibida la almacenamos en una variable de tipo photo
          this.photo = res;
        },
        err => console.log(err)
      );
    });
  }


  // el id ya lo tengo almacenado globalamente en la variable id, ya no es necesario pasarlo como parametro a la funcion updatePhoto,
  // así ya se l podemos pasar directamente en el método del servicio
  updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement){ // tipo input, tipo textarea
     this.photoService
     .updatePhoto(this.id, title.value, description.value, )
     .subscribe ( // si es correcta la subida, entonces redireccioname a mi homepage
       res => {
         this.router.navigate(['/photos']);
       }
       , err => console.log(err));
     return false;
 }

  deletePhoto(id: string){
    this.photoService
    .deletePhoto(id)
    .subscribe ( // si es correcta la subida, entonces redireccioname a mi homepage
      res => {
        this.router.navigate(['/photos']);
      }
      , err => console.log(err));
    return false;
  }
}
