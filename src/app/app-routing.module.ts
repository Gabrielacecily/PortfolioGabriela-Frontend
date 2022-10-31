import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { SkillsComponent } from './componentes/skills/skills.component';

const routes: Routes = [
  
   { path: 'acerca',  component: AcercaComponent  },
  { path: 'experiencias',  component: ExperienciasComponent},
  { path: 'educacion',  component: EducacionComponent},
  { path: 'skills',  component: SkillsComponent},
   { path: '**', redirectTo: 'acerca', pathMatch: 'full'  },
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
