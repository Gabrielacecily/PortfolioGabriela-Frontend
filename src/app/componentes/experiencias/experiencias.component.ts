import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/modelos/experiencia.model';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';
import { IsadminService } from 'src/app/servicios/isadmin.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})

export class ExperienciasComponent implements OnInit {

  constructor( private toastr: ToastrService, private expServ: ExperienciasService,
    public offcanvasService: NgbOffcanvas, private router: Router , private adminserv: IsadminService) { }

    experiencia: Experiencia[] = [];
    idselecc: number;
    load: boolean;
    isAdmin: boolean;

  ngOnInit(): void {  
   this.cargarExperiencias();
   this.isAdmin = this.adminserv.isAdminRole();
  }

  public cargarExperiencias(): void {
    this.expServ.getData().subscribe(
      (data) => { this.experiencia = data; this.load=true; },
      (err) => { this.toastr.error(err.error.mensaje, 'Error exp.component', {timeOut: 3000,positionClass: 'toast-top-center'});
        this.router.navigate(['/']);  }
    );
  }

  openExp(expEdit: TemplateRef<any>, expid: number ) {
    this.offcanvasService.open(expEdit, { position: 'end' });
    this.idselecc = expid;
  }

  onUpdateExp( ): void{
    this.expServ.updateData( this.idselecc, this.experiencia[this.idselecc] ).subscribe(
      data => { this.toastr.success('Actualizado', '', {timeOut: 3000, positionClass: 'toast-top-center'});
                  this.offcanvasService.dismiss() },
      err => { this.toastr.error(err.error.mensaje, 'Error', {timeOut: 3000,  positionClass: 'toast-top-center', });
                  console.log(err);       
      }
    );  
  } 

  onDeleteExp( id: number ): void{ 
    this.expServ.deleteData(id).subscribe(
      data => { this.toastr.success('Eliminado', 'OK', {timeOut: 3000, positionClass: 'toast-top-center'});
        this.cargarExperiencias();  },
      err => { this.toastr.error(err.error.mensaje, 'Fail', { timeOut: 3000, positionClass: 'toast-top-center',});
    console.log(err); }
    );
  
}

}
