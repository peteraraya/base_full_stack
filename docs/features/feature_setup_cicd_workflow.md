# Registro de Implementación: Pipeline CI/CD y Flujo de Trabajo

**Rama**: `feature/setup-cicd-workflow`
**Fecha**: 12 de Julio de 2026

## 1. Resumen de las Modificaciones
El objetivo principal de esta característica fue establecer una base sólida y automatizada para las futuras integraciones de código (CI/CD) y definir las reglas del equipo en un entorno profesional.

Se añadieron dos componentes clave al proyecto:
1. Un pipeline de Integración Continua (GitHub Actions).
2. Un manual de contribución para el equipo (`CONTRIBUTING.md`).

## 2. Cambios Lógicos e Implementación

### A. Estrategia de Ramificación
Se estructuró el flujo en GitFlow:
- Se respetó la rama `develop` como el área principal de pruebas de integración.
- La rama actual se derivó desde `develop` siguiendo el estándar `feature/*`.

### B. Implementación del Pipeline (CI)
- **Archivo**: `.github/workflows/ci.yml`
- **Lógica**: 
  - Se configuró para que se active (`on:`) durante los eventos de `push` y `pull_request` dirigidos a las ramas `develop` y `main`.
  - Se definieron dos *Jobs* independientes que corren en paralelo:
    1. **`validate-api`**: Navega a la carpeta `/api`, instala dependencias, corre el Linter, los Tests y hace un Build de prueba del código NestJS.
    2. **`validate-web`**: Navega a la carpeta `/web`, instala dependencias, corre el Linter y realiza la compilación de producción de Next.js.
  - **Uso de Caché**: Se incluyó la validación de caché de NPM (`cache: 'npm'`) para que los flujos se ejecuten rápidamente sin tener que descargar todas las dependencias en cada ejecución, basándose en los respectivos `package-lock.json`.

### C. Guía de Flujo de Trabajo
- **Archivo**: `CONTRIBUTING.md` (ubicado en la raíz).
- **Contenido**: Se redactaron los pasos para clonar, crear ramas, y las normativas de nomenclatura utilizando convenciones de la industria (Conventional Commits). También establece la obligatoriedad de documentar futuras características.

## 3. Próximos Pasos (Validación)
Al hacer push de esta rama, se recomienda:
1. Ir a GitHub.
2. Abrir un **Pull Request** desde `feature/setup-cicd-workflow` hacia `develop`.
3. Validar visualmente en la pestaña "Actions" que los *jobs* de API y Web terminen exitosamente con un check verde.
4. Proceder con el Merge.
