import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient) { }

  saveStudent(inputData:object){
    return this._httpClient.post(`http://127.0.0.1:8000/api/insert`,inputData)
  }

}
