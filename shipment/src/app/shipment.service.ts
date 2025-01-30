import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipment } from './shipment';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private apiUrl ="https://silver-fortnight-74v7vjwjrp63x74j-3000.app.github.dev/Shipment";
  constructor(private http: HttpClient) {}

  addShipment(shipment: Shipment): Observable<any>
  {
    return this.http.post<any>(this.apiUrl,shipment);
  }

  getShipments(): Observable<any>
  {
      return this.http.get<any>(this.apiUrl);
  }

  getShipment(id: any): Observable<any>
  {
    return this.http.get<any>(this.apiUrl +"/"+ id);

  }

  updateShipment(id: any,shipment: Shipment): Observable<any>
  {
    return this.http.put<any>(this.apiUrl + "/"+id,shipment);
  }

  deleteShipment(id: any): Observable<any>
  {
    return this.http.delete<any>(this.apiUrl + "/" + id);
  }

}
