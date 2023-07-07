import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Punto1Service } from 'src/app/services/punto1.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component {
text!:string;
temas!:Array<any>;
lo!:number;
  constructor( private servicio : Punto1Service){
    this.text = '';
    this.temas = Array<any>();

  }

obtenerDatos(texto: string){
  this.vaciarArreglo();
  this.servicio.getDatos(texto).subscribe(
result =>{
for(let i = 0 ; i <= 3 ; i++){
  this.temas.push({icono: result.results[i].channel.icon,titulo : result.results[i].title,enlace : result.results[i].url,canal : result.results[i].channel.name,id:result.results[i].id});

}
this.lo = this.temas.length;


},
error =>{

}

    )
  }


vaciarArreglo(){
  this.temas.splice(0, this.temas.length);
}

}
