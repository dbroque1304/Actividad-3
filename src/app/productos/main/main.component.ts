import { Component } from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { UsuariosModule } from '../../usuarios/usuarios.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ListadoComponent, FormularioComponent, UsuariosModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
