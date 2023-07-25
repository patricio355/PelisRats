import { HttpHeaders, HttpParams , HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private _http: HttpClient) { }

  
    obtenerReservas(pelicula: string): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'X-RapidAPI-Key': 'd351112afemsha1e8b74bcc13a95p144513jsn640a2e265989',
		      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }),
        params: new HttpParams()
      }
      return this._http.get("https://online-movie-database.p.rapidapi.com/auto-complete?q="+ pelicula, httpOptions);
    }

    obtenerArg(): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'X-RapidAPI-Key': 'd351112afemsha1e8b74bcc13a95p144513jsn640a2e265989',
		      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }),
        params: new HttpParams()
      }
      return this._http.get("https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies?currentCountry=AR", httpOptions);
    }

 obtenerPorId(id : string): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'd351112afemsha1e8b74bcc13a95p144513jsn640a2e265989',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }),
    params: new HttpParams()
  }
  return this._http.get("https://online-movie-database.p.rapidapi.com/title/get-details?tconst="+ id, httpOptions);
}
    
}
