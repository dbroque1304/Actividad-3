import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosFormularioComponent } from './usuarios-formulario/usuarios-formulario.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuarioComponent,
    UsuariosFormularioComponent
  ],
  exports: [
    UsuarioComponent,
    UsuariosFormularioComponent
  ]

})
export class UsuariosModule { }
