import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {
    CreateLoanApplicationCommand
} from "@loan/LoanApplication/Application/CreateLoanApplication/CreateLoanApplicationCommand";
import {Id} from "@shared/Domain/ValueObject/Id";
import {Name} from "@shared/Domain/ValueObject/Name";
import {EmailVo} from "@shared/Domain/ValueObject/EmailVo";
import {LoanApplication} from "@loan/LoanApplication/Domain/Entity/LoanApplication";
import {AmountRequested} from "@shared/Domain/ValueObject/AmountRequested";
import {TermInMonths} from "@shared/Domain/ValueObject/TermInMonths";
import {MonthlyIncome} from "@shared/Domain/ValueObject/MonthlyIncome";
import {Inject} from "@nestjs/common";
import {ILoanApplicationRepository} from "@loan/LoanApplication/Domain/Repository/ILoanApplicationRepository";

type MockOfferType = {
    id: string;
    bankName: string;
    approvedAmount: number;
    monthsPeriod: number;
    interestTae: number;
    monthlyCost: number;
    offerMockUrl: string;
}

@CommandHandler(CreateLoanApplicationCommand)
export class CreateLoanApplicationCommandHandler implements ICommandHandler<CreateLoanApplicationCommand> {
    constructor(@Inject('ILoanApplicationRepository') private readonly repository: ILoanApplicationRepository) {
    }

    public async execute(command: CreateLoanApplicationCommand): Promise<MockOfferType[]> {
        const id = new Id(command.id);
        const name = new Name(command.name);
        const email = new EmailVo(command.email);
        const amountRequested = new AmountRequested(command.amountRequested);
        const termInMonths = new TermInMonths(command.termInMonths);
        const monthlyIncome = new MonthlyIncome(command.monthlyIncome);
        const createdAt = new Date();
        const updatedAt = new Date();

        const loanApplication = new LoanApplication(
            id,
            name,
            email,
            amountRequested,
            termInMonths,
            monthlyIncome,
            createdAt,
            updatedAt
        );

        await this.repository.save(loanApplication);

        return this.mockOffers();
    }

    private mockOffers(): MockOfferType[] {
        return [
            {
                id: '1818fea3-52fa-4821-b130-ff40a06a8d58',
                bankName: 'Banco Estrella',
                approvedAmount: 25000,
                monthsPeriod: 24,
                interestTae: 3.5,
                monthlyCost: 1100,
                offerMockUrl: '',
            },
            {
                id: 'b29c55c0-17de-4f0a-9179-f7c9c063c754',
                bankName: 'Financiera Soluciones',
                approvedAmount: 18000,
                monthsPeriod: 36,
                interestTae: 4.2,
                monthlyCost: 650,
                offerMockUrl: '',
            },
            {
                id: '64132124-4dfd-4569-a79f-86e4f6ab4978',
                bankName: 'Crédito Rápido',
                approvedAmount: 30000,
                monthsPeriod: 12,
                interestTae: 5.0,
                monthlyCost: 2700,
                offerMockUrl: '',
            }
        ]
    }
}