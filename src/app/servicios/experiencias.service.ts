import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia.model';
import { Services } from './Services';


@Injectable({
  providedIn: 'root'
})

export class ExperienciasService extends Services {
  
  constructor(private httpCliente: HttpClient ) {
    super();
  }
  
  public getData(): Observable<any> {
    return this.httpCliente.get<Experiencia[]>( this.URL + `experiencias/getExp` );
  }
  public getDataByID(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public updateData(id: number, data: any): Observable<any> {
    return this.httpCliente.put<any>( this.URL + `experiencias/updateExp/${id}`, data );
  }
  public deleteData(id: number): Observable<any> {
    return this.httpCliente.delete<any>(this.URL + `experiencias/deleteExp/${id}`);
  }

}