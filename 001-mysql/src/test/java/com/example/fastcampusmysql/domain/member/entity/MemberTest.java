package com.example.fastcampusmysql.domain.member.entity;

import com.example.fastcampusmysql.factory.MemberFixtureFactory;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class MemberTest {
    @DisplayName("member can change nickname")
    @Test
    public void testChangeNickName() {
        var member = MemberFixtureFactory.create();

        System.out.println(member.getNickname());

        var expected = "cat";

        member.changeNickname(expected);

        Assertions.assertEquals(expected, member.getNickname());
    }

    @DisplayName("nickname cant exceed 10")
    @Test
    public void testNicknameMaxLength() {
        var member = MemberFixtureFactory.create();
        var overMaxLengthName = "superChairman";

        Assertions.assertThrows(
                IllegalArgumentException.class,
                () -> member.changeNickname(overMaxLengthName)
        );
    }
}
