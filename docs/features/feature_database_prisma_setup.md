# Configuración Inicial de Base de Datos y Prisma ORM

**Rama**: `feature/database-prisma-setup`
**Fecha**: 12 de Julio de 2026

## 1. Resumen
Se ha implementado la infraestructura base para conectar la API (NestJS) con la base de datos PostgreSQL utilizando el ORM **Prisma**. Esto permite a los desarrolladores del equipo realizar consultas a la base de datos con tipado fuerte (TypeScript) y manejar el esquema (tablas) como código.

## 2. Modificaciones Implementadas

- **Instalación de Prisma**: Se instaló `prisma` (CLI) y `@prisma/client` (versión 6.x para máxima estabilidad y compatibilidad).
- **Archivo `.env` en la API**: Se configuró la variable de entorno `DATABASE_URL` para que apunte a la base de datos PostgreSQL local definida en el `docker-compose.yml`.
- **Esquema de Base de Datos (`schema.prisma`)**: Se creó el archivo base de Prisma y se añadió el primer modelo de ejemplo (`User`) con atributos básicos (id, email, name, timestamps).
- **Servicio de NestJS (`PrismaService`)**: Se creó la clase `PrismaService` en `api/src/prisma.service.ts` encargada de instanciar y conectar el cliente de Prisma cuando el módulo de la aplicación arranque.

## 3. Instrucciones para el Equipo (¡Muy Importante!)

Dado que esta rama incluye cambios en la estructura de la base de datos, cada desarrollador que haga `git pull` de esta característica deberá sincronizar su base de datos local.

Sigue estos pasos en tu terminal (asegúrate de tener Docker Desktop abierto):

1. Levantar el contenedor de Postgres (si no lo tienes arriba):
   ```bash
   docker compose up -d db
   ```
2. Entrar a la carpeta de la API:
   ```bash
   cd api
   ```
3. Ejecutar la migración inicial de Prisma (esto creará la tabla `User` en tu BD real):
   ```bash
   npx prisma migrate dev --name init
   ```

Una vez que la migración termine con éxito, tu base de datos local estará lista para operar con NestJS.
