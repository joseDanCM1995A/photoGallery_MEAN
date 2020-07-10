import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // poder hacer peticiones http
// importando la interface que nos ayudará para mostrar todas las imágenes
import { Photo } from '../interfaces/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  URI = 'http://localhost:3000/api/photos'; // Dirección de nuestra API
  constructor(private http: HttpClient) {

  } // instanciando en el constructor el hhtpClient

  createPhoto(title: string, description: string, photo: File){
    const fd = new FormData(); // creando un frmulario para enviar los datos al servidor
    fd.append('title', title); // preparando el titulo
    fd.append('description', description); // preparando la description
    fd.append('image', photo); // preparando la imagen
    return this.http.post(this.URI, fd); // mandando el formulario por le método POST
  }

  // obteniendo todas las fotos

  getPhotos(){
    return this.http.get<Photo[]>(this.URI);
  }

  getPhoto(id: string){
     return this.http.get<Photo>(`${this.URI}/${id}`);
  }

  // actualizando los datos // necesita el id y os campos a actualizar
  updatePhoto(id: string, title: string, description: string){
     return this.http.put(`${this.URI}/${id}`, {title, description});
  }

  // eliminando una foto
   deletePhoto(id: string){
     return this.http.delete(`${this.URI}/${id}`);
   }
}
