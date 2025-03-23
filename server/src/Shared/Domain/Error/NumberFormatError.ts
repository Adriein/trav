import {DomainError} from "@shared/Domain/Error/DomainError";

export class NumberFormatError extends DomainError {
    statusCode = 400;

    constructor() {
        super('Number format error');

        Object.setPrototypeOf(this, NumberFormatError.prototype);
    }

    serialize() {
        return [
            {
                message: 'Number format error',
            },
        ];
    }
}