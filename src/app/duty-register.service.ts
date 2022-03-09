import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DutyRegister } from './duty-register';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class DutyRegisterService {

  private baseUrl : string = 'http://localhost:9007/Duty-Reg/rest/duty'; 
  constructor(private http:HttpClient) { }

  getAllDutyRegister():Observable<DutyRegister[]>{ 
    return this.http.get<DutyRegister[]>(`${this.baseUrl}/all`); 
  }  
  deleteOneDutyRegister(id:number):Observable<Message>{ 
    return this.http.delete<Message>(`${this.baseUrl}/remove/${id}`); 
  }  
  createDutyRegister(police:DutyRegister):Observable<Message>{ 
    return this.http.post<Message>(`${this.baseUrl}/save`,police); 
  }  
  getOneDutyRegister(id:string):Observable<DutyRegister>{ 
    return this.http.get<DutyRegister>(`${this.baseUrl}/one/${id}`); 
  }  
  updateDutyRegister(police:DutyRegister):Observable<Message>{ 
   return this.http.put<Message>(`${this.baseUrl}/update`,police); 
  } 


}
