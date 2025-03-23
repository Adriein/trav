import {LoanApplication} from "@loan/LoanApplication/Domain/Entity/LoanApplication";

export class GetLoanApplicationsResponse {
    public static toResponse(loanApplication: LoanApplication): GetLoanApplicationsResponse {
        return new GetLoanApplicationsResponse(
            loanApplication.id().value,
            loanApplication.name().value,
            loanApplication.email().value,
            loanApplication.amountRequested().value,
            loanApplication.termInMonths().value,
            loanApplication.monthlyIncome().value,
            loanApplication.createdAt(),
            loanApplication.updatedAt(),
        )
    }

    constructor(
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly amountRequested: number,
        readonly termInMonths: number,
        readonly monthlyIncome: number,
        readonly createdAt: Date,
        readonly updatedAt: Date,
    ) {
    }
}