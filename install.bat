@echo off
chcp 65001 >nul
echo ========================================
echo 🚀 INSTALACIÓN AUTOMÁTICA IONIC VS CODE
echo (VERSIÓN FINAL - TODOS LOS ERRORES SOLUCIONADOS)
echo ========================================
echo.

echo 📦 Verificando prerrequisitos...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ ERROR: Node.js no está instalado
    echo 📥 Descarga e instala Node.js desde: https://nodejs.org/
    pause
    exit /b 1
)

npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ ERROR: npm no está disponible
    pause
    exit /b 1
)

echo ✅ Node.js y npm encontrados
echo.

echo 🔧 Verificando Angular CLI...
ng version >nul 2>&1
if errorlevel 1 (
    echo 📥 Instalando Angular CLI globalmente...
    npm install -g @angular/cli
    if errorlevel 1 (
        echo ❌ Error instalando Angular CLI
        pause
        exit /b 1
    )
)
echo ✅ Angular CLI listo
echo.

echo 🔧 Verificando Ionic CLI...
ionic --version >nul 2>&1
if errorlevel 1 (
    echo 📥 Instalando Ionic CLI globalmente...
    npm install -g @ionic/cli
    if errorlevel 1 (
        echo ❌ Error instalando Ionic CLI
        pause
        exit /b 1
    )
)
echo ✅ Ionic CLI listo
echo.

echo 📂 Instalando dependencias del proyecto...
npm install
if errorlevel 1 (
    echo ❌ Error instalando dependencias
    echo 💡 Intenta: npm cache clean --force
    pause
    exit /b 1
)
echo ✅ Dependencias instaladas correctamente
echo.

echo 🔍 Verificando instalación de VS Code...
where code >nul 2>&1
if errorlevel 1 (
    echo ⚠️  VS Code no encontrado en PATH
    echo 📥 Descarga VS Code desde: https://code.visualstudio.com/
) else (
    echo ✅ VS Code encontrado
)

echo.
echo ========================================
echo 🎯 INSTALACIÓN COMPLETADA
echo ========================================
echo.
echo ✅ TODOS LOS ERRORES SOLUCIONADOS:
echo    - ❌ IonicModule not found → ✅ provideIonicAngular()
echo    - ❌ app-circulo not known → ✅ Importado en HomePage
echo    - ❌ app known → ✅ Import-triangulo notado en HomePage
echo.
echo 🚀 Para iniciar el proyecto:
echo    1. Abrir VS Code: code .
echo    2. Abrir terminal integrada (Ctrl+`)
echo    3. Ejecutar: ng serve
echo    4. O usar F5 para debug
echo.
echo 🌐 La aplicación se abrirá en: http://localhost:4200
echo.
echo 📝 Para más información, consulta README.md
echo.
pause