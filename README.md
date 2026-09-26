# Gestor de Donaciones V2

Sistema web académico para registrar, consultar, dar seguimiento y cancelar donaciones con trazabilidad.

## Software funcionando
https://gestor-donaciones.onrender.com

## Funciones
- Registro e inicio de sesión.
- Autenticación mediante JWT.
- Roles de usuario y administrador.
- Registro de donaciones con ID, donante, fecha, cantidad, descripción y centro receptor.
- Estados: Registrada, Recibida, Entregada y Cancelada.
- Cancelación conservando el historial.
- Panel administrativo y resumen.

## Calidad y seguridad
- Jest con umbral global mínimo de cobertura de 80%.
- GitHub Actions ejecuta instalación y pruebas automáticamente en push y pull request.
- OWASP ZAP Baseline analiza la aplicación pública y genera un reporte como artifact del workflow `Security - OWASP ZAP`.
- SonarCloud/SonarQube usa `sonar-project.properties` y el reporte LCOV generado por Jest.
- Render despliega automáticamente la rama `main`, proporcionando el entorno público de prueba.

## Ejecutar localmente
```bash
npm install
npm start
```
Abrir http://localhost:3000.

## Pruebas
```bash
npm test
```

## OWASP ZAP local con Docker
```bash
bash security/zap-baseline.sh
```
Los reportes se generan en `reports/`.

## SonarCloud
El workflow `Quality - SonarCloud` requiere el secret `SONAR_TOKEN` del proyecto de SonarCloud. Una vez configurado, cada push a `main` ejecuta pruebas y análisis de calidad automáticamente.

## Variables de entorno
- `JWT_SECRET`: secreto para firmar JWT.
- `ADMIN_PASSWORD`: contraseña del administrador cuando aplique.
- `PORT`: puerto asignado por el proveedor de hosting.

## Nota académica
La versión actual mantiene los datos en memoria; un reinicio del servicio elimina los registros. Para una versión de producción se recomienda PostgreSQL, gestión de secretos y respaldos persistentes.
