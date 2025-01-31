import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../shipment.service';
import { map, Observable, of } from 'rxjs';
import { Shipment } from '../shipment';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.css']
})
export class ShipmentListComponent implements OnInit {

  shipments$: Observable<any[]> = of([]);
  filteredShipments$: Observable<any[]> = of([]);
  searchText: string='';
  
  
  constructor(private ss: ShipmentService){}
  
  ngOnInit(): void 
  {
    this.getAllShipments();
  }

   getAllShipments()
  {
     
    this.shipments$ = this.ss.getShipments();
    this.filteredShipments$=this.shipments$;
    
  }

  deleteShipment(id: any)
  {
    return this.ss.deleteShipment(id).subscribe(()=>{
      this.getAllShipments();
    });
  }

  searchShipment(){
  if(!this.searchText)
    {
      this.filteredShipments$=this.shipments$;
    }
    this.filteredShipments$=this.shipments$.pipe(map((s1)=> {
      return s1.filter((ship)=> ship.id.toLowerCase.toString().includes(this.searchText) ||
                                 ship.sender.toLowerCase().toString().includes(this.searchText))
    }));
    

  }
  sortingByAsc(){
    this.filteredShipments$=this.shipments$.pipe(map((s2)=> s2.sort((a:Shipment,b:Shipment)=>a.id.toLocaleLowerCase().localeCompare(b.id))));
    this.shipments$=this.filteredShipments$;
    
    
  }


sortingBydesc(){
    this.filteredShipments$=this.shipments$.pipe(map((s2)=> s2.sort((a:Shipment,b:Shipment)=>b.sender.toLocaleLowerCase().localeCompare(a.sender))));
    // this.shipments$=this.filteredShipments$;


}
}
