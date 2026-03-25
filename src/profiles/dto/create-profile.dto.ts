import { IsString,  IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
    @ApiProperty({
        example: 'Khatlleen Sobrenome',
        description: 'o nome do perfil'

    })
    @IsString()
    @IsNotEmpty()
    name: string;


    

}

