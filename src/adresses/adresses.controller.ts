import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('adresses') // Agrupa os endpoints sob a tag 'adresses' no Swagger
@Controller('adresses')
export class AdressesController {
  constructor(private readonly adressesService: AdressesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo endereço' })
  @ApiResponse({ status: 201, description: 'Endereço criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createAdressDto: CreateAdressDto) {
    return this.adressesService.create(createAdressDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os endereços' })
  findAll() {
    return this.adressesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um endereço pelo ID' })
  findOne(@Param('id') id: string) {
    return this.adressesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um endereço' })
  update(@Param('id') id: string, @Body() updateAdressDto: UpdateAdressDto) {
    return this.adressesService.update(id, updateAdressDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um endereço' })
  remove(@Param('id') id: string) {
    return this.adressesService.remove(id);
  }
}