import { Component } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
generos!:Array<string>;

constructor(private servicio: PeliculaService){
this.generos = Array<string>();
this.obtenerGeneros();
console.log(this.generos)
}


obtenerGeneros(){
  this.servicio.obtenerGeneros("hoal").subscribe(
    result=>{
      for(let i=0 ; i <=result.genres.length -1 ;i++){
      this.generos.push(result.genres[i].name)
      }
    },
    error=>{

    }
  )
}
}
