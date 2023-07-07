import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SegundoService {
  constructor(private _http:HttpClient) { }

  getDatos(lat:number , long :number):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'd351112afemsha1e8b74bcc13a95p144513jsn640a2e265989',
		'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
      })
    }

    return this._http.get ("https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat="+lat+"&lng="+long ,httpOption);

  }
}

