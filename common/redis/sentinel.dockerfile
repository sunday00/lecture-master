FROM redis:7.2-alpine

ARG NUM

RUN chown redis:redis /run
WORKDIR /data/${NUM}

RUN chmod -R 0777 /data/${NUM}

CMD ["redis-sentinel", "redis.conf"]
