import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/modelos/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { IsadminService } from 'src/app/servicios/isadmin.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  constructor( private toastr: ToastrService, private educServ: EducacionService, 
    private modalService: NgbModal,public offcanvasService: NgbOffcanvas, 
    private router: Router, private adminserv: IsadminService ) { }

    educacion: Educacion[] =[]; 
    cursos: Educacion[] =[];
    idselecc: number;
    load: boolean;
    isAdmin: boolean;

  ngOnInit(): void { 
   this.cargarEducacion();
   this.isAdmin = this.adminserv.isAdminRole();
  }

  public cargarEducacion(): void {
    this.educServ.getData().subscribe(
      data => { data.forEach( data => { 
        data.esCurso ? this.cursos.push(data) : this.educacion.push(data); }
        )
        this.load=true; 
      } ,
      err => { this.toastr.error(err.error.mensaje, 'Error', {timeOut: 3000,positionClass: 'toast-top-center',});
        this.router.navigate(['/']);      }
    )
  }

  openEduc( educEdit: TemplateRef<any>, ideduc: number) {
    this.offcanvasService.open( educEdit, { position: 'end' });
    this.idselecc = ideduc;
  }
  
  openEducCursos( educCursos: TemplateRef<any>, cursoid: number) {
    this.modalService.open( educCursos, { size: 'md'});
    this.idselecc = cursoid;
  }

  onUpdateEduc( ): void{
    this.educServ.updateData( this.idselecc, this.educacion[this.idselecc] ).subscribe(
      data => { this.toastr.success('Actualizado', '', {timeOut: 3000, positionClass: 'toast-top-center'});
                  this.offcanvasService.dismiss() },
      err => { this.toastr.error(err.error.mensaje, 'Error', {timeOut: 3000,  positionClass: 'toast-top-center', });
                  console.log(err);       
      }
    );  
  } 

  onDeleteEduc( id: number ): void{ 
      this.educServ.deleteData(id).subscribe(
        data => { this.toastr.success('Eliminado', 'OK', {timeOut: 3000, positionClass: 'toast-top-center'});
          this.cargarEducacion();  },
        err => { this.toastr.error(err.error.mensaje, 'Error', { timeOut: 3000, positionClass: 'toast-top-center',});
      console.log(err); }
      );
    
  }


    
  

}
