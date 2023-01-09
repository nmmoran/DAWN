import { Component } from '@angular/core';
import { Pelicula } from '../../../interface/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  peliculas!: Pelicula[];
  constructor() {

    /* Leer desde el localStorage */
    let ghibli = JSON.parse(localStorage.getItem("peliculas")!);
      
    if(ghibli) {
      this.peliculas = ghibli as Pelicula[]
    }

  }

}
