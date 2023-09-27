import { BadRequestException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { RefreshToken } from './entity/refresh-token.entity';
import { DataSource, Repository } from 'typeorm';
import { SignupResDto } from './dto/res.dto';
import { User } from '../user/entity/user.entity';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private datasource: DataSource,
    private userService: UserService,
    private jwtService: JwtService,
    @InjectRepository(RefreshToken)
    private readonly refreshTokenRepository: Repository<RefreshToken>,
  ) {}

  async signup(email: string, password: string): Promise<SignupResDto> {
    const queryRunner = this.datasource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    let err: Error;
    try {
      const user = await this.userService.findOneByEmail(email);
      if (user) {
        throw new BadRequestException('Email is already existed');
        // await queryRunner.rollbackTransaction();
        // await queryRunner.release();
        // res.status(HttpStatus.BAD_REQUEST).send({ message: 'Email is already existed' });
        // return;
      }

      const saltRounds = 10;
      const hash = await bcrypt.hash(password, saltRounds);

      // const newUser = await this.userService.create(email, password);
      const newUser = queryRunner.manager.create(User, { email, password: hash });
      await queryRunner.manager.save(newUser);

      const accessToken = this.generateAccessToken(newUser.id);
      const refreshToken = this.generateRefreshToken(newUser.id);

      // await this.createRefreshTokenUsingUser(newUser.id, refreshToken);
      const refreshTokenEntity = queryRunner.manager.create(RefreshToken, {
        user: { id: newUser.id },
        token: refreshToken,
      });
      await queryRunner.manager.save(refreshTokenEntity);

      await queryRunner.commitTransaction();

      return {
        id: newUser.id,
        accessToken,
        refreshToken,
      };
    } catch (e) {
      await queryRunner.rollbackTransaction();
      err = e;
    } finally {
      await queryRunner.release();
      // if (err !== undefined) res.status(HttpStatus.BAD_REQUEST).send({ message: err.message });
      if (err !== undefined) throw err;
    }
  }

  async signin(email: string, password: string) {
    const user = await this.validateUser(email, password);

    const refreshToken = this.generateRefreshToken(user.id);
    const result = await this.createRefreshTokenUsingUser(user.id, refreshToken);

    return {
      accessToken: this.generateAccessToken(user.id),
      refreshToken,
    };
  }

  private generateAccessToken(userId: string) {
    const payload = { sub: userId, tokenType: 'access' };
    return this.jwtService.sign(payload, { expiresIn: '1d' });
  }

  async refresh(token: string, userId: string) {
    const refreshTokenEntity = await this.refreshTokenRepository.findOneBy({ token });

    if (!refreshTokenEntity) throw new BadRequestException();
    const accessToken = this.generateAccessToken(userId);
    const refreshToken = this.generateRefreshToken(userId);

    refreshTokenEntity.token = refreshToken;
    await this.refreshTokenRepository.save(refreshTokenEntity);

    return { accessToken, refreshToken };
  }

  private generateRefreshToken(id: string) {
    const payload = { sub: id, tokenType: 'refresh' };
    return this.jwtService.sign(payload, { expiresIn: '30d' });
  }

  private async createRefreshTokenUsingUser(id: string, refreshToken: string) {
    let refreshTokenEntity = await this.refreshTokenRepository.findOneBy({ user: { id } });

    if (refreshTokenEntity) {
      refreshTokenEntity.token = refreshToken;
    } else {
      refreshTokenEntity = this.refreshTokenRepository.create({
        user: { id },
        token: refreshToken,
      });
    }

    return await this.refreshTokenRepository.save(refreshTokenEntity);
  }

  private async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findOneByEmail(email);
    if (!user) throw new UnauthorizedException();

    if (!(await bcrypt.compare(password, user.password))) throw new UnauthorizedException();

    return user;
  }
}
