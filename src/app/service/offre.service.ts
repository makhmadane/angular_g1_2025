import { Injectable } from '@angular/core';
import { Offre } from '../model/offre';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  API_URL = "http://127.0.0.1:8000/api/offre";
  offres : Offre[] = [];
  constructor(private httpClient :HttpClient, private authService : AuthService) { }

  getAllOffre(): Observable<Offre[]>{
    return  this.httpClient.get<Offre[]>(this.API_URL );
  }

  addOffre(offre:Offre): Observable<Offre>{
    return  this.httpClient.post<Offre>(this.API_URL,offre  );
  }

  deleteOffre(id:number){
   return  this.httpClient.delete(this.API_URL+'/'+id);
  }
  
  getByIdOffre(id:number){
   return this.httpClient.get<Offre>(this.API_URL+'/'+id);
  }
  updateOffre(offre: Offre){
     return this.httpClient.put<Offre>(this.API_URL+'/'+offre.id,offre);
  }
}
