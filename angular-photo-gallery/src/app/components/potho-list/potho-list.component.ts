import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


// importando el servicio para mostrar todas las fotos
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-potho-list',
  templateUrl: './potho-list.component.html',
  styleUrls: ['./potho-list.component.css']
})
export class PothoListComponent implements OnInit {

  photos = []; // arreglo vacío para después llenarlo con todas las imagenes que nos trae el servidor

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit(): void {
    this.photoService.getPhotos() // mandando a llamar a la función del service que nos trae todas las fotos del back
    .subscribe(
      res => { // res nos da un arreglo
        this.photos = res; // almacenando los datos que nos da el back a nuestro arreglo vacío
        console.log(res);
      },
        err => console.log(err) // mandando el error encontrado
    );
  }

  selectedCard(id: string){
    this.router.navigate(['/photos/', id]);
  }




}
