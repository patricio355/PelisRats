import { Component } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';


@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {
peliculas!: Array<any>;
p: Array<any>;
nombre!: string
  constructor( private servicio: PeliculaService){
 this.peliculas = new Array <Pelicula>();
 this.p = new Array <Pelicula>();
  }

  obtenerPelicula(nombre: string){
    this.servicio.obtenerReservas(nombre).subscribe(
      result=>{
        this.peliculas = new Array <Pelicula>();
        for(let i=0 ; i <=3 ;i++){
            let unaPelicula = new Pelicula();
        unaPelicula.imagen = result.d[i].i.imageUrl; 
        unaPelicula.nombre = result.d[i].l; 
          this.peliculas.push(unaPelicula)
          unaPelicula = new Pelicula();
        }
      
         
        });
      }
    

        
  }




