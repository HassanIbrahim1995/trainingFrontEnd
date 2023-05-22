import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  page!: number;
  perPage = 5; // Default value

  constructor(private http: HttpClient, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.page = 1; // Set the initial value
    this.fetchEmployees(1, 15);
  }

  fetchEmployees(page: number, perPage: number): void {
    this.employeeService.fetchEmployees(page, perPage)
      .subscribe(
        employees => {
          this.employees = employees;
        },
        error => {
          console.log('Error:', error);
        }
      );
  }

  navigateToEmployeeDetail(employeeId: number): void {
    this.router.navigate(['employees', employeeId]);
  }

  onPageLinkClick(newPage: number): void {
    this.page = newPage;
    this.fetchEmployees(this.page, this.perPage);
  }
}
