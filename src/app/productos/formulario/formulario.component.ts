import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../productos.interface';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  datosFormularios: Producto = {
    nombre: '',
    precio: 0,
    categoria: '',
  };
  constructor(private _productosService: ProductosService) {}

  onSubmit(f: NgForm) {
    // crearServicio(this.datosFormularios);
    if (f.valid) {
      this._productosService.crear(this.datosFormularios);
    }
  }
}
