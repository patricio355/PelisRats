import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { PrimeroComponent } from './components/primero/primero.component';
import { AmazonComponent } from './components/amazon/amazon.component';

const routes: Routes = [
  { path : 'inicio' , component : InicioComponent},
  { path : 'punto1' , component : Punto1Component},
  { path : 'primero' , component : PrimeroComponent},
  { path : 'amazon' , component : AmazonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
