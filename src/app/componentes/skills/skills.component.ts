import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/modelos/skill.model';
import { IsadminService } from 'src/app/servicios/isadmin.service';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  constructor( private toastr: ToastrService, private skillServ: SkillsService,
    public offcanvasService: NgbOffcanvas, private router: Router, private adminserv: IsadminService) { }

    isAdmin: boolean
    skills: Skill[] =[]; 
    idselecc: number;
load: boolean;

  ngOnInit(): void { 
   this.cargarSkills();
   this.isAdmin = this.adminserv.isAdminRole();
  }

  public cargarSkills(): void {
    this.skillServ.getData().subscribe(
      (data) => { this.skills = data; this.load=true; },
      (err) => { this.toastr.error(err.error.mensaje, 'Error skills.component', { timeOut: 3000,  positionClass: 'toast-top-center', });
        this.router.navigate(['/']);  }
    );
  }

  openSkill(skillEdit: TemplateRef<any>, skillid: number) {
    this.offcanvasService.open(skillEdit, { position: 'end' });
    this.idselecc = skillid;
  }

  onUpdateSkill( ): void{
    this.skillServ.updateData( this.idselecc, this.skills[this.idselecc] ).subscribe(
      data => { this.toastr.success('Actualizado', '', {timeOut: 3000, positionClass: 'toast-top-center'});
                  this.offcanvasService.dismiss() },
      err => { this.toastr.error(err.error.mensaje, 'Error', {timeOut: 3000,  positionClass: 'toast-top-center', });
                  console.log(err);       
      }
    );  
  }

  onDeleteSkill( id: number ): void{ 
    this.skillServ.deleteData(id).subscribe(
      data => { this.toastr.success('Eliminado', 'OK', {timeOut: 3000, positionClass: 'toast-top-center'});
        this.cargarSkills();  },
      err => { this.toastr.error(err.error.mensaje, 'Fail', { timeOut: 3000, positionClass: 'toast-top-center',});
    console.log(err); }
    );
  
}

}
