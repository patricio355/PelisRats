import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {
  constructor(private _http:HttpClient) { }

  getDatos(nombre : string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'd351112afemsha1e8b74bcc13a95p144513jsn640a2e265989',
        'X-RapidAPI-Host': 'amazon-web-scraping-api.p.rapidapi.com'
      })
    }

    return this._http.get ("https://amazon-web-scraping-api.p.rapidapi.com/products/search?criteria="+nombre+"&page=1&countryCode=US&languageCode=ES" ,httpOption);

  }



  getOtro(hola : string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'd351112afemsha1e8b74bcc13a95p144513jsn640a2e265989',
		'X-RapidAPI-Host': 'amazon-web-scraping-api.p.rapidapi.com'
      })
    }

    return this._http.get ("https://amazon-web-scraping-api.p.rapidapi.com/products/"+hola+"/reviews?countryCode=US&languageCode=EN",httpOption);

  }
  
}
