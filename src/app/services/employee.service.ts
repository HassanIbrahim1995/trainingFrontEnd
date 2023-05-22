import { Injectable } from '@angular/core';
import { Employee } from '../employee-list/employee'; 
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8080/employees'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getEmployeeById(id: number): Observable<Employee> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Employee>(url);
  }

  getAllEmployees(page: number, perPage: number): Observable<Employee[]> {
    const params = { page: String(page), perPage: String(perPage) };
    return this.http.get<Employee[]>(this.apiUrl, { params });
  }

  fetchEmployees(page: number, perPage: number): Observable<Employee[]> {
    const url = `http://localhost:8080/employees?page=${page}&perPage=${perPage}`;
  
    return this.http.get<any>(url).pipe(
      map(data => {
        return data.map((employeeData: any) => {
          const employee: Employee = {
            id: employeeData.employeeId,
            firstName: employeeData.firstName,
            lastName: employeeData.lastName,
            birthday: employeeData.birthday,
            age: employeeData.age,
            phoneNumber: employeeData.phoneNumber,
            department: this.capitalizeFirstLetter(employeeData.department),
            addresses: employeeData.addresses
          };
          return employee;
        });
      }),
      catchError(error => {
        console.error('Failed to fetch employees:', error);
        throw error;
      })
    );
  }

  capitalizeFirstLetter(value: string): string {
    if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    return value;
  }  
}
