import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductosModule } from './productos/productos.module';
import { CabeceraModule } from './cabecera/cabecera.module';
import { MainComponent } from './productos/main/main.component';
import { ListadoComponent } from './productos/listado/listado.component';
import { LogoComponent } from './cabecera/logo/logo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductosModule, CabeceraModule, MainComponent, ListadoComponent, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02-productos';
}
