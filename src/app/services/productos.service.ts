import { Injectable } from '@angular/core';
import { Producto } from '../productos/productos.interface';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private _productos: Producto[] = [
    { nombre: 'Bolígrafo', precio: 2.5, categoria: 'Papelería' },
    { nombre: 'Martillo', precio: 5, categoria: 'Ferretería' },
    { nombre: 'Cuaderno', precio: 3.5, categoria: 'Papelería' },
    { nombre: 'Regla', precio: 1.5, categoria: 'Papelería' },
    { nombre: 'Destornillador', precio: 4.5, categoria: 'Ferretería' },
  ];

  productosChanged: EventEmitter<null>;

  constructor() {
    this.productosChanged = new EventEmitter();
  }

  getProductos(): Producto[] {
    return Array.from(this._productos);
  }

  eliminar(producto: string): Producto | null {
    let productoEliminado: Producto | null;
    let pos = this._productos.findIndex((item) => item.nombre.toLocaleLowerCase() == producto.toLocaleLowerCase());
    if (pos >= 0) {
      productoEliminado = this._productos[pos];
      this._productos.splice(pos, 1);
      this.productosChanged.emit();
    } else {
      productoEliminado = null;
    }
    return productoEliminado;
  }
  crear(datos: Producto) {
    this._productos.push({ ...datos });
    this.productosChanged.emit();
  }
}
