import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee-list/employee'; 
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-detail-component',
  templateUrl: './employee-detail-component.component.html',
  styleUrls: ['./employee-detail-component.component.css']
})
export class EmployeeDetailComponentComponent implements OnInit {
  employee: Employee | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id !== null) {
      this.employeeService.getEmployeeById(id)
        .subscribe(employee => this.employee = employee);
    }
  }

  saveEmployee(): void {
    console.log('Employee saved:', this.employee);
  }
}
