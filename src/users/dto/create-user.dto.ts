import { IsString, MinLength, IsNotEmpty, IsEmail, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        example: 'Khatlleen Sobrenome',
        description: 'o nome do usuario'

    })
    @IsString()
    @IsNotEmpty()
    name: string;


    @ApiProperty({
        example: 'khatlleen@email.com',
        description: 'o email do usuario'

    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        example: 'senha12345',
        description: 'a senha do usuario'

    })

    @IsString()
    @MinLength(8)
    password: string;

    @ApiProperty({
        example: 'profileid',
        description: 'o id do profile'

    })

  @IsString()
  @IsOptional() 
  profileId?: string;

}
