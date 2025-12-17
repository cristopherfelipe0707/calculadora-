import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton, 
  IonIcon
} from '@ionic/angular/standalone';
import { Circulo } from '../models/figuras-geometricas';

@Component({
  selector: 'app-circulo',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon
  ],
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss']
})
export class CirculoComponent {
  /**
   * Variable para el radio del círculo
   * Formulario dirigido por plantilla (template-driven) según especificaciones
   */
  radio: number = 0;
  
  /**
   * Variable para almacenar el resultado del cálculo
   */
  resultado: number | null = null;
  
  /**
   * Instancia de la clase Circulo según jerarquía de clases
   */
  circulo: Circulo = new Circulo(0);

  /**
   * MÉTODO PARA CALCULAR PERÍMETRO
   * Según especificaciones: Se desencadena con evento "click" sobre ion-button
   */
  calcularPerimetro(): void {
    console.log('🔄 Iniciando cálculo de perímetro del círculo...');
    
    // Validar que el radio sea válido
    if (this.radio > 0) {
      // Actualizar la instancia del círculo
      this.circulo.setRadio(this.radio);
      
      // Calcular el perímetro usando el método implementado
      this.resultado = this.circulo.calcularPerimetro();
      
      console.log('✅ Cálculo completado. Resultado:', this.resultado);
    } else {
      console.warn('⚠️ Por favor ingrese un radio válido mayor a 0');
    }
  }
  
  /**
   * Método para reiniciar el formulario
   */
  reiniciar(): void {
    this.radio = 0;
    this.resultado = null;
    console.log('🔄 Formulario círculo reiniciado');
  }
}