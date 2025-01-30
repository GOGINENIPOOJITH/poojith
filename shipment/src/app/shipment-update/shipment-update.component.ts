import { Component } from '@angular/core';
import { ShipmentService } from '../shipment.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shipment-update',
  templateUrl: './shipment-update.component.html',
  styleUrls: ['./shipment-update.component.css']
})
export class ShipmentUpdateComponent {
  updateForm!: FormGroup
  shipmentStatus=['Pending','In-Transit','Delivered'];
  shipmentId: any = 0;


  constructor(private ss: ShipmentService,private fb: FormBuilder,private router: Router,private route: ActivatedRoute){
  
 
   

    this.updateForm = this.fb.group({

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


    ngOnInit(): void 
    {
    this.route.params.subscribe(r=>{
      this.shipmentId = r['id'];
      this.ss.getShipment(this.shipmentId).subscribe(d=>{
        this.updateForm.patchValue(d);
      });
    })
    
  }
  


    updateform()
    {

    if(this.updateForm.valid)
    {
      this.ss.updateShipment(this.shipmentId,this.updateForm.value).subscribe(()=>{
        this.router.navigate(['/']);
      })
    }

  
    }
    
  

}
