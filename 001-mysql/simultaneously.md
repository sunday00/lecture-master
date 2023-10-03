# 개요

## 동시성 이슈의 주요 패턴
- 공유자원 조회와 공유자원 갱신 중간에 다른 트랜잭션 발생

## 동시성 이슈의 문제점
- 로컬에서 단일 스레드로 파악 난해
- 코드 이슈가 아니라서 코드 리뷰로도 파악 어려움
- exception이 아닌 경우 그냥 숫자만 안맞고 오류로 파악이 되지 않는 경우가 다반사
    - 로그도 없고... 아니 이게 왜 안맞지...? 어디서 틀리게 들어간거지...?
- 랜덤 발생. 될때는 되고 가끔 고장남. (비결정적 발생)

## 주요 해결책
- 락을 획득하여 순차 처리 / 비관적 락
  - 락의 범위 최소화, 단시간화 중요
- 별도의 도메인으로 분리

# lock
## mysql lock의 기본 동작
- 읽기: shared lock / 쓰기: exclusive lock
- 읽기 중에는 다른 트랜잭션 읽기 ok, 쓰기 no
- 쓰기 중에는 다른 트랜잭션 읽기 no, 쓰기 no

## lock의 범위
- table lock
- row(record) lock
- gap lock
  - replica, bin log format 과 원본 데이터 일관성을 위해 pk 사이 빈 레코드까지 lock을 하는 동작을 의미.
  - https://medium.com/daangn/mysql-gap-lock-%EB%8B%A4%EC%8B%9C%EB%B3%B4%EA%B8%B0-7f47ea3f68bc

## mysql lock의 특징
- row 자체가 아니라 index에 lock
- lock 획득 시에 적절한 index를 선택해 lock을 획득하지 않으면, 해당 index lock이 아니라 전체 rows lock이 되어 테이블락처럼 되어 버린다.
- 이렇게 되면 엉뚱한 곳에서 전혀 상관없는 조회 조차 대기를 하면서 성능 저하가 발생할 수 있다.

## lock의 사용

```
START transaction;
SELECT * FROM POST WHERE memberId = 1 FOR SHARE;
COMMIT;
```

- mysql 은 for share 구문이 없는 트랜잭션에서는 non blocking 으로 동작
- 대신 isolation level로 관리

## 낙관적 락
- 동시성이 빈번하지 않을 것을 기대하고 app 레이어에서 제어
- CAS (compare and set)
  - update 등의 트랜잭션에서 a만 업데이트 될 거지만, 일부러 다른 컬럼도 함께 update
  - 다른 트랜잭션에서 update 할때 마찬가지로 where 구문에 해당 컬럼 함께 기입
  - 다른 트랜잭션에서는 where 구문에서 실패하므로 다시 처리 하는 로직 구현
- 예시

```
{tx:A where stock=9, updateCnt=1 --> ... processing ... --> update stock+1, updateCnt+1 where updateCnt=1 commit --> stock:9, updateCnt:2}
{ ---------- tx:B where stock=9, updateCnt=1 --> ... processing ...... --> update stock+1, updateCnt+1 where updateCnt=1 --> failed. updateCnt 1 not found}
```

# 추가
- framework 에서 동시성 이슈 제어
- 분산환경 동시성 이슈 제어
- mysql 넥스트 키락
- mysql foreign lock
- deadlock
