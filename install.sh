#!/bin/bash

echo "========================================"
echo "🚀 INSTALACIÓN AUTOMÁTICA IONIC VS CODE"
echo "(VERSIÓN FINAL - TODOS LOS ERRORES SOLUCIONADOS)"
echo "========================================"
echo

echo "📦 Verificando prerrequisitos..."

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ ERROR: Node.js no está instalado"
    echo "📥 Instala Node.js desde: https://nodejs.org/"
    exit 1
fi

# Verificar npm
if ! command -v npm &> /dev/null; then
    echo "❌ ERROR: npm no está disponible"
    exit 1
fi

echo "✅ Node.js y npm encontrados"
echo

# Verificar Angular CLI
if ! command -v ng &> /dev/null; then
    echo "📥 Instalando Angular CLI globalmente..."
    npm install -g @angular/cli
    if [ $? -ne 0 ]; then
        echo "❌ Error instalando Angular CLI"
        exit 1
    fi
fi

echo "✅ Angular CLI listo"
echo

# Verificar Ionic CLI
if ! command -v ionic &> /dev/null; then
    echo "📥 Instalando Ionic CLI globalmente..."
    npm install -g @ionic/cli
    if [ $? -ne 0 ]; then
        echo "❌ Error instalando Ionic CLI"
        exit 1
    fi
fi

echo "✅ Ionic CLI listo"
echo

echo "📂 Instalando dependencias del proyecto..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Error instalando dependencias"
    echo "💡 Intenta: npm cache clean --force"
    exit 1
fi

echo "✅ Dependencias instaladas correctamente"
echo

# Verificar VS Code
if command -v code &> /dev/null; then
    echo "✅ VS Code encontrado"
else
    echo "⚠️  VS Code no encontrado en PATH"
    echo "📥 Descarga VS Code desde: https://code.visualstudio.com/"
fi

echo
echo "========================================"
echo "🎯 INSTALACIÓN COMPLETADA"
echo "========================================"
echo
echo "✅ TODOS LOS ERRORES SOLUCIONADOS:"
echo "   - ❌ IonicModule not found → ✅ provideIonicAngular()"
echo "   - ❌ app-circulo not known → ✅ Importado en HomePage"
echo "   - ❌ app-triangulo not known → ✅ Importado en HomePage"
echo
echo "🚀 Para iniciar el proyecto:"
echo "   1. Abrir VS Code: code ."
echo "   2. Abrir terminal integrada (Ctrl+`)"
echo "   3. Ejecutar: ng serve"
echo "   4. O usar F5 para debug"
echo
echo "🌐 La aplicación se abrirá en: http://localhost:4200"
echo
echo "📝 Para más información, consulta README.md"
echo