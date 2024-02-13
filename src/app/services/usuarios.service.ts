import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from '../usuarios/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private _usuarios: Usuario[] = [
    { nombre: 'Manuel', edad: 56, profesion: 'No tiene profesión' },
    { nombre: 'Antonio', edad: 28, profesion: 'No tiene profesión' },
  ];

  usuariosChanged: EventEmitter<null>;

  constructor() {
    this.usuariosChanged = new EventEmitter();
  }

  getUsuarios(): Usuario[] {
    return Array.from(this._usuarios);
  }

  eliminar(usuario: string): Usuario | null {
    let usuarioEliminado: Usuario | null;
    let pos = this._usuarios.findIndex((item) => item.nombre.toLocaleLowerCase() == usuario.toLocaleLowerCase());
    if (pos >= 0) {
      usuarioEliminado = this._usuarios[pos];
      this._usuarios.splice(pos, 1);
      this.usuariosChanged.emit();
    } else {
      usuarioEliminado = null;
    }
    return usuarioEliminado;
  }
  crear(datos: Usuario) {
    this._usuarios.push({ ...datos });
    this.usuariosChanged.emit();
  }
}
