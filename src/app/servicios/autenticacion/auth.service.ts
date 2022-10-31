import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../../modelos/jwt-dto.model';
import { LoginUsuario } from '../../modelos/login-usuario.model';
import { NuevoUsuario } from '../../modelos/nuevo-usuario.model';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  authURL = 'http://localhost:8080/auth/';
  //authURL ='https://portfoliogcc.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>( this.authURL + 'login', loginUsuario );
  }
  
}
