import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class GlobalValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata, value)

    // maybe email duplicated,
    // very complex validation rule...

    return value
  }
}
