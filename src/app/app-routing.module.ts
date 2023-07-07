import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonComponent } from './components/amazon/amazon.component';

const routes: Routes = [
  { path : 'amazon' , component : AmazonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
