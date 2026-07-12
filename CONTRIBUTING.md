# Guía de Flujo de Trabajo y Contribución

Este documento establece las normativas profesionales para el desarrollo en este repositorio, asegurando consistencia y calidad en el código.

## 1. Estrategia de Ramificación (Branching Strategy)

Utilizamos un flujo basado en **GitFlow** simplificado:

- **`main`**: Rama de producción. Todo el código aquí debe ser estable y estar desplegado. Nunca se hace *push* directo a esta rama.
- **`develop`**: Rama principal de desarrollo. Contiene las últimas características aprobadas. Nunca se hace *push* directo a esta rama.
- **Ramas de Características (`feature/*`)**: Toda nueva funcionalidad o cambio debe desarrollarse en su propia rama derivada de `develop`.

### Convenciones de Nomenclatura para Ramas
- `feature/[nombre-de-la-característica]`: Para nuevas funcionalidades (ej. `feature/login-system`).
- `bugfix/[nombre-del-bug]`: Para corrección de errores (ej. `bugfix/header-alignment`).
- `hotfix/[nombre-del-hotfix]`: Para errores críticos en producción (derivan de `main`).

## 2. Flujo de Trabajo Diario

1. **Actualizar el entorno local**:
   ```bash
   git checkout develop
   git pull origin develop
   ```
2. **Crear una rama de trabajo**:
   ```bash
   git checkout -b feature/mi-nueva-caracteristica
   ```
3. **Desarrollo y Commits**:
   Escribe código y haz *commits* descriptivos. Usamos Conventional Commits:
   - `feat:` Nueva funcionalidad.
   - `fix:` Corrección de error.
   - `docs:` Cambios en documentación.
   - `chore:` Tareas de mantenimiento o configuración (ej. CI/CD).
   
   *Ejemplo: `feat: agregar sistema de autenticación de usuarios`*

4. **Crear un Pull Request (PR)**:
   - Haz *push* de tu rama: `git push origin feature/mi-nueva-caracteristica`.
   - Ve a GitHub y abre un PR apuntando hacia `develop`.

## 3. Integración Continua (CI/CD)

Hemos implementado un flujo de automatización con **GitHub Actions** (`.github/workflows/ci.yml`).

Cada vez que abres un PR hacia `develop` o `main`, el pipeline de CI ejecutará:
- **Linting**: Validación de formato en Frontend (Next.js) y Backend (NestJS).
- **Pruebas (Testing)**: Ejecución de tests automatizados (si existen).
- **Compilación (Build)**: Verificación de que ambos proyectos compilen correctamente sin errores.

**Regla de Oro**: Ningún PR puede fusionarse (merge) si el pipeline de CI falla o si no cuenta con la revisión (approve) de otro miembro del equipo.

## 4. Documentación de Características

Toda nueva característica importante debe venir acompañada de un archivo de documentación en la carpeta `docs_not/` (o la carpeta destinada a documentación interna), explicando:
- El objetivo del cambio.
- Lógica implementada.
- Instrucciones especiales si las hay.
