package com.example.fastcampusmysql.domain.member.repository;

import com.example.fastcampusmysql.domain.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.support.DataAccessUtils;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Repository
public class MemberRepository {
    static final String TABLE = "Member";

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private static final RowMapper<Member> ROW_MAPPER = (ResultSet resultSet, int rowNum) -> Member
            .builder()
            .id(resultSet.getLong("id"))
            .nickname(resultSet.getString("nickName"))
            .email(resultSet.getString("email"))
            .birthday(resultSet.getObject("birthday", LocalDate.class))
            .createdAt(resultSet.getObject("createdAt", LocalDateTime.class))
            .build();

    public Optional<Member> findById(Long id) {
        var sql = String.format("SELECT * FROM %s WHERE id = :id ", TABLE);
        var params = new MapSqlParameterSource()
                .addValue("id", id);

        List<Member> members = namedParameterJdbcTemplate.query(sql, params, ROW_MAPPER);

        Member member = DataAccessUtils.singleResult(members);
        return Optional.ofNullable(member);
    }

    public Member save(Member member) {
        if (member.getId() == null) return insert(member);
        return update(member);
    }

    private Member insert(Member member) {
        SimpleJdbcInsert jdbcInsert = new SimpleJdbcInsert(namedParameterJdbcTemplate.getJdbcTemplate())
                .withTableName(TABLE)
                .usingGeneratedKeyColumns("id");
        // insert into TABLE (....) values ($1, $2, $3...)

        SqlParameterSource params = new BeanPropertySqlParameterSource(member);
        // { $1 = ... $2 = .... }
        var id = jdbcInsert.executeAndReturnKey(params).longValue();
        // real execute and return id

        return Member.builder()
                .id(id)
                .nickname(member.getNickname())
                .email(member.getEmail())
                .birthday(member.getBirthday())
                .build();
    }

    private Member update(Member member) {
        // TODO: update
        return member;
    }
}
