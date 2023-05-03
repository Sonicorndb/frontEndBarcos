import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  // Esta utl devulve todas las personas
  private baseURL = "http://localhost:8080/api/personas";
  private eliminar = "eliminar"

  constructor(private httpClient: HttpClient) { }

  obtenerListaDePersonas() : Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(`${this.baseURL}`);
  }

  // Este metodo nos sirve para guardar una persona
  registrarPersona(persona:Persona):Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, persona);
  }

  actualizarPersona(id:number, persona:Persona):Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, persona);
  }

  obtenerPersonaPorId(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.baseURL}/${id}`);
  }

  eliminarPersona(id:number):Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${this.eliminar}/${id}`);
  }
}
