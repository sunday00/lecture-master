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

