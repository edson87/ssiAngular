import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';
import {Employee} from '../shared/Employee';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  employees: Employee[];

  constructor(private serviceEmployee: EmployeeService) { }

  ngOnInit() {
    this.serviceEmployee.getEmployees().then(employees => this.employees = employees );
  }

}
