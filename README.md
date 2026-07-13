# TaskFlow Pro 🚀

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![NestJS](https://img.shields.io/badge/NestJS-10.0-red)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)

**TaskFlow Pro** es una aplicación de gestión de tareas full-stack lista para producción. Este proyecto fue construido para demostrar prácticas de ingeniería de software de grado empresarial. Utiliza un backend en **NestJS** (arquitectura escalable) y un frontend en **Next.js**, con un fuerte enfoque en código limpio (clean architecture), tipado estricto (TypeScript) y modelado de datos eficiente.

## 🌟 ¿Por qué este proyecto? (Propósito para Portafolio)

Este proyecto sirve como una demostración técnica integral de mis habilidades de desarrollo de software moderno:
- **Arquitectura Backend**: Implementación de APIs REST robustas usando decoradores, guards (para seguridad) e interceptores en NestJS.
- **Integridad de Datos**: Uso del ORM Prisma con PostgreSQL para realizar consultas a la base de datos totalmente seguras a nivel de tipos y manejar migraciones de manera automatizada.
- **Rendimiento Frontend**: Aprovechamiento de Next.js App Router y React Query para obtener datos, guardarlos en caché y optimizar la experiencia del usuario.
- **DevOps e Infraestructura**: Entorno completamente contenerizado usando Docker y Docker Compose, facilitando el despliegue en cualquier sistema.

## 🏗️ Arquitectura y Guía de Estudio

Para un análisis profundo del diseño del sistema, el flujo de datos y las decisiones arquitectónicas, por favor lee el archivo [BLUEPRINT.md](./BLUEPRINT.md). Ese archivo contiene las bases para entender cómo interactúan el frontend y el backend.

### Estructura de Carpetas Principal
- **`api/`** (Backend): Construido con NestJS, TypeScript, Prisma, y documentado con Swagger. Aquí reside la lógica de negocio.
- **`web/`** (Frontend): Construido con Next.js, Tailwind CSS para los estilos, y React Query para manejar los estados que vienen del servidor.
- **Base de Datos**: PostgreSQL (Corriendo dentro de un contenedor Docker).

## 🚀 Guía de Instalación (Cómo levantar el proyecto localmente)

Levantar este proyecto de manera local está diseñado para ser rápido y sin fricciones.

### Requisitos Previos
- [Docker](https://docs.docker.com/get-docker/) y Docker Compose (Para la base de datos)
- [Node.js](https://nodejs.org/) (versión 20 o superior)
- npm o pnpm

### 1. Levantar la Infraestructura (Base de Datos)

Abre tu terminal en la raíz del proyecto (`taskflow-pro`) y ejecuta:
```bash
# Descarga la imagen de PostgreSQL y levanta la base de datos en segundo plano
docker-compose up -d
```

### 2. Configurar el Backend (API en NestJS)

Abre una nueva pestaña en tu terminal:
```bash
cd api
npm install

# (Cuando configures Prisma más adelante, aquí ejecutarías: npx prisma migrate dev)

# Levanta el servidor de desarrollo del backend
npm run start:dev
```
La API estará disponible en [http://localhost:3000](http://localhost:3000) (por defecto en Nest).

### 3. Configurar el Frontend (Next.js)

Abre otra pestaña en tu terminal:
```bash
cd web
npm install

# Levanta el servidor de desarrollo del frontend
npm run dev
```
El frontend web estará disponible en [http://localhost:3001](http://localhost:3001) (u otro puerto si el 3000 está ocupado por Nest).

## 💡 Calidad de Código y Buenas Prácticas Aplicadas

- **Tipado Estricto (TypeScript)**: No se permite el uso del tipo `any`. Hay seguridad de tipos de extremo a extremo: desde el esquema de la base de datos hasta los componentes de React en la vista.
- **Diseño Modular**: El backend de NestJS se divide en módulos de características independientes (ej. Usuarios, Workspaces, Tareas), garantizando que el código no se vuelva un espagueti a medida que crece.
- **Validación de Datos**: Las peticiones HTTP que llegan al servidor se validan automáticamente usando `class-validator` antes de siquiera tocar la lógica del negocio.

## 👨‍💻 Autor

Construido por Pedro Araya Gálvez para demostrar habilidades avanzadas en el desarrollo full-stack. ¡Siéntete libre de explorar el código y la arquitectura!
