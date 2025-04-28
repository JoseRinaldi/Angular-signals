import { Component, signal } from '@angular/core';
import { DetalleComponent } from "../detalle/detalle.component";
import { Producto } from '../interface/producto.interface';

@Component({
  selector: 'producto',
  imports: [DetalleComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  mostrar = signal<string>(``);

  productoSignal = signal<Producto>({
    nombre: `Termo`,
    capacidad: 1500,
    descripcion: `Hermoso termo de 1500 cm cubicos`
  })

  capturarEvento(event:string){
    this.mostrar.set(event);
  }

}
