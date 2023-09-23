import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface StudentResponse {
  id: number;
  name: string;
  email: string;
  mobile: string;
  created_at: string;
}

export interface StudentResponseType {
  code: number;
  data: StudentResponse[];
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private _httpClient: HttpClient) {}
  getStudents() {
    return this._httpClient.get<StudentResponseType>(
      `http://127.0.0.1:8000/api/view`
    );
  }
  saveStudent(inputData: object) {
    return this._httpClient.post(`http://127.0.0.1:8000/api/insert`, inputData);
  }
}
