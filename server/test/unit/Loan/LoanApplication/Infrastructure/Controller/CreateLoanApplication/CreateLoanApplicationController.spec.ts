import {
    CreateLoanApplicationController
} from "@loan/LoanApplication/Infrastructure/Controller/CreateLoanApplication/CreateLoanApplicationController";
import {CommandBus, CqrsModule} from "@nestjs/cqrs";
import {Response as ExpressResponse} from 'express';
import {LoanApplicationRequestMother} from "@test/unit/Loan/Mock/LoanApplicationRequestMother";
import {LoanCommandMother} from "@test/unit/Loan/Mock/LoanCommandMother";
import {Test} from "@nestjs/testing";
import {INestApplication} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";

describe('AppController', (): void => {
    let app: INestApplication;
    let controller: CreateLoanApplicationController;
    let bus: CommandBus;

    beforeEach(async () => {
        bus = { execute: jest.fn() } as unknown as CommandBus;
        controller = new CreateLoanApplicationController(bus);

        const appModule = await Test.createTestingModule({
            imports: [
                CqrsModule,
                ConfigModule.forRoot({isGlobal: true}),
            ]
        }).compile();

        app = appModule.createNestApplication();

        await app.init();
    });

    describe('CreateLoanApplicationController', (): void => {
        it('Should dispatch a CreateLoanApplicationCommand', async (): Promise<void> => {
            await controller.create(
                LoanApplicationRequestMother.standardCreateLoanApplicationRequestBody(),
                { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as  ExpressResponse
            );

            expect(bus.execute).toHaveBeenCalledTimes(1);
            expect(bus.execute).toHaveBeenCalledWith(LoanCommandMother.standardCreateLoanApplicationCommand());
        });
    });
});