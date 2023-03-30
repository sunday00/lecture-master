docker compose --env-file .env -f dockers/docker-compose.yml up -d

docker compose -f dockers/docker-compose.yml logs -t --tail 20

docker compose -f dockers/docker-compose.yml down