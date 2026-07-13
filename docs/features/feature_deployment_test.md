# Test de Despliegue (Conexión Full Stack)

**Rama**: `feature/deployment-test`
**Fecha**: 12 de Julio de 2026

## 1. Resumen
Se ha implementado una prueba básica de conectividad entre el frontend (Next.js) y el backend (NestJS) para asegurar que el despliegue en Vercel y el VPS funcionen en conjunto correctamente.

## 2. Cambios Implementados
- **Backend (NestJS)**: Se habilitó CORS en `main.ts` permitiendo que el Frontend pueda consumir la API desde un dominio externo (como Vercel) sin ser bloqueado por políticas de seguridad del navegador. También se incluyó el parche del linter para la función `bootstrap()`.
- **Frontend (Next.js)**: Se limpió la página de inicio por defecto (`page.tsx`) y se reemplazó por un Client Component. Este componente realiza una petición `fetch` a la URL configurada en `NEXT_PUBLIC_API_URL` (o a `http://localhost:3000` si está en local) e imprime la respuesta en pantalla.

## 3. Instrucciones de Prueba (Despliegue)
1. Al fusionar esta rama, Vercel desplegará automáticamente el frontend.
2. En tu VPS, asegúrate de levantar los contenedores (`docker compose up -d --build`).
3. En el panel de Vercel, en la configuración del proyecto, añade la variable de entorno:
   - **Key**: `NEXT_PUBLIC_API_URL`
   - **Value**: `http://IP_DE_TU_VPS:3000`
4. Abre la URL de Vercel. Deberías ver un recuadro indicando "Hello World!" en verde, confirmando la comunicación Full Stack.