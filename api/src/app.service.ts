import { Injectable } from '@nestjs/common';

// @Injectable() es un decorador que marca la clase como un proveedor (provider)
// que puede ser administrado por el sistema de Inyección de Dependencias (DI) de NestJS.
@Injectable()
export class AppService {
  // Aquí es donde reside la lógica de negocio.
  // En un proyecto real, aquí harías consultas a la base de datos usando Prisma.
  getHello(): string {
    return 'Hello World! (Backend corriendo)';
  }
}
