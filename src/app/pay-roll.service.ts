import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message';
import { PayRoll } from './pay-roll';

@Injectable({
  providedIn: 'root'
})
export class PayRollService {

  private baseUrl : string = 'http://localhost:9006/Pay-roll/rest/pay'; 
  constructor(private http:HttpClient) { }

  getAllPayRoll():Observable<PayRoll[]>{ 
    return this.http.get<PayRoll[]>(`${this.baseUrl}/all`); 
  }  
  deleteOnePayRoll(id:number):Observable<Message>{ 
    return this.http.delete<Message>(`${this.baseUrl}/remove/${id}`); 
  }  
  createPayRoll(police:PayRoll):Observable<Message>{ 
    return this.http.post<Message>(`${this.baseUrl}/save`,police); 
  }  
  getOnePayRoll(id:string):Observable<PayRoll>{ 
    return this.http.get<PayRoll>(`${this.baseUrl}/one/${id}`); 
  }  
  updatePayRoll(police:PayRoll):Observable<Message>{ 
   return this.http.put<Message>(`${this.baseUrl}/update`,police); 
  } 


}
