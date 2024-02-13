import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { Producto } from '../productos.module';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  productos:Producto[] = [];
  eliminado: Producto|null = null;
  encontrado:boolean = true;
  constructor(private _productosService:ProductosService){
    this.productos = _productosService.getProductos();
    this._productosService.productosChanged.subscribe(() =>{
      this.productos = _productosService.getProductos();
    })
  }
  eliminar(producto:string):void {
    this.eliminado = this._productosService.eliminar(producto);
    this.encontrado = (this.eliminado != null);
    console.log(this.productos)

    setTimeout(() => {
      this.encontrado = true;
      this.eliminado = null;
    }, (3000));
  }
}
