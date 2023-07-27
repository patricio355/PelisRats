import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})

export class BuscarComponent {
  accion!:string;
  pelis!:Array<Pelicula>;
  pelicula!:string;
nombre!:string;
  peliculas!: Array<any>;
p: Array<any>;
hola:string = "hola";
constructor(private sanitizer: DomSanitizer,private servicio: PeliculaService, private router: Router, private activatedRoute: ActivatedRoute){
  this.pelis = new Array<Pelicula>();
  this.peliculas = new Array <Pelicula>();
 this.p = new Array <Pelicula>();
}
ngOnInit(): void {
  this.activatedRoute.params.subscribe(params => {
    if (params['id'] == "0") {
      this.accion = "new";
    } else {
      this.accion = "update";
      this.obtenerPelicula(params['id'])
    }
  });
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

    buscar(nombre:string){
      
      this.router.navigate(["buscar/", nombre])
    
  }
}
