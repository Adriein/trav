import { Module } from '@nestjs/common/decorators';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {ConfigService} from "@nestjs/config";

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: async (config: ConfigService): Promise<{ uri: string }> => {
                mongoose.set('strictQuery', true);
                return {
                    uri: `${config.get<string>('MONGO_URI')}`,
                };
            },
            inject: [ConfigService],
        }),
    ],
})
export class MongoDatabaseModule {}