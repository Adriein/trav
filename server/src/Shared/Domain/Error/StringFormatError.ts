import {DomainError} from "@shared/Domain/Error/DomainError";

export class StringFormatError extends DomainError {
    statusCode = 400;

    constructor() {
        super('String error format');

        Object.setPrototypeOf(this, StringFormatError.prototype);
    }

    serialize() {
        return [
            {
                message: 'String format error',
            },
        ];
    }
}
