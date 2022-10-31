import { Component, Input, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/autenticacion/token.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @Input() isAdmin: boolean;
 
  isLogged = false;
  tiltSettings = { scale: 1.1 };

  constructor( private modalService: NgbModal, private tokenService: TokenService) {}

  ngOnInit(): void {
  /*   if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    } */
      this.isLogged = (this.tokenService.getToken()) ? true : false;
    
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  openLogin(loginTemplate: any): void {
    this.modalService.open(loginTemplate, { centered: true, size: 'md'});
  }


}
