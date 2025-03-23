import {
    CreateLoanApplicationRequest
} from "@loan/LoanApplication/Infrastructure/Controller/CreateLoanApplication/CreateLoanApplicationRequest";

export class LoanApplicationRequestMother {
    public static standardCreateLoanApplicationRequestBody(): CreateLoanApplicationRequest {
        const body = new CreateLoanApplicationRequest();
        body.id = "1818fea3-52fa-4821-b130-ff40a06a8d58";
        body.name = "mock-name";
        body.email = "mock@gmail.com";
        body.amountRequested = 10000;
        body.termInMonths = 12;
        body.monthlyIncome = 5000;

        return body;
    }
}