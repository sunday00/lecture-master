## DB
```
docker compose --env-file .env -f mongodb/docker-compose.yml up -d --build
```

## connect DB on webstorm sql
```
mongodb://localhost:27017/nest_adv?authSource=admin
```
- How can see my db(schema)
  - if no collections are there, no database even initialed.
  - so
  - ```
    docker exec -it mongodb /bin/sh
    
    mongosh -u root -p
    ****
    use nest_adv
    db.createCollection('book')
    ```
    - and sql plugin refresh

> https://youngwonhan-family.tistory.com/entry/Docker-mongodb-docker-compose-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EB%8D%B0%EC%9D%B4%ED%84%B0-CRUD-%EC%98%88%EC%A0%9C

