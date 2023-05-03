import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barco } from './interfaces/barco.interface';

@Injectable({
  providedIn: 'root'
})
export class BarcoService {

  //Url del listado de barcos
  private baseURL = "http://localhost:8080/api/barcos";

  private anadirBarco = "http://localhost:8080/api/personas";

  private barco = "barcos";

  constructor(private httpClient: HttpClient) { }

  //obtener la lista de barcos
  obtenerListaDeBarcos() : Observable<Barco[]> {
    return this.httpClient.get<Barco[]>(`${this.baseURL}`);
  }

  registrarBarco(barco:Barco):Observable<Object> {
    return this.httpClient.post(`${this.anadirBarco}/${barco.idPersona}/${this.barco}`, barco);
  }
}
