## config
```
replicaof 127.0.0.1 6379
```

```
replica-read-only
```

## 주의
- master node 에는 RDB, AOF 백업 필수
- replica는 주기적으로 master 를 복제해가는데, 장애 발생으로 마스터 노드가 비게되면 replica도 비어있는 노드를 복제하여 멀쩡히 예비용으로 있던 노드들도 비게 된다.
- 
