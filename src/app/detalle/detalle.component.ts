import { Component, input, output } from '@angular/core';
import { Producto } from '../interface/producto.interface';

@Component({
  selector: 'detalle',
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})
export class DetalleComponent {

  detalleInput = input<Producto>();

  detalleOutput = output<string>();

  emitir(){
    this.detalleOutput.emit(this.detalleInput()!.descripcion)
  }

}
