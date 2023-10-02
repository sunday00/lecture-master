## 아래로 갈 수록 안정적이나 동시성 낮음
- 통상 중간 정도인 read commited, repeatable read 정도의 설정을 하나 
- repeatable read 는 get not(?) 이슈로 데드락이 빈번한 편이라 read committed 정도가 가장 대중적인 편

### read uncommitted
- dr, nrr, pr
### read committed
- nrr, pr
### repeatable read
- pr
### serializable read
- X

---

## Dirty read
- commit/rollback 이전에 오염된 데이터를 다른 트랜잭션에서 읽기 

## Non-repeatable read
- A 트랜잭션 중 B 트랜잭션이 끝나 A 트랜잭션 내에서 반복된 동일한 쿼리임에도 커밋된 값은 달라진 값 읽기
- 한 트랜잭션 내에서 같은 호출에도 같은 반복(repeat) read가 발생하지 않음
- (A: id1 -> 3, ...process, id1-> 3, ...process, id1-> 4?)
- (B: id1 <- +1,  ...................commit, id1 -> 4)

## Phantom read
- A 트랜잭션 중 B 트랜잭션이 끝나 A 트랜잭션 내에서 같은 조건의 쿼리임에도 커밋된 새 값이 갑자기 추가/삭제 된 값도 포함하기
- 한 트랜잭션 내에서 같은 조건의 호출에 갑자기 유령처럼 값이 추가되거나 사라짐
- (A: age > 3 -> len 4, ....process, age > 3 -> len 4, .... age > 3 -> len 5?)
- (B: id1 < 3 -> id1.age <- 3, ...............process, ...commit)

