import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataManager } from './data-manager';
import { Message } from './message';
import { ReturnDataManagerDutyv1 } from './return-data-manager-dutyv1';
import { ReturnDataManagerPayV1 } from './return-data-manager-pay-v1';
import { ReturnDataManagerPayv0 } from './return-data-manager-payv0';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  private baseUrl : string = 'http://localhost:9002/data-manager/rest/data'; 
  constructor(private http:HttpClient) { }

  getAllDataManager():Observable<DataManager[]>{ 
    return this.http.get<DataManager[]>(`${this.baseUrl}/all`); 
  }  
  deleteOneDataManager(id:number):Observable<Message>{ 
    return this.http.delete<Message>(`${this.baseUrl}/remove/${id}`); 
  }  
  createDataManager(dm:DataManager):Observable<Message>{ 
    return this.http.post<Message>(`${this.baseUrl}/save`,dm); 
  }  
  getOneDataManager(id:String):Observable<DataManager>{ 
    return this.http.get<DataManager>(`${this.baseUrl}/one/${id}`); 
  }  
  updateDataManager(dm:DataManager):Observable<Message>{ 
   return this.http.put<Message>(`${this.baseUrl}/update`,dm); 
  } 
  getAllPolicePay():Observable<ReturnDataManagerPayv0[]>{ 
    return this.http.get<ReturnDataManagerPayv0[]>(`${this.baseUrl}/all`); 
  }  
  getAllPolicePayObj():Observable<object>{ 
    return this.http.get<object>(`${this.baseUrl}/listall`); 
  }
  getOnePolicePay(id:string):Observable<ReturnDataManagerPayV1>{ 
    return this.http.get<ReturnDataManagerPayV1>(`${this.baseUrl}/red/${id}`); 
  }
  getOnePoliceDuty(id:string):Observable<ReturnDataManagerDutyv1>{ 
    return this.http.get<ReturnDataManagerDutyv1>(`${this.baseUrl}/blue/${id}`); 
  }

}
