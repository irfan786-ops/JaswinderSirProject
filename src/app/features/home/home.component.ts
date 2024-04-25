import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: string = 'Uday';
  age: number = 30;
  month: any = "10-04-24";
  names: string[] = ["Pankaj", "Neeraj", "Poonam"];
  empCodes: number[] = [1, 2, 3, 4, 5];
  employees: any[] = [1, "two", true, { name: "Pankaj" }];
  isActive: boolean = true; 
  testFunc(){
      enum Department {   
        Development,   
        Sales,  
        HR
        }
        let selectedDepartment: Department = Department.Sales;
    }
}
