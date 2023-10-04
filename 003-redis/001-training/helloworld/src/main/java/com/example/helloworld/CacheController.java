package com.example.helloworld;

import com.example.helloworld.dto.CacheDto;
import com.example.helloworld.service.CacheService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cache")
public class CacheController {
    private final CacheService cacheService;
    public CacheController(CacheService cacheService) {
        this.cacheService = cacheService;
    }
    @GetMapping("/user/profile")
    public CacheDto getUserProfile() {
        return cacheService.getUserProfile();
    }
}
