import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({ collection: "loan_applications" })
export class MongoLoanApplicationModel {
    @Prop({type: String, required: true})
    _id: string;

    @Prop({type: String, required: true})
    name: string;

    @Prop({type: String, required: true})
    email: string;

    @Prop({type: Number, required: true})
    amount_requested: number;

    @Prop({type: Number, required: true})
    term_in_months: number;

    @Prop({type: Number, required: true})
    monthly_income: number;

    @Prop({type: Date, default: Date.now})
    created_at: Date;

    @Prop({type: Date, default: Date.now})
    updated_at: Date;
}

export const MongoLoanApplicationSchema = SchemaFactory.createForClass(MongoLoanApplicationModel);