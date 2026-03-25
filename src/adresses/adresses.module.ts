import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module'
import { AdressesService } from './adresses.service';
import { AdressesController } from './adresses.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AdressesController],
  providers: [AdressesService],
})
export class AdressesModule {}
