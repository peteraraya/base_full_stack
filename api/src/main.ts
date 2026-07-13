import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Esta es la función principal que inicializa toda la aplicación de NestJS.
// Es similar al 'index.js' o 'server.js' en Express.
async function bootstrap() {
  // NestFactory.create() toma el módulo principal (AppModule) y construye el árbol de dependencias.
  const app = await NestFactory.create(AppModule);

  // Configuración de CORS habilitada para permitir peticiones del frontend
  app.enableCors({
    origin: '*', // En producción puedes limitarlo a tu dominio de Vercel
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => {
  console.error('Error during bootstrap:', err);
  process.exit(1);
});
