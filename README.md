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
- 인수에 접근제한자를 써주면 내부적으로 선언, this에 할당할 필요도 없어진다.

### 개념
- 소프트웨서 개발내의 공통 개념.
- 애플리케이션 전체에서 사용 가능.
- validation, entity 생성 등의 작업.

## provider
- 서비스, 리포지터리, 팩토리, 헬퍼...
- 종속성 주입. 객체간 관계 설정.
- nestjs 런타임 시스템에 위임
- module에 사용하고자 하는 서비스를 미리 등록

#### 이쯤에서 사실 prettier 설정으로 세미콜론을 뺴고 싶었는데,
- nest g ~ 명령어를 사용하명 다 세미콜론이 붙어서 나옴
- 기존에 만들어진 샘플이나 프레임워크에서 사용하는 코어 파일들도 다 붙어 있어서
- 일단 이걸 진짜 빼는게 최근 트렌드가 맞는지 의심이 들었고, 
- 일이 너무 커지고
- 일이 커지는 것에 반해 지금 학습하는 것에 오히려 방해되므로 
- 걍 일단 세미콜론을 붙이면서 하기로 함.

## model
- 필요한 데이터가 어떤 것인지 정의.
- 프로퍼티, 메서드 등을 선언.
- interface, class 둘 중 하나로 선언 가능.
- nest g 로 생성할 수 없다. (아마도 이 부분은 제네럴한 생성 방식을 찾지 못한 모양)

- interface는 간단하게 프로퍼티의 타입 정도를 정의할 수 있다.
- 만들어진 model은 서비스쪽에서 임포트하여 타입을 인식하는 방법으로 생성하고,
  - 기능상으로는 단순히 리스트에만 넣고 void 처리해도 읽는건 read 기능이 할 수 있지만,
  - 나중에 이 model을 unit test를 한다든가 할 경우를 대비해 굳이 생성된 model을 return 해보자

## request.body
- nestjs에서는 리퀘스트바디를 @Body() [파라미터명] 으로 받아올 수 있다.
- @Body(['프로퍼티']) [프로퍼티명] 을 통해 특정 요소만 받아올 수도 있다.


## dto
- 계층간 데이터 교환을 위한 객체
- DB에서 Service 등으로 불러올때 네트워크를 통해 전송되는 방법을 정의하는 객체
- 유효성 체크, 타입으로 사용
- service, controller 등 여러 곳에서 사용되는 경우 이 model 객체와 결합도가 높아질 수 있는데, 이것을 방지해 줄 수 있다.

## @param
- uri based param을 가져올 수 있다.

## result type
- Rust 에서 영감을 받아 한번 만들어 봤다.
- 강의에서는 delete 후 특별히 메시지를 넣지 않고 void 해버리는데, 
- 프론트에서 처리하든 나중에 test를 하든 성공/실패 정도는 나와 주는게 좋을 거 같다.

## pipe
- Should Injectable decorated
- 리퀘스트를 handler method (mainly controller) 전에 
- validation, transformation 해 줄 수 있다.
- PHP Laravel의 middleware, Nodejs Express에서 app.use(someMiddleWare), Spring에 인터셉터 같은 기능을 하는 것으로 보인다.

### pipe 사용법
- parameter level
- handler level
- global level

#### parameter level
- @Body('[name]', pipe) [name] ...
- @Param('[name]', pipe) [name] ...
- 파라미터 하나에 적용.

#### handler pipe
- @UsePipes(pipe)
- 핸들러 (get, post, patch, delete...) 하나에 적용

#### global pipe
- main.ts 에 app.useGlobalPipes(GlobalPipes)를 적용
- 어플리케이션 전체에 적용하게 된다.

### 빌트인 pipes
- ValidationPipe
- ParseIntPipe
- ParseBoolPipe
- ParseArrayPipe
- ParseUUIDPipe
- DefaultValuePipe

### pipe validation
- https://github.com/typestack/class-validator#validation-decorators
- yarn add class-validator class-transformer

## DB 연동
- yarn add pg typeorm @nestjs/typeorm
- 그동안 슬쩍슬쩍 건드려보던 postgresql을 본격적으로 연습해보자.
- pg nodejs postgresql driver 역할인듯?
- typeorm 말그대로 orm. PHP에서 PDO 역할인 듯?
- @nestjs/typeorm typeorm 과 nestjs를 연결해 주는 역할인 듯?
- 비교
  - typeorm : jpa : PDO
  - @nestjs/typeorm : hibernate : eloquent
  - 정도 되는 것 같다... 언어도 다르고 꼭 들어 맞다고는 할 수 없지만 일단은 이렇게 이해하고 넘어가자.

### 설정방법
- gitignore를 통해 db접속정보를 조금 더 유연하게 관리하기 위해 .env @type/dotenv를 사용하기로 한다.
- 후에 @nest/config 를 사용해보기로 하고, 지금은 익숙한 방법으로 해보자.
- entities: [__dirname + 폴더/*.entity.ts] : springboot 등에서도 이러한 기능은 있던거 같던데, 
  - 미리 테이블을 만드는 모듈을 설정해 놓으면, 해당폴더에서 읽어 서비스가 올라올때 자동으로 table들을 생성해준다.
  - 라라벨은 자동으로 올라오는 기능은 사용해 보지 않았지만, 통상 php artisan migrate 명령어 한방이면 같은 역할을 해준다. 
- synchronize: true : 
  <!-- 이기능은 이름만 보아서는 데이터를 기억해 두었다가 서비스의 동작에 따라 자동으로 기억된 데이터로 항상 싱크를 맞춰주는 모양인데,  -->
  - 엔티티를 주시하다가 변화가 있으면 즉시 적용해준다.
  - 이때 typeorm은 alter Table add column을 해주는 것이 아니라, 통째로 날리고 적용된 테이블을 새로 만들므로 
  - 실서버에는 잘못하면 데이터 다 날아가니 꼭 꺼두도록 한다.
  - test 코드를 실행하면 자꾸 데이터가 변하므로 테스팅하기 좋게 기존으로 돌려주는 기능으로만 이용.

- PS: dotenv 적용시 주의할 점은, 통상 main.ts, app.module 등에 dotenv.config 적용을 할텐데, main.ts가 entrypoint 같지만, 실상은 내부적으로 di를 위해 필요한 모듈들을 먼저 생성하게 된다. 이때문에 막상 config/config.ts를 만들고 process.env.*을 사용하여도, 모두 undefined 되고, 이후 main.ts, app.module을 타게된다. 
  - 서비스 단에서는 이를 위해 nestjs/config를 주입시켜 사용하는 듯 하지만, 이처럼 단순 config object에서는 결국 new를 하는 수 밖에 없게 된다.
  - best practice는 아닐거 같은데, 일단은 utils를 만들고 함수를 만들어 필요한 경우 일단 쉽게 적용할 수 있도록 만들어 두었다.

## DB 연동
- Repository 파일 생성 후 DI를 통해 연결한다.
- 특별할건 없고 typeorm api로 연동하면 된다.
- 왠지 uuid로 계속 하고 싶은데, 한편으로는 generated auto increment id 를 이용해보고 싶어서 일단 number로 바꾸어보자.
- postgresql에서는 default로 public 스키마가 잡히는데, 보안상 좋지 않다고 한다. typeorm 공식문서에 의하면 scheme도 바꿀 수 있으므로, 설정파일을 통해 바꿔주도록 하자.
- stackoverflow 등에서는 이 scheme를 런타임에서 다이나믹하게 연동하는 방법에 대해 꽤 뜨거운 모양이다. 

## 삭제로직
- remove : delete or error
- delete : delete or ignore
- 강사는 remove는 무조건 select로 한번 검색해보고 지워야 되서 비효율적이라고 하는데,
  - 이건 case에 따라 다를 것이다.
  - 서비스를 유연하게 삭제를 무시하는 로직을 사용할 경우에는 delete를 사용하고, 
  - 없는 데이터를 삭제하려는 경우 강력한 에러를 표시하여 불필요한 리퀘스트를 방지하려면, 경우에따라 remove도 좋은 로직이 될 수 있다고 생각한다.
<!-- - 이 실습은 강좌를 따르지 않고 error를 일부러 일으키고, 기존의 실패응답을 하기로 한다. -->
  - delete는 아무 return 값이 없는줄 알고 remove로 처리하려고 했는데, delete 에도 affected row가 뜬다. 이걸 쓰자. 







https://youtu.be/3JminDpCJNE?t=7487