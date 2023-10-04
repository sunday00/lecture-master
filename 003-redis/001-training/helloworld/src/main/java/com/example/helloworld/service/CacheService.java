package com.example.helloworld.service;

import com.example.helloworld.dto.CacheDto;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
public class CacheService {
    private final StringRedisTemplate redisTemplate;
    private final GetAgeApi getAgeApi;

    public CacheService(StringRedisTemplate redisTemplate, GetAgeApi getAgeApi) {
        this.redisTemplate = redisTemplate;
        this.getAgeApi = getAgeApi;
    }

    public CacheDto getUserProfile() {
        ValueOperations<String, String > ops = redisTemplate.opsForValue();
        String cachedName = ops.get("name");
        if (cachedName == null){
            String name = this.getApi();
            int age = this.getAgeApi.getApiAge("aaa");

            ops.set("name", "Cached Memory name", 5, TimeUnit.SECONDS);

            return new CacheDto(name, age);

        } else {
            int age = this.getAgeApi.getApiAge("aaa");
            return new CacheDto(cachedName, age);
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
