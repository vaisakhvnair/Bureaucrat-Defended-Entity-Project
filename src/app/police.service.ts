import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message';
import { Police } from './police';
import { ReturnPoliceDutyv1 } from './return-police-dutyv1';
import { ReturnPolicePayV1 } from './return-police-pay-v1';
import { ReturnPolicePayv0 } from './return-police-payv0';

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
  getAllPolicePay():Observable<ReturnPolicePayv0[]>{ 
    return this.http.get<ReturnPolicePayv0[]>(`${this.baseUrl}/all`); 
  }  
  getAllPolicePayObj():Observable<object>{ 
    return this.http.get<object>(`${this.baseUrl}/listall`); 
  }
  getOnePolicePay(id:string):Observable<ReturnPolicePayV1>{ 
    return this.http.get<ReturnPolicePayV1>(`${this.baseUrl}/red/${id}`); 
  }
  getOnePoliceDuty(id:string):Observable<ReturnPoliceDutyv1>{ 
    return this.http.get<ReturnPoliceDutyv1>(`${this.baseUrl}/blue/${id}`); 
  }

}
