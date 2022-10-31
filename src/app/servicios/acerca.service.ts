import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona.model';
import { Services } from './Services';


@Injectable({
  providedIn: 'root'
})

export class Acerca extends Services {

  constructor(private httpCliente: HttpClient ) {
    super();
  }

  public getData(): Observable<any> {
    return this.httpCliente.get<Persona[]>( this.URL + `persona/getPers`);
  }
  public getDataByID(id: number): Observable<any> {
    return this.httpCliente.get<Persona>( this.URL + `persona/getPers/${id}`);
  }
  public updateData(id: number, data: any): Observable<any> {
    return this.httpCliente.put<any>( this.URL + `persona/updatePers/${id}`, data );
  }
  public deleteData(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  
}
