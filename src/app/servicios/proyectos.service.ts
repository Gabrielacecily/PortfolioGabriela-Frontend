import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Services } from './Services';

@Injectable({
  providedIn: 'root'
})

export class ProyectosService  extends Services {
  
  constructor(private httpCliente: HttpClient ) {
    super();
  }

  public getData(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public getDataByID(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public updateData(id: number, data: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public deleteData(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }

 

}
