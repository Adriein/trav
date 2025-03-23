export class LoanResponseMother {
    public static createLoanApplicationListMock() {
       return [
           {
               id: '1818fea3-52fa-4821-b130-ff40a06a8d58',
               bankName: 'Banco Estrella',
               approvedAmount: 25000,
               monthsPeriod: 24,
               interestTae: 3.5,
               monthlyCost: 1100,
               offerMockUrl: '',
           },
           {
               id: 'b29c55c0-17de-4f0a-9179-f7c9c063c754',
               bankName: 'Financiera Soluciones',
               approvedAmount: 18000,
               monthsPeriod: 36,
               interestTae: 4.2,
               monthlyCost: 650,
               offerMockUrl: '',
           },
           {
               id: '64132124-4dfd-4569-a79f-86e4f6ab4978',
               bankName: 'Crédito Rápido',
               approvedAmount: 30000,
               monthsPeriod: 12,
               interestTae: 5.0,
               monthlyCost: 2700,
               offerMockUrl: '',
           }
       ];
    }
}