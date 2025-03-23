import {EmailFormatError} from "@shared/Domain/Error/EmailFormatError";

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export class EmailVo {
    constructor(private _email: string) {
        if (this.validate(_email)) {
            throw new EmailFormatError();
        }
    }

    public get value(): string {
        return this._email;
    }

    protected validate(email: string): boolean {
        return !EMAIL_REGEX.test(email.trim());
    }
}