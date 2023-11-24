import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  pelis!:Array<Pelicula>;
  pelicula!:string;
nombre!:string;
  peliculas!: Array<any>;
p: Array<any>;
hola:string = "hola";
generos!:Array<string>;
peliDeCarrucel!:Pelicula;
constructor(private servicio : PeliculaService,private router: Router){
  this.pelis = new Array<Pelicula>();
  this.peliculas = new Array <Pelicula>();
 this.p = new Array <Pelicula>();
 this.obtenerPeli()
 this.generos = Array<string>();
this.obtenerGeneros();
this.peliDeCarrucel = new Pelicula();
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
         this.hola = nombre;
      }
       } 
    
       
      });
    }

// Trae las 20 peliculas mejor rankeadas
obtenerPeli(){
  this.servicio.obtener().subscribe(
    result=>{
      console.log(result)
      this.peliDeCarrucel.nombre =  result.results[1].original_title;
      this.peliDeCarrucel.imagen = "https://image.tmdb.org/t/p/w500" + result.results[1].backdrop_path;
      this.peliDeCarrucel.descripcion = result.results[1].description; 
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
