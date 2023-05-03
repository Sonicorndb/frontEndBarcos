import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-persona',
  templateUrl: './registrar-persona.component.html',
  styleUrls: ['./registrar-persona.component.css']
})
export class RegistrarPersonaComponent implements OnInit{

  persona : Persona = new Persona();

  constructor(private personaServicio : PersonaService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarPersona() {
    this.personaServicio.registrarPersona(this.persona).subscribe(dato =>{
      console.log(dato);
      this.irALaListaDePersonas();
    }, error => console.log(error));
  }

  irALaListaDePersonas() {
    this.router.navigate(['/personas'])
  }

  onSubmit() {
    this.guardarPersona();
  }

}
