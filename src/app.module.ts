import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { CommonModuleModule } from './common-module/common-module.module';
import { CommonModule } from './common/common.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [PremierModule, TodoModule, CommonModuleModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
