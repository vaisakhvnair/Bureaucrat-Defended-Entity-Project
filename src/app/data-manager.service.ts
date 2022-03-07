import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataManager } from './data-manager';
import { Message } from './message';

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

}
