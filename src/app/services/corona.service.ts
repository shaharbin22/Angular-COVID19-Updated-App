import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from '../core/report';


@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http:HttpClient) { }


  getCountries():Observable<Report>{
    console.log()

    const url = "https://api.covid19api.com/countries";
    return this.http.get<Report>(url)

  }

  getCoronaRealTimeData(country):Observable<Report>{
    const url = "https://api.covid19api.com/total/dayone/country/" + country;
    return this.http.get<Report>(url)

    
    
  }

}

