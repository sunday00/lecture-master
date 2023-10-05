package com.example.helloworld;

import com.example.helloworld.service.RankingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rank")
public class LeaderBoardController {
    @Autowired
    private RankingService rankingService;

    @GetMapping("/set-score")
    public boolean setScore(
            @RequestParam String userId,
            @RequestParam int score
    ) {
        return this.rankingService.setUserScore(userId, score);
    }

    @GetMapping("/get-rank/{userId}")
    public Long getRank(@PathVariable String userId) {
        return this.rankingService.getUserRanking(userId);
    }

    @GetMapping("/get-top")
    public List<String> getTop(@RequestParam(required = false, defaultValue = "0") int limit) {
        if(limit == 0) return this.rankingService.getTopRank(3);
        return this.rankingService.getTopRank(limit);
    }
}
