import { Component } from '@angular/core';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-newappoinment',
  templateUrl: './newappoinment.component.html',
  styleUrls: ['./newappoinment.component.css']
})
export class NewappoinmentComponent {

  constructor(private service : HospitalService){}

newAppoinmentObj :any ={
  "name": "",
  "mobileNo": "",
  "city": "",
  "age": 0,
  "gender": "",
  "appointmentDate": "",
  "appointmentTime": "",
  "isFirstVisit": true,
  "naration": ""
}

on_New_Appoinment()
{
  this.service.addNewAppoinment(this.newAppoinmentObj).subscribe((res:any)=>
  {
    if(res.result)
    {
      alert('appoinment schaduled!')
    }
    else
    {
      alert('Something Went Wrong !')
    }
  },error=>
  {
    alert('API error / Check form')
  })
}

}
