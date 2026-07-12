import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller define que esta clase maneja peticiones HTTP.
// Si pusiéramos @Controller('users'), manejaría las peticiones a /users.
@Controller()
export class AppController {
  // Inyección de dependencias: NestJS automáticamente le pasa una instancia de AppService
  // al controlador. La palabra "private readonly" crea la propiedad this.appService.
  constructor(private readonly appService: AppService) {}

  // @Get() significa que esta función responderá a las peticiones GET a la ruta base (/).
  @Get()
  getHello(): string {
    // En lugar de tener la lógica aquí, delegamos el trabajo al Servicio (appService).
    // Esto mantiene el controlador limpio, enfocándose solo en recibir peticiones y devolver respuestas.
    return this.appService.getHello();
  }
}
