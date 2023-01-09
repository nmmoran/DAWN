import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './components/splash/splash.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { InformacionComponent } from './components/informacion/informacion.component';
const routes: Routes = [
  { path: "splash", component: SplashComponent },
    { path: "peliculas", component: PeliculasComponent },
    { path: "pelicula/:id", component: PeliculaComponent },
    { path: "informacion", component: InformacionComponent },
    { path: "informacion/:id", component: InformacionComponent },
    { path: "**", redirectTo: "splash"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
