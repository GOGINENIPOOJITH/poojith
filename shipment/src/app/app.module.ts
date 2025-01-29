import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';
import { ShipmentFormComponent } from './shipment-form/shipment-form.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { ShipmentUpdateComponent } from './shipment-update/shipment-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShipmentListComponent,
    ShipmentFormComponent,
    ShipmentDetailsComponent,
    ShipmentUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
