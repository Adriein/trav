export class Id {
    constructor(private _value: any) {
        if (this.validate(this._value)) {
            throw new Error('Incorrect ID format');
        }
    }

    public get value(): any {
        return this._value;
    }

    protected validate(value: string): boolean {
        const UUID_V4_REGEX =
            /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

        return !UUID_V4_REGEX.test(value);
    }
}