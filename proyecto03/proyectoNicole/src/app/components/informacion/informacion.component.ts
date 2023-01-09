import { Component } from '@angular/core';
import { Pelicula } from '../../../interface/pelicula';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
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
