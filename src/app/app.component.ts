import { Component, Output } from '@angular/core';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from './servicios/autenticacion/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
 
  constructor(  ) {

  }

  ngOnInit(): void { 
    AOS.init();
   }

 
}
