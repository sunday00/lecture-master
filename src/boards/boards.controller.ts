import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
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
  getAll(): Board[] {
    return this.boardService.getAll();
  }

  @Get('/:id')
  getOneById(@Param('id') id: string): Board {
    return this.boardService.getOneById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() CreateDto: CreateDto): Board {
    return this.boardService.create(CreateDto);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  updateOneById(
    @Param('id', BoardIdValidationPipe) id: string,
    @Body() UpdateDto: UpdateDto,
  ): Board {
    return this.boardService.updateOneById(id, UpdateDto);
  }

  @Delete('/:id')
  deleteOneById(@Param('id') id: string): Result {
    return this.boardService.deleteOneById(id);
  }
}
