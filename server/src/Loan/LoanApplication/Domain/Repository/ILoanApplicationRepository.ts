import {IRepository} from "@shared/Domain/Interfaces/IRepository";
import {LoanApplication} from "@loan/LoanApplication/Domain/Entity/LoanApplication";


export interface ILoanApplicationRepository extends IRepository<LoanApplication> {
}