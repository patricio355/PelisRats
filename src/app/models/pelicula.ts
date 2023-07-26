import { SafeResourceUrl } from "@angular/platform-browser";

export class Pelicula {
    nombre!: string;
    imagen!: string;
    id!:string;
    adult!: boolean
    imagenGrande!:string
    presupuesto!:number
    descripcion!:string
    lenguaje!:string
    popularidad!:number
    video!:SafeResourceUrl

}
