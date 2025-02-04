import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../shipment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Shipment } from '../shipment';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.css']
})
export class ShipmentDetailsComponent implements OnInit {
shipments$: Observable<any[]> = of([]);
shipmentId: any;

  
 constructor(private ss: ShipmentService,private route:ActivatedRoute) {}


  ngOnInit(): void
  {

      this.route.params.subscribe((r)=>{
      this.shipmentId = r['id'];
      this.getShipment(this.shipmentId);
    });

      
      
   
  }

  getShipment(id: any)
  {
    this.shipments$=this.ss.getShipment(id);

  }

}
