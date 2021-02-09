import { PostModule } from './post.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user.module';

@Module({
  imports: [UserModule,PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
