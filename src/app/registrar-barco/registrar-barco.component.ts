import { Component } from '@angular/core';
import { Barco } from '../interfaces/barco.interface';
import { BarcoService } from '../barco.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-barco',
  templateUrl: './registrar-barco.component.html',
  styleUrls: ['./registrar-barco.component.css']
})
export class RegistrarBarcoComponent {

  barco : Barco = new Barco();

  constructor(private barcoServicio : BarcoService, private router : Router) {}

  ngOnInit(): void {

  }

  guardarBarco() {
    this.barcoServicio.registrarBarco(this.barco).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeBarcos();
    }, error => console.log(error));
  }

  irALaListaDeBarcos() {
    this.router.navigate(['/barcos']);
  }

  onSubmit() {
    this.guardarBarco();
  }
}
