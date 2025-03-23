import {ILoanApplicationRepository} from "@loan/LoanApplication/Domain/Repository/ILoanApplicationRepository";
import {Injectable} from "@nestjs/common";
import {LoanApplication} from "@loan/LoanApplication/Domain/Entity/LoanApplication";
import {InjectModel} from "@nestjs/mongoose";
import {
    MongoLoanApplicationModel
} from "@loan/LoanApplication/Infrastructure/Persistance/Model/MongoLoanApplicationModel";
import {Error, Model, Promise} from "mongoose";
import {LoanApplicationMapper} from "@loan/LoanApplication/Infrastructure/Persistance/Mapper/LoanApplicationMapper";

@Injectable()
export class MongoLoanApplicationRepository implements ILoanApplicationRepository {
    constructor(
        private readonly mapper: LoanApplicationMapper,
        @InjectModel(MongoLoanApplicationModel.name)
        private readonly mongoLoanApplicationModel: Model<MongoLoanApplicationModel>
    ) {
    }

    public async save(entity: LoanApplication): Promise<void> {
        try {
            const loanApplication = this.mapper.toModel(entity);

            await this.mongoLoanApplicationModel.create(loanApplication);
        } catch (error: any) {
            throw new Error(`Mongoose Loan Application Repository Error - ${error}`);
        }
    }

    public async find(): Promise<LoanApplication[]> {
        try {
            const result = await this.mongoLoanApplicationModel
                .find()
                .sort({created_at: 'desc'});

            if (!result.length) {
                return [];
            }

            const loanApplications: LoanApplication[] = [];

            for (const event of result) {
                loanApplications.push(this.mapper.toDomain(event));
            }

            return loanApplications;
        } catch (error: any) {
            throw new Error(`Mongoose Loan Application Repository Error - ${error}`);
        }
    }
}