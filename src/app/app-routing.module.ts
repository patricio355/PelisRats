import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonComponent } from './components/amazon/amazon.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PeliculaComponent } from './compontens/pelicula/pelicula.component';

const routes: Routes = [
  { path : 'amazon' , component : AmazonComponent},
  { path : 'inicio' , component : InicioComponent},
  { path : 'pelicula/:id' , component : PeliculaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
