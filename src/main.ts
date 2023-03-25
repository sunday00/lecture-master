import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe, VersioningType } from '@nestjs/common'
import { swaggerConfig } from './apps/configs/swagger.config'

const HARDCODE_CONFIGS = {
  port: 3000,
  version: '1',
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: HARDCODE_CONFIGS.version,
  })

  swaggerConfig('swagger', HARDCODE_CONFIGS.version, app)

  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  await app.listen(HARDCODE_CONFIGS.port)
}
bootstrap()
  .then(() => console.log(`Server is running on : ${HARDCODE_CONFIGS.port}`))
  .catch((e) => console.error(e))
