# Gestor de Donaciones V2

Sistema web académico para registrar, consultar, dar seguimiento y cancelar donaciones con trazabilidad.

## Funciones
- Registro e inicio de sesión
- Autenticación JWT
- Roles usuario y administrador
- Registro de donaciones con ID, donante, fecha, cantidad, descripción y centro
- Estados: Registrada, Recibida, Entregada y Cancelada
- Cancelación conservando historial
- Panel administrativo
- Pruebas Jest con umbral global de cobertura de 80% o más
- GitHub Actions para CI
- Configuración para OWASP ZAP, SonarQube y AWS Elastic Beanstalk

## Ejecutar
npm install
npm start

Abrir http://localhost:3000.

## Pruebas
npm test

Proyecto académico. Antes de producción se debe configurar JWT_SECRET y persistencia con una base de datos.
