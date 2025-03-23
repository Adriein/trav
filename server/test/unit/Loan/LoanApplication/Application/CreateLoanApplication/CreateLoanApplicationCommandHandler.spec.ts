import {
    CreateLoanApplicationCommandHandler
} from "@loan/LoanApplication/Application/CreateLoanApplication/CreateLoanApplicationCommandHandler";
import {
    CreateLoanApplicationCommand
} from "@loan/LoanApplication/Application/CreateLoanApplication/CreateLoanApplicationCommand";
import {LoanCommandMother} from "@test/unit/Loan/Mock/LoanCommandMother";
import {ILoanApplicationRepository} from "@loan/LoanApplication/Domain/Repository/ILoanApplicationRepository";
import {LoanResponseMother} from "@test/unit/Loan/Mock/LoanResponseMother";
import {LoanApplicationMother} from "@test/unit/Loan/Mock/LoanApplicationMother";
import {EmailFormatError} from "@shared/Domain/Error/EmailFormatError";



describe('CreateLoanApplicationCommandHandler', (): void => {
    let handler: CreateLoanApplicationCommandHandler;
    let repository: ILoanApplicationRepository;

    beforeEach(async(): Promise<void> => {
        jest.useFakeTimers().setSystemTime(new Date('2025-03-23T12:00:00Z').getTime());

        repository = {
            save: jest.fn(),
            find: jest.fn()
        } as ILoanApplicationRepository;

        handler = new CreateLoanApplicationCommandHandler(repository);
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('Should return a correct loan application list', async (): Promise<void> => {
        const command: CreateLoanApplicationCommand = LoanCommandMother.standardCreateLoanApplicationCommand();

        const response = await handler.execute(command);

        expect(response).toStrictEqual(LoanResponseMother.createLoanApplicationListMock());
    });

    it('Should save the loan application into db', async (): Promise<void> => {
        const command: CreateLoanApplicationCommand = LoanCommandMother.standardCreateLoanApplicationCommand();

        const response = await handler.execute(command);

        expect(repository.save).toHaveBeenCalledTimes(1);
        expect(repository.save).toHaveBeenCalledWith(LoanApplicationMother.standardLoanApplication());
    });

    it('Should throw an Id format error when the uuid has not the correct format', async (): Promise<void> => {
        const command: CreateLoanApplicationCommand = LoanCommandMother.wrongIdFormatCreateLoanApplicationCommand();

        await expect(handler.execute(command)).rejects.toThrowError(new Error('Incorrect ID format'))
    });

    it('Should throw an Email format error when the email has not the correct format', async (): Promise<void> => {
        const command: CreateLoanApplicationCommand = LoanCommandMother.wrongEmailFormatCreateLoanApplicationCommand();

        await expect(handler.execute(command)).rejects.toThrowError(EmailFormatError)
    });
});