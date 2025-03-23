import {Controller, Get, HttpStatus, Res} from "@nestjs/common";
import {QueryBus} from "@nestjs/cqrs";
import {PrestaloApiResponse} from "@src/PrestaloApiResponse";
import {GetLoanApplicationsQuery} from "@loan/LoanApplication/Application/GetLoanApplications/GetLoanApplicationsQuery";
import {Response} from 'express';

@Controller()
export class GetLoanApplicationsController {
    constructor(private readonly queryBus: QueryBus) {
    }

    @Get('/api/loans')
    public async get(
        @Res() res: Response,
    ): Promise<Response<any, Record<string, any>>> {
        try {
            const query = new GetLoanApplicationsQuery()

            const response = await this.queryBus.execute(query);

            const apiResponse = new PrestaloApiResponse(response, {
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