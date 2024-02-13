import { Component } from '@angular/core';
import { Usuario } from '../usuarios.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-usuarios-formulario',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf],
  templateUrl: './usuarios-formulario.component.html',
  styleUrl: './usuarios-formulario.component.css'
})
export class UsuariosFormularioComponent {
  datosFormularios: Usuario = {
    nombre: '',
    edad: 0,
    profesion: '',
  };
  constructor(private _usuariosService: UsuariosService) {}

  onSubmit(f: NgForm) {
    if (f.valid) {
      if(this.datosFormularios.profesion == ""){
        this.datosFormularios.profesion = "No tiene profesión"
      }
      this._usuariosService.crear(this.datosFormularios);
    }
  }
}
