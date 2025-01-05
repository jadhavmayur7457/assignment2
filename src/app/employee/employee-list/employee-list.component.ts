import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { EmpserviceService } from 'src/app/service/empservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {

    DataEmployee:Employee[]=[]

  constructor(private http:EmpserviceService ,private router:Router){

  };

  ngOnInit(){
    this.empdata()
  }

  empdata() {
  this.http.getdata().subscribe({
    next:(resp:any)=>{
      this.DataEmployee=resp;
      console.log(this.DataEmployee,"aale ka")
    }
  })
  }

  onSelect(employee:Employee){
  this.router.navigate(['/empdetail',employee.name])
  }
}
