import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherController } from './controller/weather.controller';
import { WeatherService } from './service/weather.service';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './models/user.entity';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST_NAME,
      port: 5432,
      username: process.env.USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [UserEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    JwtModule.register({
      secret: 'decoder321',
      signOptions: { expiresIn: '300s' },
    }),
  ],
  controllers: [WeatherController, AuthController],
  providers: [WeatherService, AuthService],
})
export class AppModule {}
