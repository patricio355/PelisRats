import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Punto1Service {
  constructor(private _http:HttpClient) { }

  getDatos(texto:string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'e1362786bdmsh6faebb9d2c83124p1e9925jsn0e80f91257b5',
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
      })
    }

    return this._http.get ("https://simple-youtube-search.p.rapidapi.com/search?query="+texto+"&type=video&safesearch=false" ,httpOption);

  }
}
