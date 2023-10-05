package com.example.helloworld.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class RankingService {
    @Autowired
    StringRedisTemplate redis;

    private static final String LEADERBOARD_KEY = "leaderBoard";

    public boolean setUserScore(String userId, int score) {
        ZSetOperations<String, String> setOperations = redis.opsForZSet();

        return setOperations.add(LEADERBOARD_KEY, userId, score) != null;
    }

    public Long getUserRanking(String userId) {
        ZSetOperations<String, String> setOperations = redis.opsForZSet();

//        return setOperations.rank(LEADERBOARD_KEY, userId);
        return setOperations.reverseRank(LEADERBOARD_KEY, userId);
    }

    public List<String> getTopRank(int limit) {
        ZSetOperations<String, String> setOperations = redis.opsForZSet();
        Set<String> rangeSet = setOperations.reverseRange(LEADERBOARD_KEY, 0, limit - 1);

        return new ArrayList<>(rangeSet);
    }
}
