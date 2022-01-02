# nestjs tutorial
- 이곳에 조금씩 공부 기록을 남겨보자.

- https://www.youtube.com/watch?v=3JminDpCJNE
    - 원래 다른 아시아계 영어권 강의를 보는데 DB를 mongodb를 선택하길래, 
    - 지금은 nosql보다 sql에 조금 더 집중하고 싶어서 - 실제로 현재 준비중인 채용에 RDBMS를 요하므로 이쪽으로 일단 해보기로 하고, 추후에 부족하면 다시 보기로 하겠다.
    - 혹시 몰라 그 강의도 적어놓자. https://www.youtube.com/watch?v=PPCuBln5FyE&list=PLBeQxJQNprbiykCyVNcSExTgytMMjSjnQ&index=2

## 내부적인 구성
- nestjs는 내부적으로 express를 사용하는 것이 기본값으로 되어 있고, 선택적으로 fastify를 사용할 수도 있다.
- express/fastify를 추상화하여 API를 제공한다. 기존의 웹프레임워크를 고도로 테스트, DI 등을 제공하기 위해 고안되었으며 angular에서 영감을 받았다고 하고, 얼핏 spring 을 닮았다고도 한다.
- 개인적으로 이번 강좌를 보면서 adonis-js와 비교해 보고 다음 프로젝트를 선택해 볼까 한다.

## 초기 request flow
- main.ts
    - app.module 어플리케이션 자체를 3000번 포트에 띄움
- app.module
    - controller와 service 설정
- app.controller
    - '/' 로 받으면 service 실행
    - service의 어떤 메서드를 실행할지 결정
- app.service
    - 서비스 실행 후 리턴

## 모듈의 생성
``` 
nest g module [name]
```
- using `nest`-cli `g`enerate `module` named `[name]`

## controller
- 요청을 처리하고 응답을 반환
``` 
nest g controller [name] --no-spec
```
- no-spec : test코드를 생성하지 않음. 
- 지금은 러닝커브를 잠깐 낮추고, 추후에 생성해보자

## service
- 실질적 서비스를 실행하여 컨트롤러로 반환
``` 
nest g service [name] --no-spec
```
- @Injectable 데코레이터를 통해 어느 클래스에서나 사용이 가능
    - 의존되는 컨트롤러의 인자로 지정하여 넣어주면,
    - 컨트롤러에서 단지 인자로 넣었을 뿐이지만,
    - 내부적으로 typescript의 기능을 통해
    - 접근제한자를 적용한 new 인스턴스를 생성하여 프로퍼티화 해준다.
    - 이렇게 DI를 해주면, 컨트롤러 내부에서 일일이 new를 할 필요가 없고, 
    - 인젝트 되는 의존객체가 또 다른 의존객체를 필요로 하는 경우
        - class AAController(){ new InjectedService( new Another() ) } 처럼 일일이 new를 해줄 필요가 없고,
    - 모듈간의 결합도를 낮춰 - 인자만 바꾸면 되므로 - 필요시 모듈 교체가 쉬워지고
    - 해당 컨트롤러 테스트를 할때도 목킹 등을 하기 쉬워진다고 한다.
    
