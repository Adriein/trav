import {ICommand} from "@nestjs/cqrs";

export class CreateLoanApplicationCommand implements ICommand {
    constructor(
        private readonly _id: string,
        private readonly _name: string,
        private readonly _email: string,
        private readonly _amountRequested: number,
        private readonly _termInMonths: number,
        private readonly _monthlyIncome: number
    ) {
    }


    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get email(): string {
        return this._email;
    }

    public get amountRequested(): number {
        return this._amountRequested;
    }

    public get termInMonths(): number {
        return this._termInMonths;
    }

    public get monthlyIncome(): number {
        return this._monthlyIncome;
    }
}