## swagger
- composer require darkaonline/swagger-lume
- https://stackoverflow.com/questions/45211512/how-to-integrate-swagger-in-lumen-laravel-for-rest-api
- https://www.minatcoding.com/blog/tech-tips/tech-tip-swagger-ui-page-is-empty-in-laravel-lumen
  - https://sudkumar.com/blogs/api-documentation-in-laravel-and-lumen-with-swagger
- https://niceprogrammer.com/lumen-api-tutorial-documentation-using-swagger-ui/

```
php -S localhost:8000 public/index.php
```

- http://localhost:8000/api/documentation

### annotation highlight
- https://marketplace.visualstudio.com/items?itemName=qvtec3.swagger-php-annotation

## current ytb
- https://www.youtube.com/watch?v=pXtB_iswlJM&list=PLfk4OKMgx8uMIPfUElvKU4zbY1otXXPPx

### optional path param
- 스웨거는 optional path param을 공식적으로 지원하지는 않는다.
- https://stackoverflow.com/questions/35011192/how-to-define-an-optional-parameter-in-path-using-swagger
- 실제로 required=false 로 해보면,
  - exists 상태에선 잘 작동하지만,
  - null 상태에서는 {id} 파라미터가 인코딩된 일반 스트링 상태로 요청되는 것을 볼 수 있다.
  - 가장 정확한 방법은 걍 required=true 하나와 param없는 요청 하나 두개를 만들고 description에 잘 적어두자.

### header
- header도 커스텀 헤더는 @header를 넣어봐야 내가 입력할 수 있는게 없다.
- 쉬운 테스트를 위해서는 걍 @param, in=header 를 하면 간단하게 테스트 할 수 있다.
- 아마도 @header는 로그인 이후 강제 유저 토큰을 부여해서 이용가능하도록 하는 모양인데... 현재까지는 param에 넣는게 익숙하긴 함

# middleware
```
public function handle($request, Closure $next)
{
    do_something_middleware_action();

    return $next($request);
}
```
- req -> mid -> cont -> svc -> res

```
public function handle($request, Closure $next)
{
    $res = $next($request);
    
    do_something_middleware_action();

    return $res;
}
```
- req -> cont -> svc -> mid -> res
```
public function terminate($req, $res)
{
    do_something_middleware_action();
}
```
- req -> cont -> svc -> res -> mid
- response까지 보내고 커넥션을 끊으면서 동작
- res까지 나간 상태기 떄문에 당연히 next 동작이 없다. 모든 동작이 끝나면서 최후의 로직을 실행한다는 의미이기 때문이다.

