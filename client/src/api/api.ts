import {LoanApplication} from "@/types/loanApplication";
import {Offer} from "@/types/offer";
import {LoanApplicationResponse} from "@/types/loanApplicationResponse";
import {ApiResponse} from "@/types/apiResponse";

const API_URL = "http://localhost:3000/api";

export const fetchLoanApplications = async (): Promise<LoanApplicationResponse> => {
    try {
        const response: Response = await fetch(`${API_URL}/loans`, {method: 'GET'})

        const apiResponse: ApiResponse = await response.json();

        return apiResponse.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Error fetching requests");
    }
}

export const createLoanApplication = async (loanApplication: LoanApplication): Promise<Offer[]> => {
    try {
        const response: Response = await fetch(`${API_URL}/loans`, {
            method: 'POST',
            body: JSON.stringify(loanApplication),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const apiResponse: ApiResponse = await response.json();

        return apiResponse.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Error fetching requests");
    }
}