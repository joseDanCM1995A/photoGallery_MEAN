import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router'
import { PhotoService } from '../../services/photo.service';
// para  poder redireccionar
import { Router } from '@angular/router';



// interface para la función y dar autocompletado al evento
interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-potho-form',
  templateUrl: './potho-form.component.html',
  styleUrls: ['./potho-form.component.css']
})
export class PothoFormComponent implements OnInit {

  file: File; // almacenar la imagen para enviarla
  photoSelected: string | ArrayBuffer; // la imagen la almacena como string o un buffer // si al menos están subiendo una foto

  constructor( private photoService: PhotoService, private router: Router) { } // instanciando el servicio

  ngOnInit(): void {
  }

  onPhotoSelected(event: HtmlInputEvent, ): void{ // no regresa nada y este evento
    if(event.target.files && event.target.files[0]){ // si hay un achivo y si hay un archivo en la posicion 0
      this.file = <File>event.target.files[0]; // añamacenando la imagen en una variable de tipo File
      // image preview
      const reader = new FileReader(); // instanciando un reader para la ller imagen en el SO
      reader.onload = e => this.photoSelected = reader.result; // almacenando la imagen leída del so a la variable photoSelected
      reader.readAsDataURL(this.file); // leyengo el path de a foto
    }
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean{ // tipo input, tipo textarea
  this.photoService
  .createPhoto(title.value, description.value, this.file)
  .subscribe ( // si es correcta la subida, entonces redireccioname a mi homepage
    res => {
      this.router.navigate(['/photos']);
    }
    , err => console.log(err));
  return false;
}


}
