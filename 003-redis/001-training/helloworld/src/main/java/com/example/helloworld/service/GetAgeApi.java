package com.example.helloworld.service;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class GetAgeApi {
    @Cacheable(cacheNames = "userAge", key = "#userId")
    public int getApiAge(String userId) {
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            return 0;
        }

        System.out.println("uncached age");

        return 30;
    }
}
