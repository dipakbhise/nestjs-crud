import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
