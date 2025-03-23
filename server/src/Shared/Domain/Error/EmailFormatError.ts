import {DomainError} from "@shared/Domain/Error/DomainError";

export class EmailFormatError extends DomainError {
    statusCode = 400;

    constructor() {
        super('Email format is incorrect');

        Object.setPrototypeOf(this, EmailFormatError.prototype);
    }

    serialize() {
        return [
            {
                message: 'Email format is incorrect',
            },
        ];
    }
}