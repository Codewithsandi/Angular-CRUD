import { Component } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css'],
})
export class CreateStudentsComponent {
  constructor(private _studentService: StudentService) {}

  name!: string;
  email!: string;
  mobile!: string;
  errors: any = [];
  isLoading: boolean = false;
  loadingTitle: string = 'LoadingCustom';

  saveStudent() {
    this.isLoading = true;
    this.loadingTitle = 'SavingCustom';
    var inputData = {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
    };

    this._studentService.saveStudent(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'Response');
        this.isLoading = false;
        alert(res.data);
        this.name = '';
        this.email = '';
        this.mobile = '';
      },
      error: (err) => {
        console.log(this.errors, 'Errors');
        this.isLoading = false;
        this.errors = err.error.errors;
      },
    });
  }
}
