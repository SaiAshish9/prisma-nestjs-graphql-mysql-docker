import { PrismaModule } from './prisma.module';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';

@Module({
    imports:[PrismaModule],
    providers:[UserService],
    exports:[UserService]
})
export class UserModule{}