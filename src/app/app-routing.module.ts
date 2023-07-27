import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PeliculaComponent } from './compontens/pelicula/pelicula.component';

const routes: Routes = [
  { path : 'inicio' , component : InicioComponent},
  { path : 'pelicula/:id' , component : PeliculaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
