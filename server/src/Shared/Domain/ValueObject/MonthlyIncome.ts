import {NumberVo} from "@shared/Domain/ValueObject/NumberVo";

export class MonthlyIncome extends NumberVo {
    constructor(name: number) {
        super(name);
    }
}