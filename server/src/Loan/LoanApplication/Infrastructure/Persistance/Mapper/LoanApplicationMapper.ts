import {IMapper} from "@shared/Domain/Interfaces/IMapper";
import {LoanApplication} from "@loan/LoanApplication/Domain/Entity/LoanApplication";
import {
    MongoLoanApplicationModel
} from "@loan/LoanApplication/Infrastructure/Persistance/Model/MongoLoanApplicationModel";
import {Id} from "@shared/Domain/ValueObject/Id";
import {Name} from "@shared/Domain/ValueObject/Name";
import {EmailVo} from "@shared/Domain/ValueObject/EmailVo";
import {AmountRequested} from "@shared/Domain/ValueObject/AmountRequested";
import {TermInMonths} from "@shared/Domain/ValueObject/TermInMonths";
import {MonthlyIncome} from "@shared/Domain/ValueObject/MonthlyIncome";

export class LoanApplicationMapper implements IMapper<LoanApplication, MongoLoanApplicationModel> {
    toDomain(model: MongoLoanApplicationModel): LoanApplication {
        const id = new Id(model._id);
        const name = new Name(model.name);
        const email = new EmailVo(model.email);
        const amountRequested = new AmountRequested(model.amount_requested);
        const termInMonths = new TermInMonths(model.term_in_months);
        const monthlyIncome = new MonthlyIncome(model.monthly_income);
        const createdAt = new Date(model.created_at);
        const updatedAt = new Date(model.updated_at);

        return new LoanApplication(
            id,
            name,
            email,
            amountRequested,
            termInMonths,
            monthlyIncome,
            createdAt,
            updatedAt
        );
    }

    toModel(entity: LoanApplication): MongoLoanApplicationModel {
        const loanApplicationModel = new MongoLoanApplicationModel();

        loanApplicationModel._id = entity.id().value;
        loanApplicationModel.name = entity.name().value;
        loanApplicationModel.email = entity.email().value;
        loanApplicationModel.amount_requested = entity.amountRequested().value;
        loanApplicationModel.term_in_months = entity.termInMonths().value;
        loanApplicationModel.monthly_income = entity.monthlyIncome().value;
        loanApplicationModel.created_at = entity.createdAt();
        loanApplicationModel.updated_at = entity.updatedAt();

        return loanApplicationModel;
    }

}