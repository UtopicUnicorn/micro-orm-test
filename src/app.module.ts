import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: ['./src/entity.ts'],
      entitiesTs: ['./dist/entity.js'],
      dbName: 'my-db-name.mongodb',
      type: 'mongo',
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
