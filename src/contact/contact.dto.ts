import { IsDate, IsEnum, IsNumber, IsString, MaxLength, MinLength } from 'class-validator'

export class AddContactsDto {
  @IsString()
  @MinLength(5)
  @MaxLength(30)
  name: string

  @IsNumber()
  @MinLength(10)
  @MaxLength(12)
  phone: number

  @IsString()
  city: string

  @IsDate()
  dateOfBirth: Date
}
