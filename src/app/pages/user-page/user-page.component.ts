import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent {
  userList: any[] = [];
  isLoading: boolean = false;
  headArray = [
    { Head: 'User Name', FieldName: 'name' },
    { Head: 'Email', FieldName: 'email' },
    { Head: 'Phone', FieldName: 'phone' },
    { Head: 'Website', 'FieldName': 'website' },
    { Head: 'Action', FieldName: '' },
  ];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.loadUsers();
  }

  editUser() {}
  deleteUser() {}

  loadUsers() {
    this.isLoading = true;
    this.http
      .get(`https://jsonplaceholder.typicode.com/users`)
      .subscribe((res: any) => {
        this.userList = res;
        this.isLoading = false;
      });
  }
}
