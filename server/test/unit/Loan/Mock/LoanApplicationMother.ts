import {LoanApplication} from "@loan/LoanApplication/Domain/Entity/LoanApplication";
import {Id} from "@shared/Domain/ValueObject/Id";
import {Name} from "@shared/Domain/ValueObject/Name";
import {EmailVo} from "@shared/Domain/ValueObject/EmailVo";
import {AmountRequested} from "@shared/Domain/ValueObject/AmountRequested";
import {TermInMonths} from "@shared/Domain/ValueObject/TermInMonths";
import {MonthlyIncome} from "@shared/Domain/ValueObject/MonthlyIncome";

export class LoanApplicationMother {
    public static standardLoanApplication(): LoanApplication {
        return new LoanApplication(
            new Id("1818fea3-52fa-4821-b130-ff40a06a8d58"),
            new Name("mock-name"),
            new EmailVo("mock@gmail.com"),
            new AmountRequested(10000),
            new TermInMonths(12),
            new MonthlyIncome(5000),
            new Date(),
            new Date()
        );
    }
}