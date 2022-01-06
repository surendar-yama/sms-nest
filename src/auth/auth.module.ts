import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy.service';

@Module({
  imports:[UsersModule, PassportModule],
  providers: [AuthService,LocalStrategy],
})
export class AuthModule {}