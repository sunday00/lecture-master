package com.example.fastcampusmysql.factory;

import com.example.fastcampusmysql.domain.member.entity.Member;
import org.jeasy.random.EasyRandom;
import org.jeasy.random.EasyRandomParameters;
import org.jeasy.random.randomizers.range.LongRangeRandomizer;

public class MemberFixtureFactory {
    public static Member create() {
        var params = new EasyRandomParameters()
                .randomize(Long.class, new LongRangeRandomizer(1L, 100L));
        return new EasyRandom(params).nextObject(Member.class);
    }
}
