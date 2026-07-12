import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// El decorador @Module le dice a NestJS cómo construir esta parte de la aplicación.
// AppModule es el módulo raíz. Aquí conectarás otros módulos como UsersModule o TasksModule.
@Module({
  imports: [], // Aquí importas módulos de otras partes de tu app o de librerías externas (ej. PrismaModule)
  controllers: [AppController], // Los controladores definen las Rutas (Endpoints) HTTP.
  providers: [AppService], // Los providers (servicios) contienen la lógica y pueden inyectarse en los controladores.
})
export class AppModule {}
