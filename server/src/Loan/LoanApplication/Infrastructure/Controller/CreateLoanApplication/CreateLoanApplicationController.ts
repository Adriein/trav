import {Body, Controller, HttpStatus, Post, Res} from "@nestjs/common";
import {CommandBus} from "@nestjs/cqrs";
import {
    CreateLoanApplicationRequest
} from "@loan/LoanApplication/Infrastructure/Controller/CreateLoanApplication/CreateLoanApplicationRequest";
import {Response} from 'express';
import {PrestaloApiResponse} from "@src/PrestaloApiResponse";
import {
    CreateLoanApplicationCommand
} from "@loan/LoanApplication/Application/CreateLoanApplication/CreateLoanApplicationCommand";
import {
    CreateLoanApplicationResponse
} from "@loan/LoanApplication/Infrastructure/Controller/CreateLoanApplication/CreateLoanApplicationResponse";

@Controller()
export class CreateLoanApplicationController {
    constructor(private readonly commandBus: CommandBus) {
    }

    @Post('/api/loans')
    public async create(
        @Body() body: CreateLoanApplicationRequest,
        @Res() res: Response): Promise<Response<any, Record<string, any>>> {
        try {
            const command = new CreateLoanApplicationCommand(
                body.id,
                body.name,
                body.email,
                body.amountRequested,
                body.termInMonths,
                body.monthlyIncome
            );

            const response = await this.commandBus.execute(command);

            const apiResponse = new PrestaloApiResponse<CreateLoanApplicationResponse[]>(response, {
                success: true,
                error: null,
            });

            return res.status(HttpStatus.OK).json(apiResponse);
        } catch (error: any) {

            const errorResponse = new PrestaloApiResponse(null, {
                success: false,
                error: error.message,
            });

            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(errorResponse);
        }
    }
}