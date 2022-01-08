import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Auth } from 'src/auth/decorators/Auth.decorator';
import { User } from 'src/auth/user.entity';
import { Result } from 'src/results/Result';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateDto } from './dto/create.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdateDto } from './dto/update.dto';
import { BoardIdValidationPipe } from './pipes/board-id-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAll(): Promise<Board[]> {
    return this.boardService.getAll();
  }

  @Get('/my')
  @UseGuards(AuthGuard())
  getAllByAuth(@Auth() user: User): Promise<Board[]> {
    return this.boardService.getAllByAuth(user);
  }

  @Get('/:id')
  getOneById(@Param('id', ParseIntPipe) id: number): Promise<Board> {
    return this.boardService.getOneById(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  create(@Body() CreateDto: CreateDto, @Auth() user: User): Promise<Board> {
    return this.boardService.create(CreateDto, user);
  }

  @Patch('/:id')
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  updateOneById(
    @Param('id', BoardIdValidationPipe) id: number,
    @Body() UpdateDto: UpdateDto,
  ): Promise<Board> {
    return this.boardService.updateOneById(id, UpdateDto);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard())
  deleteOneById(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    return this.boardService.deleteOneById(id);
  }
}
