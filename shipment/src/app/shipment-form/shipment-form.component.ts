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
  fg!: FormGroup
  shipmentStatus=['Pending','In-Transit','Delivered'];
  constructor(private ss: ShipmentService,private fb: FormBuilder,private router: Router){}
  
 
  ngOnInit(): void {

    this.fg = this.fb.group({

      sender: ['',Validators.required],
      receiver:['',[Validators.required,Validators.min(3)]],
      origin:['',[Validators.required,Validators.min(1)]],
      destination:['',[Validators.required,Validators.min(2)]],
      status:[this.shipmentStatus],
      expectedDelivery:['',[Validators.required,this.dateValidator]]
    })
  }
  
  
    dateValidator(control: AbstractControl): ValidationErrors | null
    {

      const datepattern = /^\d{4}-\d{2}-\d{2}$/;

      if(!datepattern.test(control.value))
      {
        return{invalid: true};
      }
      return null;

    }



    addform()
    {

    if(this.fg.valid)
    {
      this.ss.addShipment(this.fg.value).subscribe(()=>{
        this.router.navigate([`/`]);
      })
    }







  
    }
    
  

}
