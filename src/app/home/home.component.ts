import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';
import {Item} from '../shared/item';
import {Employee} from '../shared/Employee';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  item: Item;
  employee: Employee;

  constructor(private itemservice: ItemService,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.itemservice.getFeaturedItem().then(item => this.item = item );
    this.employeeService.getFeaturedEmployee().then(employee => this.employee = employee );
  }


}
