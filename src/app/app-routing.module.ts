import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PeliculaComponent } from './compontens/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { EstrenoComponent } from './components/estreno/estreno.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }, // Redirección a 'inicio' cuando la ruta es vacía
  { path : 'inicio' , component : InicioComponent},
  { path : 'pelicula/:id' , component : PeliculaComponent},
  { path : 'buscar/:id' , component : BuscarComponent},
  { path : 'estrenos' , component : EstrenoComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
