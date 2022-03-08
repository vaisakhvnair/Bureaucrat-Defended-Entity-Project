import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InOut } from './in-out';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class InOutService {

  private baseUrl : string = 'http://localhost:9004/In-Out/rest/inout'; 
  constructor(private http:HttpClient) { }

  getAllInOut():Observable<InOut[]>{ 
    return this.http.get<InOut[]>(`${this.baseUrl}/all`); 
  }  
  deleteOneInOut(id:number):Observable<Message>{ 
    return this.http.delete<Message>(`${this.baseUrl}/remove/${id}`); 
  }  
  createInOut(inout:InOut):Observable<Message>{ 
    return this.http.post<Message>(`${this.baseUrl}/save`,inout); 
  }  
  getOneInOut(id:string):Observable<InOut>{ 
    return this.http.get<InOut>(`${this.baseUrl}/one/${id}`); 
  }  
  updateInOut(inout:InOut):Observable<Message>{ 
   return this.http.put<Message>(`${this.baseUrl}/update`,inout); 
  } 

}
