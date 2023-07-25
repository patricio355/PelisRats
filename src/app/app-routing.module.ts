import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonComponent } from './components/amazon/amazon.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path : 'amazon' , component : AmazonComponent},
  { path : 'inicio' , component : InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
