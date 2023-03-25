import { Injectable, NestMiddleware } from '@nestjs/common'

@Injectable()
export class IndexMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('pre mi')
    next()
    console.log('post mi')
    // Nestjs doesn't have post-controller middleware
    // thr middleware only applied pre-controller.
    // 미들웨어에 next 이후에 동작하는 로직을 작성을 하면, 로직 자체는 동작은 한다.
    // 다만, 특히 비동기 동작에서 예상과는 다른 동작을 하므로 주의.

    // 반드시 controller 이후에 동작해야 되는 미들웨어는 인터셉터나 필터를 참고.
  }
}
