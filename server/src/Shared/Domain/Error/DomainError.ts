export abstract class DomainError extends Error {
    public abstract statusCode: number;

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, DomainError.prototype);
    }

    abstract serialize(): {
        message: string;
    }[];
}