package com.example.fastcampusmysql.domain.member.repository;

import com.example.fastcampusmysql.domain.member.entity.Member;
import com.example.fastcampusmysql.domain.member.entity.MemberNicknameHistory;
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
public class MemberNicknameHistoryRepository {
    static final String TABLE = "MemberNicknameHistory";

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private static final RowMapper<MemberNicknameHistory> ROW_MAPPER = (ResultSet resultSet, int rowNum) -> MemberNicknameHistory
            .builder()
            .id(resultSet.getLong("id"))
            .memberId(resultSet.getLong("memberId"))
            .nickname(resultSet.getString("nickName"))
            .createdAt(resultSet.getObject("createdAt", LocalDateTime.class))
            .build();

    public List<MemberNicknameHistory> findAllByMemberId(Long id) {
        var sql = String.format("SELECT * FROM %s WHERE memberId = :memberId ", TABLE);
        var params = new MapSqlParameterSource()
                .addValue("memberId", id);

        return namedParameterJdbcTemplate.query(sql, params, ROW_MAPPER);
    }

    public MemberNicknameHistory save(MemberNicknameHistory history) {
        if (history.getId() == null) return insert(history);

        throw new UnsupportedOperationException("Can't be updated history");
    }

    private MemberNicknameHistory insert(MemberNicknameHistory history) {
        SimpleJdbcInsert jdbcInsert = new SimpleJdbcInsert(namedParameterJdbcTemplate.getJdbcTemplate())
                .withTableName(TABLE)
                .usingGeneratedKeyColumns("id");
        // insert into TABLE (....) values ($1, $2, $3...)

        SqlParameterSource params = new BeanPropertySqlParameterSource(history);
        // { $1 = ... $2 = .... }
        var id = jdbcInsert.executeAndReturnKey(params).longValue();
        // real execute and return id

        return MemberNicknameHistory.builder()
                .id(id)
                .memberId(history.getMemberId())
                .nickname(history.getNickname())
                .createdAt(history.getCreatedAt())
                .build();
    }
}
