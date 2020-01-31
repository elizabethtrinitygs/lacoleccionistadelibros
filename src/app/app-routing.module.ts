import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchivoComponent } from './pages/archivo/archivo.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { ElementoComponent } from './pages/elemento/elemento.component';


const routes: Routes = [
  { path: 'archivo', component: ArchivoComponent },
  { path: 'sobremi', component: SobremiComponent },
  { path: 'elemento/:id', component: ElementoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'archivo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
