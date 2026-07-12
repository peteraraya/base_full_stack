import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Esta es la función principal que inicializa toda la aplicación de NestJS.
// Es similar al 'index.js' o 'server.js' en Express.
async function bootstrap() {
  // NestFactory.create() toma el módulo principal (AppModule) y construye el árbol de dependencias.
  const app = await NestFactory.create(AppModule);

  // Aquí podemos configurar CORS, validaciones globales, interceptores, etc.
  // app.enableCors();

  // Finalmente, la aplicación escucha en el puerto definido en las variables de entorno, o en el 3000 por defecto.
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
