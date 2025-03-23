export interface LoanApplication {
    id: string;
    name: string;
    email: string;
    amountRequested: number;
    termInMonths: number;
    monthlyIncome: number;
}