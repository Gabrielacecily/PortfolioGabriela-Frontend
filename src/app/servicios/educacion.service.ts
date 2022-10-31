import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Services } from './Services';
import { Educacion } from '../modelos/educacion.model';

@Injectable({
  providedIn: 'root'
})

export class EducacionService extends Services {

  constructor( private httpCliente: HttpClient ) {
    super();
  }
  
  public getData(): Observable<any> {
    return this.httpCliente.get<Educacion[]>( this.URL + 'educacion/getEduc' );
  }
  public getDataByID(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public updateData(id: number, data: any): Observable<any> {
    return this.httpCliente.put<any>( this.URL + `educacion/updateEduc/${id}`, data );
  }
  public deleteData(id: number): Observable<any> {
    return this.httpCliente.delete<any>(this.URL + `educacion/deleteEduc/${id}`);
  }
 
}
