import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const HARDCODE_CONFIGS = {
  port: 3000,
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(HARDCODE_CONFIGS.port)
}
bootstrap().then(() =>
  console.log(`Server is running on : ${HARDCODE_CONFIGS.port}`),
)
