package com.example.fastcampusmysql.application.controller;

import com.example.fastcampusmysql.domain.member.dto.MemberDto;
import com.example.fastcampusmysql.domain.member.dto.RegisterMemberCommand;
import com.example.fastcampusmysql.domain.member.entity.Member;
import com.example.fastcampusmysql.domain.member.service.MemberReadService;
import com.example.fastcampusmysql.domain.member.service.MemberWriteService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@Tag(name = "member")
@RequiredArgsConstructor
@RestController
@RequestMapping("/members")
public class MemberController {
    final private MemberWriteService memberWriteService;
    final private MemberReadService memberReadService;

    @Operation(summary = "회원정보 등록")
    @PostMapping("")
    public MemberDto register(@RequestBody RegisterMemberCommand command) {
        Member member = memberWriteService.create(command);
        return memberReadService.toDto(member);
    }

    @Operation(summary = "회원정보 단건 조회")
    @GetMapping("/{id}")
    public MemberDto getMember(@PathVariable Long id) {
        return memberReadService.getMember(id);
    }
}
