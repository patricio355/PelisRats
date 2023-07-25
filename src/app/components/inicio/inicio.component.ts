import { Component } from '@angular/core';
import { timeout } from 'rxjs';
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
constructor(private servicio : PeliculaService){
  this.pelis = new Array<Pelicula>();
  this.obtenerArg()
}

// obtenerArg(){
//   this.servicio.obtenerArg().subscribe(
//     result=>{
//       for(let i=0 ;i<=30 ;i++){
//         let pelicu = new Pelicula();
//         this.pelicula= result[i];
//         pelicu.nombre = this.pelicula.substring(7,this.pelicula.length - 1)
//         console.log(pelicu.nombre)
//         this.servicio.obtenerPorId(pelicu.nombre).subscribe(
//           result =>{
//             console.log(result)
//             pelicu.nombre = result.title
//             pelicu.imagen = result.image.url
//             this.pelis.push(pelicu);
            
            
//           }
//         )
//       }
      
//     }
//   )
// }
obtenerArg() {
  this.servicio.obtenerArg().subscribe(
    (result: any[]) => {
      const delayBetweenRequests = 200; // Milisegundos (1000 ms = 1 segundo)
      let index = 0;

      const makeRequest = () => {
        if (index >= 12) {
          return; // Ya se hicieron las 30 solicitudes, salir
        }

        const pelicu = new Pelicula();
        this.pelicula = result[index];
        pelicu.nombre = this.pelicula.substring(7, this.pelicula.length - 1);
        console.log(pelicu.nombre);

        this.servicio.obtenerPorId(pelicu.nombre).subscribe(
          (result) => {
            console.log(result);
            pelicu.nombre = result.title;
            pelicu.imagen = result.image.url;
            this.pelis.push(pelicu);
          },
          (error) => {
            console.error(error); // Manejo de errores, si es necesario
          },
          () => {
            // Esta función se llama cuando la solicitud ha finalizado,
            // aquí es donde podemos programar la próxima solicitud
            index++;
            setTimeout(makeRequest, delayBetweenRequests);
          }
        );
      };

      // Iniciar la primera solicitud
      makeRequest();
    },
    (error) => {
      console.error(error); // Manejo de errores, si es necesario
    }
  );
}
}
