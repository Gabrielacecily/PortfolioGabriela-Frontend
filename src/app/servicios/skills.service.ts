import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../modelos/skill.model';
import { Services } from './Services';

@Injectable({
  providedIn: 'root'
})
export class SkillsService extends Services {

  constructor(private httpCliente: HttpClient ) {
    super();
  }

  public getData(): Observable<any> {
    return this.httpCliente.get<Skill[]>( this.URL + 'skills/getSkills' );
  }
  public getDataByID(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public updateData(id: number, data: any): Observable<any> {
    return this.httpCliente.put<any>( this.URL + `skills/updateSkill/${id}`, data );
  }
  public deleteData(id: number): Observable<any> {
    return this.httpCliente.delete<any>(this.URL + `skills/deleteSkill/${id}`);
  }
  
}