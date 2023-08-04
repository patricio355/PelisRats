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
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjY5NzFmOTRkZWFkNTI0ZDg3YzUxMTI0MmNiYjZmZSIsInN1YiI6IjY0YzA0MDhkMTdjNDQzMDEzZGEzYWQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DAroTmWi_w_XfNhuDyiDyJCNzAqDD6tunJOW4hQFFsc'
       
        }),
        params: new HttpParams()
      }
      return this._http.get("https://api.themoviedb.org/3/search/movie?query="+ pelicula + "&language=es", httpOptions);
    }

    obtenerPeliPorId(id : string): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjY5NzFmOTRkZWFkNTI0ZDg3YzUxMTI0MmNiYjZmZSIsInN1YiI6IjY0YzA0MDhkMTdjNDQzMDEzZGEzYWQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DAroTmWi_w_XfNhuDyiDyJCNzAqDD6tunJOW4hQFFsc'
        
        }),
        params: new HttpParams()
      }
      return this._http.get("https://api.themoviedb.org/3/movie/"+ id  + "?language=es" , httpOptions);
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
    
obtener(): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjY5NzFmOTRkZWFkNTI0ZDg3YzUxMTI0MmNiYjZmZSIsInN1YiI6IjY0YzA0MDhkMTdjNDQzMDEzZGEzYWQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DAroTmWi_w_XfNhuDyiDyJCNzAqDD6tunJOW4hQFFsc'
   
    }),
    params: new HttpParams()
  }
  return this._http.get("https://api.themoviedb.org/3/discover/movie?language=es", httpOptions);
}
    
obtenerTrailer(id:string): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjY5NzFmOTRkZWFkNTI0ZDg3YzUxMTI0MmNiYjZmZSIsInN1YiI6IjY0YzA0MDhkMTdjNDQzMDEzZGEzYWQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DAroTmWi_w_XfNhuDyiDyJCNzAqDD6tunJOW4hQFFsc'
   
    }),
    params: new HttpParams()
  }
  return this._http.get("https://api.themoviedb.org/3/movie/"+id+"/videos", httpOptions);
}

getTraduccion(texto : string):Observable<any>{
  let httpOption = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'e1362786bdmsh6faebb9d2c83124p1e9925jsn0e80f91257b5',
      'X-RapidAPI-Host': 'translate287.p.rapidapi.com'
    })

  }


  return this._http.get("https://translate287.p.rapidapi.com/translate/?text="+texto+"&dest=es&src=en", httpOption);
}



obtenerEstrenos(id:string): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjY5NzFmOTRkZWFkNTI0ZDg3YzUxMTI0MmNiYjZmZSIsInN1YiI6IjY0YzA0MDhkMTdjNDQzMDEzZGEzYWQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DAroTmWi_w_XfNhuDyiDyJCNzAqDD6tunJOW4hQFFsc'
   
    }),
    params: new HttpParams()
  }
  return this._http.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc", httpOptions);
}


obtenerGeneros(id:string): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjY5NzFmOTRkZWFkNTI0ZDg3YzUxMTI0MmNiYjZmZSIsInN1YiI6IjY0YzA0MDhkMTdjNDQzMDEzZGEzYWQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DAroTmWi_w_XfNhuDyiDyJCNzAqDD6tunJOW4hQFFsc'
   
    }),
    params: new HttpParams()
  }
  return this._http.get("https://api.themoviedb.org/3/genre/movie/list?language=es", httpOptions);
}

}