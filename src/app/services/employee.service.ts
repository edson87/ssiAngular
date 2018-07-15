import { Injectable } from '@angular/core';
import {Employee} from '../shared/employee';
import {EMPLOYEE} from '../shared/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[] {
    return EMPLOYEE;
  }

  getEmployee(id: number): Employee {
    return EMPLOYEE.filter((employee) => (employee.id === id))[0];
  }

  getFeaturedEmployee(): Employee {
    return EMPLOYEE.filter((employee) => employee.featured)[0];
  }
}
