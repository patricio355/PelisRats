import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
accion!:string;
pelicula!: Pelicula;
id!: string
unsafeUrl: string = '...'; 
constructor(private sanitizer: DomSanitizer,private servicio: PeliculaService, private router: Router, private activatedRoute: ActivatedRoute){
this.pelicula = new Pelicula();

}
get safeUrl() {
  return this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeUrl);
}


ngOnInit(): void {
  this.activatedRoute.params.subscribe(params => {
    if (params['id'] == "0") {
      this.accion = "new";
    } else {
      this.accion = "update";
      this.cargarPelicula(params['id'])
      this.id= params['id']
      console.log(this.id)
    }
  });
}

cargarPelicula(id: string) {
  this.servicio.obtenerPeliPorId(id).subscribe(
    result => {
      this.obtenerTrailer(id)
      this.pelicula.nombre= result.original_title
      this.pelicula.imagen= "https://image.tmdb.org/t/p/w500" + result.poster_path
      this.pelicula.adult =  result.adult
      this.pelicula.descripcion = result.overview
      this.pelicula.imagenGrande = "https://image.tmdb.org/t/p/w500" + result.backdrop_path
      this.pelicula.lenguaje = result.original_language
      this.pelicula.popularidad = result.popularity
       this.pelicula.presupuesto = result.budget
     
    },
    

    
  )
}


obtenerTrailer(id:string){
  this.servicio.obtenerTrailer(id).subscribe(
    result=>{
      console.log(result.results[0].key)
      this.pelicula.video = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + result.results[0].key);
      
      console.log(this.pelicula.video)
    }
  )
}
}
