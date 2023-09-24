- res.end
  - 세션 종료
  - 캐싱 비효율
  - 응답 없는 경우 효과적
- res.send
  - 세션 종료
  - 간단한 내용
  - e-tag 캐싱
  - content type
  - send 내용을 한번 더 검색
    - 내용에따라 string 변환, 직렬화 후 재귀호출
- res.json
  - 세션 종료
  - 내용 응답
  - res.send에 타입을 미리 명시해 호출 단축

## 결론: 
- 응답 내용 형식을 알면 되도록 res.json, res.sendFile 등 형식있는 응답
- 형식이 dynamic이고 응답 소스코드 통일성, 호환성이 더 중요하면 send
- 별 내용 없이 상태코드만 응답하거나, 개발 생산성이 더 중요하면 걍 end
