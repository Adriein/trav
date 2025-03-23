import {IsEmail, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateLoanApplicationRequest {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNumber()
    @IsNotEmpty()
    amountRequested: number;

    @IsNumber()
    @IsNotEmpty()
    termInMonths: number;

    @IsNumber()
    @IsNotEmpty()
    monthlyIncome: number
}
