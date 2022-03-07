import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message';
import { Police } from './police';

@Injectable({
  providedIn: 'root'
})
export class PoliceService {

 
  private baseUrl : string = 'http://localhost:9001/police/rest/police'; 
  constructor(private http:HttpClient) { }

  getAllPolice():Observable<Police[]>{ 
    return this.http.get<Police[]>(`${this.baseUrl}/all`); 
  }  
  deleteOnePolice(id:number):Observable<Message>{ 
    return this.http.delete<Message>(`${this.baseUrl}/remove/${id}`); 
  }  
  createPolice(police:Police):Observable<Message>{ 
    return this.http.post<Message>(`${this.baseUrl}/save`,police); 
  }  
  getOnePolice(id:string):Observable<Police>{ 
    return this.http.get<Police>(`${this.baseUrl}/one/${id}`); 
  }  
  updatePolice(police:Police):Observable<Message>{ 
   return this.http.put<Message>(`${this.baseUrl}/update`,police); 
  } 



}
