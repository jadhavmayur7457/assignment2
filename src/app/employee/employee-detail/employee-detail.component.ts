import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { EmpserviceService } from 'src/app/service/empservice.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {



  selectedemployee:Employee | undefined


  constructor(private route:ActivatedRoute,private employee:EmpserviceService){

  }
 
   ngOnInit(){
    this.empoyeedateil()
   }


  empoyeedateil() {
    const employeeName=this.route.snapshot.paramMap.get('name');

    if(employeeName){
      this.employee.getdata().subscribe({
        next:(employees:Employee[])=>{
           this.selectedemployee=employees.find(emp =>emp.name === employeeName)
        },
        error:(err)=>{
          console.log("fetch the employee dataa",err)
        }
      })
    }
  }

}
