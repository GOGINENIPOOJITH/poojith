import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';
import { ShipmentFormComponent } from './shipment-form/shipment-form.component';
import { ShipmentUpdateComponent } from './shipment-update/shipment-update.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';

const routes: Routes = [
  {path:'', component:ShipmentListComponent},
  {path:'add',component: ShipmentFormComponent},
  {path:'update/:id',component:ShipmentUpdateComponent},
  {path:'view/:id',component: ShipmentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
