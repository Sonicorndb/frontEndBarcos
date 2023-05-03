import { Component, OnInit } from '@angular/core';
import { Barco } from '../interfaces/barco.interface';
import { BarcoService } from '../barco.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-barcos',
  templateUrl: './lista-barcos.component.html',
  styleUrls: ['./lista-barcos.component.css']
})

export class ListaBarcosComponent implements OnInit {
  barcos: Barco[];

  constructor(private barcoServicio: BarcoService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerBarcos();
  }

  private obtenerBarcos() {
    this.barcoServicio.obtenerListaDeBarcos().subscribe(dato => {
      this.barcos = dato;
    });
  }
}
