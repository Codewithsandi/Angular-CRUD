import { Component } from '@angular/core';
import {
  StudentService,
  StudentResponse,
} from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css'],
})
export class StudentPageComponent {
  constructor(private studentService: StudentService) {}
  isLoading: boolean = false;
  students!: StudentResponse[];
  ngOnInit() {
    this.getStudentsList();
  }
  getStudentsList() {
    this.isLoading = true;
    this.studentService.getStudents().subscribe((res) => {
      this.students = res.data;
      console.log(res);
      this.isLoading = false;
    });
  }
}
