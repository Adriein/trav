export interface CreateLoanApplicationResponse {
    id: string;
    bankName:string;
    approvedAmount: number;
    monthsPeriod: number;
    interestTae: number;
    monthlyCost: number;
    offerMockUrl: string;
}