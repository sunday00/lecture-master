import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OptionRepository } from './option.repository';
import { Option } from './models/option.entity';
import { OptionCreateDto } from './models/option.create.dto';
import { Question } from '../question/models/question.entity';
import { QuestionRepository } from '../question/question.repository';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private readonly repository: OptionRepository,
    @InjectRepository(Question)
    private readonly questionRepository: QuestionRepository,
  ) {}

  async store(dto: OptionCreateDto): Promise<Option> {
    const question = await this.questionRepository.findOneBy({
      id: dto.questionId,
    });
    let newOption = await this.repository.create(dto);

    newOption.question = question;
    newOption = await this.repository.save(newOption);

    return newOption;
  }
}
