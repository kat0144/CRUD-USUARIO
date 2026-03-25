import { IsString,  IsNotEmpty, IsNumber, IsOptional} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdressDto {
    @ApiProperty({
        example: 'Rua T-Numero',
        description: 'rua'

    })
    @IsString()
    @IsNotEmpty()
    street: string;


    @ApiProperty({
        example: '1175',
        description: 'numero da rua'

    })
    @IsNotEmpty()
    @IsNumber()
    number: number;

    @ApiProperty({
        example: 'nome da cidade',
        description: 'nome da cidade'

    })
    @IsString()
    @IsNotEmpty()
    city: string;

    @ApiProperty({
        example: 'estado',
        description: 'nome do estado'

    })
    @IsString()
    @IsNotEmpty()
    state: string;

    @ApiProperty({
        example: 'cep',
        description: 'cep'

    })
    @IsString()
    @IsNotEmpty()
    zipCode: string;

    @ApiProperty({
        example: 'id do user',
        description: 'cep'

    })


    @IsString()
    @IsOptional() 
    userId?: string;


}
