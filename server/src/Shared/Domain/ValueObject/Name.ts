import {StringVo} from "@shared/Domain/ValueObject/StringVo";


export class Name extends StringVo {
    constructor(name: string) {
        super(name);
    }
}
