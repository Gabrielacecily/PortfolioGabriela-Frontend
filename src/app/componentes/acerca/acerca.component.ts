import { Component, Injectable, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/modelos/persona.model';
import { Acerca } from 'src/app/servicios/acerca.service';
import { IsadminService } from 'src/app/servicios/isadmin.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css'] 
 })

export class AcercaComponent implements OnInit {
  
  constructor( private acercaServ: Acerca, public offcanvasService: NgbOffcanvas, 
    private toastr: ToastrService, private router: Router, private adminserv: IsadminService) { }


  persArray: Persona[] = [];  persona: Persona=new Persona();
  idselecc: number;
  load: boolean;
  isAdmin: boolean;


  ngOnInit(): void { 
    this.cargarPersona();
    this.isAdmin = this.adminserv.isAdminRole();
  }

    public cargarPersona(): void {
      this.acercaServ.getData().subscribe(
        (data) => { this.persArray = data; this.persona= this.persArray[0]; this.load=true;  },
        (err) => {this.toastr.error(err.error.mensaje, 'Error acerca.component', {timeOut: 3000, positionClass: 'toast-top-center',});
            this.router.navigate(['/']);
        }
      );
    }

  openAbout( aboutEdit: TemplateRef<any>) {
    this.offcanvasService.open( aboutEdit , { position: 'end'});
  }

  onUpdateAcerca( ): void{
    this.acercaServ.updateData( 0, this.persona ).subscribe(
      data => { this.toastr.success('Actualizado', '', {timeOut: 3000, positionClass: 'toast-top-center'});
                  this.offcanvasService.dismiss() },
      err => { this.toastr.error(err.error.mensaje, 'Error', {timeOut: 3000,  positionClass: 'toast-top-center', });
                  console.log(err);       
      }
    );  
  }



}

