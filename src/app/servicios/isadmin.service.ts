import { Injectable } from '@angular/core';
import { TokenService } from './autenticacion/token.service';

@Injectable({
  providedIn: 'root'
})

export class IsadminService {

  roles: string[]=[];
  isAdmin: boolean;

  constructor( private tokenserv: TokenService) {
    this.roles = this.tokenserv.getAuthorities();
   }
  
  public isAdminRole(): boolean {
    this.roles.forEach( (rol) => { 
      this.isAdmin = (rol === 'ROLE_ADMIN') ? true : false; } );
    
    return this.isAdmin;
  }

}
