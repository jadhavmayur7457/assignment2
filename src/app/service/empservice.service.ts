import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Employee } from '../interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(private http:HttpClient) { }

  baseUrl:string="http://localhost:3000/employees"
  // private apiUrl = 


  getdata():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl)
  }
}
