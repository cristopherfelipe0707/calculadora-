import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonItem, 
  IonLabel, 
  IonSelect, 
  IonSelectOption, 
  IonIcon, 
  IonButton
} from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonIcon,
    IonButton,
    // ✅ COMPONENTES IMPORTADOS PARA USAR EN EL TEMPLATE
    CirculoComponent,
    TrianguloComponent
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  /**
   * Variable para controlar la figura seleccionada
   * Valores: '', 'circulo', 'triangulo'
   */
  figuraSeleccionada: string = '';
  
  constructor() {
    console.log('🏠 HomePage inicializada - Versión VS Code');
  }
  
  /**
   * Maneja el evento de cambio en ion-select
   * Se ejecuta cuando el usuario selecciona una figura
   * @param event - Evento del ion-select
   */
  onFiguraSeleccionada(event: any): void {
    this.figuraSeleccionada = event.detail.value;
    console.log('🎯 Figura seleccionada:', this.figuraSeleccionada);
  }
}