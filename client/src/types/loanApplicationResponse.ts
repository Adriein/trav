export interface LoanApplicationResponse {
    id: string;
    name: string;
    email: string;
    amountRequested: number;
    termInMonths: number;
    monthlyIncome: number;
    createdAt: string;
    updatedAt: string;
}