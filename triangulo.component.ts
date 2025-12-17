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
import { TrianguloEscaleno } from '../models/figuras-geometricas';

@Component({
  selector: 'app-triangulo',
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
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss']
})
export class TrianguloComponent {
  /**
   * Variables para los lados del triángulo escaleno
   * Según especificaciones: triángulo escaleno (lados diferentes)
   */
  lado1: number = 0;
  lado2: number = 0;
  lado3: number = 0;
  
  /**
   * Variable para el resultado del cálculo
   */
  resultado: number | null = null;
  
  /**
   * Instancia de la clase TrianguloEscaleno según jerarquía de clases
   */
  triangulo: TrianguloEscaleno = new TrianguloEscaleno(0, 0, 0);

  /**
   * MÉTODO PARA CALCULAR PERÍMETRO DEL TRIÁNGULO ESCALENO
   * Se desencadena con evento "click" sobre ion-button
   */
  calcularPerimetro(): void {
    console.log('🔄 Iniciando cálculo de perímetro del triángulo escaleno...');
    
    // Validar que todos los lados sean válidos
    if (this.lado1 > 0 && this.lado2 > 0 && this.lado3 > 0) {
      // Actualizar la instancia del triángulo
      this.triangulo.setLado1(this.lado1);
      this.triangulo.setLado2(this.lado2);
      this.triangulo.setLado3(this.lado3);
      
      // Calcular el perímetro
      this.resultado = this.triangulo.calcularPerimetro();
      
      console.log('✅ Cálculo completado. Resultado:', this.resultado);
    } else {
      console.warn('⚠️ Por favor ingrese valores válidos para todos los lados');
    }
  }
  
  /**
   * Método para reiniciar el formulario
   */
  reiniciar(): void {
    this.lado1 = 0;
    this.lado2 = 0;
    this.lado3 = 0;
    this.resultado = null;
    console.log('🔄 Formulario triángulo reiniciado');
  }
}