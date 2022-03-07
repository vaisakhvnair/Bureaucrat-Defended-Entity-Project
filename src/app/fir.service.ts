import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FIR } from './fir';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class FIRService {

  private baseUrl : string = 'http://localhost:9003/FIR/rest/fir'; 
  constructor(private http:HttpClient) { }

  getAllFIR():Observable<FIR[]>{ 
    return this.http.get<FIR[]>(`${this.baseUrl}/all`); 
  }  
  deleteOneFIR(id:number):Observable<Message>{ 
    return this.http.delete<Message>(`${this.baseUrl}/remove/${id}`); 
  }  
  createFIR(fir:FIR):Observable<Message>{ 
    return this.http.post<Message>(`${this.baseUrl}/save`,fir); 
  }  
  getOneFIR(id:string):Observable<FIR>{ 
    return this.http.get<FIR>(`${this.baseUrl}/one/${id}`); 
  }  
  updateFIR(fir:FIR):Observable<Message>{ 
   return this.http.put<Message>(`${this.baseUrl}/update`,fir); 
  } 

}
