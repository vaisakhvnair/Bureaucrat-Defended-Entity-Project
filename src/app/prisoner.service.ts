import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message';
import { Pimg } from './pimg';
import { Prisoner } from './prisoner';

@Injectable({
  providedIn: 'root'
})
export class PrisonerService {

  private baseUrl : string = 'http://localhost:9005/Prisoner/rest/prison'; 
  constructor(private http:HttpClient) { }

  getAllPrisoner():Observable<Prisoner[]>{
    return this.http.get<Prisoner[]>(`${this.baseUrl}/list`); 
  }  
  deleteOnePrisoner(id:number):Observable<Message>{
    return this.http.delete<Message>(`${this.baseUrl}/delete/${id}`); 
  }  
  createPrisoner(pris:Prisoner):Observable<Message>{
    return this.http.post<Message>(`${this.baseUrl}/add`,pris); 
  }  
  getOnePrisoner(id:string):Observable<Prisoner>{
    return this.http.get<Prisoner>(`${this.baseUrl}/search/${id}`); 
  }  
  updatePrisoner(pris:Prisoner):Observable<Message>{
   return this.http.put<Message>(`${this.baseUrl}/update`,pris); 
  } 

  urlb="assets/db.json";
  getImg(){
    return this.http.get<Pimg[]>(this.urlb)
  }


}
