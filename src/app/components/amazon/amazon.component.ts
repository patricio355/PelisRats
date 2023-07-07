import { Component } from '@angular/core';
import { AmazonService } from 'src/app/services/amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {
  productos! : Array<any>;
  nombre!: string;
  asin!:string;
  review! : string ;
  constructor (private servicio : AmazonService ){
    this.productos=new Array<any>();
  }

  getOp(asin : string){
    this.servicio.getOtro(this.asin).subscribe(
      result=>{
        this.asin = this.productos[0].asin;
        console.log(result.reviews[0].rating);
        
      },
      error=>{

      }

    )
  }

  obtenerProducto(){

    for(let i=0;i<=3;i++){

    this.servicio.getDatos(this.nombre).subscribe(
      result => {
        this.productos.push({nombre : result.products[i].name , img : result.products[i].image.url, asin : result.products[i].asin });
    
      }
    )
}
  }

  
vaciarArreglo(){
  this.productos.splice(0, this.productos.length);
}

}



