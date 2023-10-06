```
docker exec kafka-kafka-1-1 kafka-topics --create --topic my-topic --bootstrap-server kafka-1:29092 {--replication-factor 3 --partitions 2}
docker exec kafka-kafka-1-1 kafka-topics --describe --topic my-topic --bootstrap-server kafka-1:29092
```

```
docker exec kafka-kafka-1-1 kafka-console-producer --topic topic-exampl-1 --bootstrap-server kafka-1:29092 {--replication-factor 3 --partitions 2}

```

