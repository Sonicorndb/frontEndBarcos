import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit{
  personas: Persona[];
  
  constructor(private personaServicio: PersonaService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  actualizarPersona(id:number) {
    this.router.navigate(['actualizar-persona', id]);
  }

  private obtenerPersonas() {
    this.personaServicio.obtenerListaDePersonas().subscribe(dato => {
      this.personas = dato;
    });
  }

  eliminarPersona(persona:Persona) {
    this.personaServicio.eliminarPersona(persona.id).subscribe({
      next: (() => {
        alert("Persona eliminada");
        this.personas = this.personas.filter(p => p !== persona);
        window.location.reload();
      }),
      error: () => {
        alert("Persona eliminada")
        window.location.reload();
      },
      complete: () => {
        console.log("Observable eliminar de barco completado");
        window.location.reload();
      }
    });
  }
}
