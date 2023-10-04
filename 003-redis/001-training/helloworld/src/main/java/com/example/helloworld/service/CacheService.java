package com.example.helloworld.service;

import com.example.helloworld.dto.CacheDto;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
public class CacheService {
    private final StringRedisTemplate redisTemplate;
    public CacheService(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public CacheDto getUserProfile() {
        ValueOperations<String, String > ops = redisTemplate.opsForValue();
        String cachedName = ops.get("name");
        if (cachedName == null){
            String name = this.getApi();

            ops.set("name", "Cached Memory name", 5, TimeUnit.SECONDS);

            return new CacheDto(name, 30);

        } else {
            return new CacheDto(cachedName, 30);
        }
    }

    private String getApi() {
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            return e.getMessage();
        }

        return "Original Api name";
    }
}
