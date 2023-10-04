# strategy
## cache-aside (lazy loading)
- 읽기 시 캐시를 항상 먼저 접근
- 없으면 원본 read 후 캐싱
- 캐시 미스에 안전
- 최초 접근 slow 가능성, 비주기적 캐싱

## write-through
- 작성/갱신 시 캐시를 먼저 쓰고 원본에 작성
- 원본에 커밋 되기 전에 접근 한 다른 트랜잭션도 최신 캐싱 액세스 가능
- 불필요 캐싱 증가, 쓰기 지연

## write-back
- 쓰기는 캐시만, 원본에는 배치로 밀어넣음
- 잦은 캐시 변동에 원본 부하 절약
- 유실 위험

# cache clear strategy
- TTL 시간 기반 만료
- Eviction Algorithm
  - LRU : 장시간 미사용 만료
  - LFU : 최근 사용에도 가장 사용 빈도 적으면 만료
  - FIFO : 사용 미사용 무관 오래되면 제거 (사실상 TTL과 같은 효과)
