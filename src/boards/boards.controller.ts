import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { NotFoundInterceptor } from 'src/exceptions/NotFoundInterceptor';
import { Result } from 'src/results/Result';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateDto } from './dto/create.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAll(): Board[] {
    return this.boardService.getAll();
  }

  @Get('/:id')
  @UseInterceptors(new NotFoundInterceptor('project not found'))
  getOneById(@Param('id') id: string): Board {
    return this.boardService.getOneById(id);
  }

  @Post()
  create(@Body() CreateDto: CreateDto): Board {
    return this.boardService.create(CreateDto);
  }

  @Delete('/:id')
  deleteOneById(@Param('id') id: string): Result {
    return this.boardService.deleteOneById(id);
  }
}
