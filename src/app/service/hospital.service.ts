import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  api : string = 'https://freeapi.miniprojectideas.com/api/HospitalAppointment/'
  constructor(private http : HttpClient) { }

  addNewAppoinment(obj : any):Observable<any>
  {
    return this.http.post(this.api+'AddNewAppointment', obj)
  } 
}
