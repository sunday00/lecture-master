## docker cmd
docker build -t nestprac .

docker run -e STAGE=dev -e POSTGRES_HOST=host.docker.internal --name nestjs -d -p 4000:4000 nestprac