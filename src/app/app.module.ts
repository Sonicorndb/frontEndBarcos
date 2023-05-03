import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { HttpClientModule } from "@angular/common/http";
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { FormsModule } from '@angular/forms';
import { ActualizarPersonaComponent } from './actualizar-persona/actualizar-persona.component';
import { RegistrarBarcoComponent } from './registrar-barco/registrar-barco.component';
import { ListaBarcosComponent } from './lista-barcos/lista-barcos.component';
import { ActualizarBarcoComponent } from './actualizar-barco/actualizar-barco.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    RegistrarPersonaComponent,
    ActualizarPersonaComponent,
    RegistrarBarcoComponent,
    ListaBarcosComponent,
    ActualizarBarcoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
