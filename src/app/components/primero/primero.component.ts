import { Component } from '@angular/core';
import { PrimeroService } from 'src/app/services/primero.service';
import { SegundoService } from 'src/app/services/segundo.service';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent {
pais! :string;
ciudad!:string;
fechaDelLugar!: string;
horaDelLugar!: string;
zonaHoraria!:string;
link!:string;
lat!:number ;
long!:number;
calle!:string;
ip!:string;
 constructor (private servicio: PrimeroService , private servicio2 : SegundoService){

 }

 obtenerIp(){
  this.servicio.getIP(this.ip).subscribe(
    result=>{
      this.pais = result.country;
      this.long = result.longitude;
      this.lat = result.latitude;
      this.ciudad = result.city;
      this.fechaDelLugar = result.timezone.date;
      this.horaDelLugar = result.timezone.time;
      console.log(result)
    },
    error=>{

    }

  )
 }

 obtenerDireccion(){
this.servicio2.getDatos(this.lat,this.long).subscribe(
  result=>{
    console.log(result.Results[0].address)
  },
  error=>{

  }


)
 }

}
