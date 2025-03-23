import {Name} from "@shared/Domain/ValueObject/Name";
import {EmailVo} from "@shared/Domain/ValueObject/EmailVo";
import {Id} from "@shared/Domain/ValueObject/Id";
import {AmountRequested} from "@shared/Domain/ValueObject/AmountRequested";
import {TermInMonths} from "@shared/Domain/ValueObject/TermInMonths";
import {MonthlyIncome} from "@shared/Domain/ValueObject/MonthlyIncome";

export class LoanApplication {
    constructor(
        private _id: Id,
        private _name: Name,
        private _email: EmailVo,
        private _amountRequested: AmountRequested,
        private _termInMonths: TermInMonths,
        private _monthlyIncome: MonthlyIncome,
        private _createdAt?: Date,
        private _updatedAt?: Date
    ) {}

    public id(): Id {
        return this._id;
    }

    public name(): Name {
        return this._name;
    }

    public email(): EmailVo {
        return this._email;
    }

    public amountRequested(): AmountRequested {
        return this._amountRequested;
    }

    public termInMonths(): TermInMonths {
        return this._termInMonths;
    }

    public monthlyIncome(): MonthlyIncome {
        return this._monthlyIncome;
    }

    public createdAt(): Date {
        return this._createdAt;
    }

    public updatedAt(): Date {
        return this._updatedAt;
    }
}
