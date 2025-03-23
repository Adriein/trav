import {NumberVo} from "@shared/Domain/ValueObject/NumberVo";

export class AmountRequested extends NumberVo {
    constructor(name: number) {
        super(name);
    }
}