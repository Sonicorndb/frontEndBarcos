import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { ActualizarPersonaComponent } from './actualizar-persona/actualizar-persona.component';
import { ListaBarcosComponent } from './lista-barcos/lista-barcos.component';
import { RegistrarBarcoComponent } from './registrar-barco/registrar-barco.component';

const routes: Routes = [
  {path : 'personas', component : ListaPersonasComponent},
  {path : '', redirectTo : 'personas', pathMatch : 'full'},
  {path : 'registrar-persona', component : RegistrarPersonaComponent},
  {path : 'actualizar-persona/:id',component : ActualizarPersonaComponent},

  {path : 'barcos', component : ListaBarcosComponent},
  {path : '', redirectTo : 'barcos', pathMatch : 'full'},
  {path : 'registrar-barcos', component : RegistrarBarcoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
