import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp } from '@ionic/angular/standalone';
import { HomePage } from './home/home.page';
import { CirculoComponent } from './circulo/circulo.component';
import { TrianguloComponent } from './triangulo/triangulo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, RouterOutlet, HomePage, CirculoComponent, TrianguloComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculadora de Perímetros - Ionic Framework';
  
  constructor() {
    console.log('🚀 Aplicación Ionic iniciada en VS Code');
  }
}