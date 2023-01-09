import { Component } from '@angular/core';
import { Pelicula } from '../../../interface/pelicula';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

  pelicula!: Pelicula;

  constructor(private route: ActivatedRoute) {

    /* Leer desde el localStorage */
    this.route.params.subscribe(params => {
      let id = params['id']; 
      let ghibli = JSON.parse(localStorage.getItem("peliculas")!);
          
      if(ghibli) {
        let peliculas = ghibli as Array<Pelicula>  
        let peliculasfiltro = peliculas.filter(pelicula => pelicula["id"] == id)    
        this.pelicula = peliculasfiltro[0];
      }
    });
  }
}
