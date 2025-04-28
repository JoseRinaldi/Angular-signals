import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { DetalleComponent } from "./detalle/detalle.component";
import { ProductoComponent } from "./producto/producto.component";

@Component({
  selector: 'app-root',
  imports: [ProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-prueba';
}
