import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';
import  swal  from 'sweetalert2';
import { PersonaService } from '../persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.css']
})
export class ActualizarPersonaComponent implements OnInit {
  id:number;
  persona:Persona = new Persona();
  constructor(private personaService:PersonaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personaService.obtenerPersonaPorId(this.id).subscribe(dato =>{
      this.persona = dato;
    },error => console.log(error));
  }

  irAlaListaDePersonas(){
    this.router.navigate(['/personas']);
    alert('Persona actualizada');
  }

  onSubmit(){
    this.personaService.actualizarPersona(this.id,this.persona).subscribe(dato => {
      this.irAlaListaDePersonas();
      console.log(dato)
    },error => console.log(error));
  }
}
