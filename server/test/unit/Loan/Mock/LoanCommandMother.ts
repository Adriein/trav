import {
    CreateLoanApplicationCommand
} from "@loan/LoanApplication/Application/CreateLoanApplication/CreateLoanApplicationCommand";

export class LoanCommandMother {
    public static standardCreateLoanApplicationCommand(): CreateLoanApplicationCommand {
        return new CreateLoanApplicationCommand(
            "1818fea3-52fa-4821-b130-ff40a06a8d58",
            "mock-name",
            "mock@gmail.com",
            10000,
            12,
            5000
        );
    }

    public static wrongIdFormatCreateLoanApplicationCommand(): CreateLoanApplicationCommand {
        return new CreateLoanApplicationCommand(
            "wrong-format",
            "mock-name",
            "mock@gmail.com",
            10000,
            12,
            5000
        );
    }

    public static wrongEmailFormatCreateLoanApplicationCommand(): CreateLoanApplicationCommand {
        return new CreateLoanApplicationCommand(
            "1818fea3-52fa-4821-b130-ff40a06a8d58",
            "mock-name",
            "mock-wrong-email",
            10000,
            12,
            5000
        );
    }
}