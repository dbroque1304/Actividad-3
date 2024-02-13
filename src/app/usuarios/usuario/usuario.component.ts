import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Usuario } from '../usuarios.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  usuarios:Usuario[] = [];
  eliminado: Usuario|null = null;
  encontrado:boolean = true;
  constructor(private _usuariosService:UsuariosService){
    this.usuarios = _usuariosService.getUsuarios();
    this._usuariosService.usuariosChanged.subscribe(() =>{
      this.usuarios = _usuariosService.getUsuarios();
    })
  }
  eliminar(usuario:string):void {
    this.eliminado = this._usuariosService.eliminar(usuario);
    this.encontrado = (this.eliminado != null);
    console.log(this.usuarios)

    setTimeout(() => {
      this.encontrado = true;
      this.eliminado = null;
    }, (3000));
  }
}
