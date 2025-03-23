import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetLoanApplicationsQuery} from "@loan/LoanApplication/Application/GetLoanApplications/GetLoanApplicationsQuery";
import {Inject} from "@nestjs/common";
import {ILoanApplicationRepository} from "@loan/LoanApplication/Domain/Repository/ILoanApplicationRepository";
import {LoanApplication} from "@loan/LoanApplication/Domain/Entity/LoanApplication";
import {
    GetLoanApplicationsResponse
} from "@loan/LoanApplication/Application/GetLoanApplications/GetLoanApplicationsResponse";

@QueryHandler(GetLoanApplicationsQuery)
export class GetLoanApplicationsQueryHandler implements IQueryHandler<GetLoanApplicationsQuery> {
    constructor(@Inject('ILoanApplicationRepository') private readonly repository: ILoanApplicationRepository) {
    }

    public async execute(query: GetLoanApplicationsQuery): Promise<GetLoanApplicationsResponse[]> {
        const loanApplications = await this.getLoanApplications();

        const loanApplicationsResponse: GetLoanApplicationsResponse[] = [];

        for (const loanApplication of loanApplications) {
            loanApplicationsResponse.push(GetLoanApplicationsResponse.toResponse(loanApplication));
        }

        return loanApplicationsResponse;
    }

    private async getLoanApplications(): Promise<LoanApplication[]> {
        return await this.repository.find();
    }
}