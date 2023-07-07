import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrimeroService {
  constructor(private _http:HttpClient) { }

  getIP(ip : string):Observable<any>{
    let checked = "checked";
    let httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'd351112afemsha1e8b74bcc13a95p144513jsn640a2e265989',
        'X-RapidAPI-Host': 'community-neutrino-ip-info.p.rapidapi.com'
      }),
      }
      const body = new HttpParams()
      .set('ip', ip)
      .set('reverse-lookup',checked)


      return this._http.post("https://community-neutrino-ip-info.p.rapidapi.com/ip-info",body, httpOptions)
}
}