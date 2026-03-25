import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';

@Injectable()
export class AdressesService {
  constructor(private prisma: PrismaService) {}
  create(createAdressDto: CreateAdressDto) {
    return this.prisma.adress.create({ data: createAdressDto});
  }

  findAll() {
    return this.prisma.adress.findMany();
  }

  findOne(id: string) {
    return this.prisma.adress.findUnique({where: {id}});
  }

  update(id: string, updateAdressDto: UpdateAdressDto) {
    return this.prisma.adress.update({where: {id},
    data: updateAdressDto});
  }

  remove(id: string) {
    return this.prisma.adress.delete({where: {id}});
  }
}
