/**
 * ============================================
 * DIAGRAMA UML - FIGURA 1
 * ============================================
 * 
 * JERARQUÍA DE CLASES SEGÚN ESPECIFICACIÓN:
 * - FiguraGeometrica (ABSTRACTa)
 * - Circulo (CONCRETA)
 * - TrianguloEscaleno (CONCRETA) 
 * - TrianguloEquilatero (CONCRETA)
 */

/**
 * CLASE ABSTRACTA - FIGURAGEOMETRICA
 * Según diagrama UML: No se puede instanciar
 * Método calcularPerimetro: ABSTRACTO (cursiva en UML)
 */
export abstract class FiguraGeometrica {
    // Constructor de la clase abstracta
    constructor() {
        console.log('🔹 FiguraGeometrica (clase abstracta)');
    }
    
    /**
     * MÉTODO ABSTRACTO - calcularPerimetro()
     * Según diagrama UML: No requiere implementación en clase abstracta
     * Las clases derivadas DEBEN implementar este método
     */
    abstract calcularPerimetro(): number;
}

/**
 * CLASE CONCRETA - CIRCULO
 * Según diagrama UML: Instanciable, implementación completa
 */
export class Circulo extends FiguraGeometrica {
    // Atributos específicos del círculo
    private radio: number;
    
    /**
     * Constructor del círculo
     * @param radio - Radio del círculo en centímetros
     */
    constructor(radio: number) {
        super(); // Llamada al constructor de FiguraGeometrica
        this.radio = radio;
        console.log('🔸 Círculo creado con radio:', radio);
    }
    
    /**
     * IMPLEMENTACIÓN DEL MÉTODO ABSTRACTO
     * Según diagrama UML: Cada clase conoce su forma específica de calcular perímetro
     * Fórmula: P = 2 × π × r
     */
    calcularPerimetro(): number {
        const perimetro = 2 * Math.PI * this.radio;
        console.log('🟢 Perímetro círculo calculado:', perimetro);
        return perimetro;
    }
    
    // Métodos de acceso
    getRadio(): number {
        return this.radio;
    }
    
    setRadio(radio: number): void {
        this.radio = radio;
    }
}

/**
 * CLASE CONCRETA - TRIANGULOESCALENO
 * Según diagrama UML: Instanciable, implementación completa
 * Nota: Solo implementamos escaleno según especificaciones del documento
 */
export class TrianguloEscaleno extends FiguraGeometrica {
    // Atributos específicos del triángulo escaleno (3 lados diferentes)
    private lado1: number;
    private lado2: number;
    private lado3: number;
    
    /**
     * Constructor del triángulo escaleno
     * @param lado1 - Primer lado del triángulo
     * @param lado2 - Segundo lado del triángulo  
     * @param lado3 - Tercer lado del triángulo
     */
    constructor(lado1: number, lado2: number, lado3: number) {
        super(); // Llamada al constructor de FiguraGeometrica
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
        console.log('🔺 Triángulo escaleno creado:', lado1, lado2, lado3);
    }
    
    /**
     * IMPLEMENTACIÓN DEL MÉTODO ABSTRACTO
     * Fórmula: P = Lado1 + Lado2 + Lado3
     */
    calcularPerimetro(): number {
        const perimetro = this.lado1 + this.lado2 + this.lado3;
        console.log('🟢 Perímetro triángulo escaleno calculado:', perimetro);
        return perimetro;
    }
    
    // Métodos de acceso
    getLado1(): number { return this.lado1; }
    getLado2(): number { return this.lado2; }
    getLado3(): number { return this.lado3; }
    
    setLado1(lado1: number): void { this.lado1 = lado1; }
    setLado2(lado2: number): void { this.lado2 = lado2; }
    setLado3(lado3: number): void { this.lado3 = lado3; }
}

/**
 * CLASE CONCRETA - TRIANGULOEQUILATERO  
 * Según diagrama UML: Instanciable, implementación completa
 * (Preparada según diagrama, aunque no se use en componentes según especificaciones)
 */
export class TrianguloEquilatero extends FiguraGeometrica {
    // Atributo para los lados iguales del triángulo equilátero
    private lado: number;
    
    /**
     * Constructor del triángulo equilátero
     * @param lado - Lado del triángulo (todos los lados iguales)
     */
    constructor(lado: number) {
        super(); // Llamada al constructor de FiguraGeometrica
        this.lado = lado;
        console.log('🔷 Triángulo equilátero creado con lado:', lado);
    }
    
    /**
     * IMPLEMENTACIÓN DEL MÉTODO ABSTRACTO
     * Fórmula: P = 3 × lado
     */
    calcularPerimetro(): number {
        const perimetro = 3 * this.lado;
        console.log('🟢 Perímetro triángulo equilátero calculado:', perimetro);
        return perimetro;
    }
    
    // Métodos de acceso
    getLado(): number {
        return this.lado;
    }
    
    setLado(lado: number): void {
        this.lado = lado;
    }
}