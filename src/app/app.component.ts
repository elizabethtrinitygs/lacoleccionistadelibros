import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'lacoleccionistadelibros';
  constructor( public infoPaginaService: InfoPaginaService ) {
    //inyectando el servicio
  }
}
