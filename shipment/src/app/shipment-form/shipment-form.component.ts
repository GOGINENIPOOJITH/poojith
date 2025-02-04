import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../shipment.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.css']
})
export class ShipmentFormComponent implements OnInit
 {
  addForm!: FormGroup
  shipmentStatus=['Pending','In-Transit','Delivered'];
  successMsg:boolean=false;
  constructor(private ss: ShipmentService,private fb: FormBuilder,private router: Router){}
  
 
  ngOnInit(): void {

    this.addForm = this.fb.group({

      sender: ['',Validators.required],
      receiver:['',[Validators.required,Validators.minLength(3)]],
      origin:['',[Validators.required,Validators.minLength(1)]],
      destination:['',[Validators.required,Validators.minLength(2)]],
      status:[this.shipmentStatus],
      expectedDelivery:['',[Validators.required,this.dateValidator]]
    })
  }
  
  
    dateValidator(control: AbstractControl): ValidationErrors | null
    {

      const datepattern = /^\d{4}-\d{2}-\d{2}$/;

      if(!datepattern.test(control.value))
      {
        return{invalids: true};
      }
      return null;

    }



    OnSubmit()
    {

    if(this.addForm.valid)
    {
      this.ss.addShipment(this.addForm.value).subscribe(()=>{
        this.successMsg=true;
        
      })
      this.router.navigate(['/list']);
    }







  
    }
    
  

}
