import { Injectable } from '@angular/core';
import {Employee} from '../shared/employee';
import {EMPLOYEE} from '../shared/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Promise<Employee[]> {
    return Promise.resolve(EMPLOYEE);
  }

  getEmployee(id: number): Promise<Employee> {
    return Promise.resolve(EMPLOYEE.filter((employee) => (employee.id === id))[0]);
  }

  getFeaturedEmployee(): Promise<Employee> {
    return Promise.resolve(EMPLOYEE.filter((employee) => employee.featured)[0]);
  }
}
