import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AdressesModule } from './adresses/adresses.module';

@Module({
  imports: [PrismaModule, UsersModule, ProfilesModule, AdressesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
