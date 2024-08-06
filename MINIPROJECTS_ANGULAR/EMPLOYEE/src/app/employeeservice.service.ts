import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './modal/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  url:string;
  employee:Employee;
  employeeArr:Employee[];
  constructor(private http:HttpClient) { 
    this.employee=new Employee();
    this.url="http://localhost:3004/employees";
    this.employeeArr=[];
  }

  insertEmployee(employee : Employee)
  {
      this.http.post<Employee>(this.url,employee).subscribe();
      return "Data inserted successfully";
  }
  updateEmployee(employee : Employee)
  {
      this.http.put<Employee>(this.url+"/"+employee.id,employee).subscribe();
      return "Data updated successfully";
  }
  deleteEmployee(empId:number)
  {
    this.http.delete<Employee>(this.url+"/"+empId).subscribe();
    return "Data deleted successfully";
  }
  findEmployee(empId:number){
    this.http.get<Employee>(this.url+"/"+empId).subscribe(data=>this.employee=data);
    return this.employee;
  }
  findAllEmployee(){
    this.http.get<Employee[]>(this.url).subscribe(data=>this.employeeArr=data);
    return this.employeeArr;
  }
}
