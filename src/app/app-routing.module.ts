import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchivoComponent } from './pages/archivo/archivo.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { ElementoComponent } from './pages/elemento/elemento.component';


const routes: Routes = [
  { path: '', component: ArchivoComponent },
  { path: 'sobre mi', component: SobremiComponent },
  { path: 'elemento', component: ElementoComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
