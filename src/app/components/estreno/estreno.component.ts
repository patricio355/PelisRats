import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-estreno',
  templateUrl: './estreno.component.html',
  styleUrls: ['./estreno.component.css']
})
export class EstrenoComponent {
  pelis!:Array<Pelicula>;
  pelicula!:string;
nombre!:string;
  peliculas!: Array<any>;
p: Array<any>;

constructor(private servicio : PeliculaService,private router: Router){
  this.pelis = new Array<Pelicula>();
  this.peliculas = new Array <Pelicula>();
 this.p = new Array <Pelicula>();
 this.obtenerEstrenos()
}

obtenerPelicula(nombre: string){
  this.servicio.obtenerReservas(nombre).subscribe(
    result=>{
      this.peliculas = new Array <Pelicula>();
      for(let i=0 ; i <=10 ;i++){
          let unaPelicula = new Pelicula();
     
      if(result.results[i].poster_path == null){
        unaPelicula = new Pelicula();
      }else{
        unaPelicula.nombre = result.results[i].original_title; 
        unaPelicula.imagen = "https://image.tmdb.org/t/p/w500" + result.results[i].poster_path;
        unaPelicula.id = result.results[i].id
         this.peliculas.push(unaPelicula)
         unaPelicula = new Pelicula();
       
      }
       } 
    
       
      });
    }

// Trae las 20 peliculas mejor rankeadas
obtenerEstrenos(){
  this.servicio.obtenerEstrenos("hola").subscribe(
    result=>{
      console.log(result)
      for(let i=0 ; i <=19 ;i++){
          let unaPelicula = new Pelicula();
      unaPelicula.imagen = "https://image.tmdb.org/t/p/w500" +result.results[i].poster_path ; 
      unaPelicula.nombre = result.results[i].title; 
      unaPelicula.id = result.results[i].id
        this.peliculas.push(unaPelicula)
        unaPelicula = new Pelicula();
      }
    
       
      });
    }


    buscar(nombre:string){
      
        this.router.navigate(["buscar/", nombre])
      
    }
}

