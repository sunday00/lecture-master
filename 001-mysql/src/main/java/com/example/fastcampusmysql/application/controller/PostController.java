package com.example.fastcampusmysql.application.controller;

import com.example.fastcampusmysql.application.usecase.CreatePostUsecase;
import com.example.fastcampusmysql.domain.post.dto.DailyPostCount;
import com.example.fastcampusmysql.domain.post.dto.DailyPostCountRequest;
import com.example.fastcampusmysql.domain.post.dto.PostCommand;
import com.example.fastcampusmysql.domain.post.service.PostReadService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/posts")
public class PostController {
//    final private PostWriteService postWriteService;
    final private PostReadService postReadService;

//    final private GetTimelinePostsUsecase getTimelinePostsUsecase;
    final private CreatePostUsecase createPostUsecase;
//    final private CreatePostLikeUsecase createPostLikeUsecase;

    @PostMapping("")
    public Long create(@RequestBody PostCommand command) {
//        return postWriteService.create(command);
        return createPostUsecase.execute(command);
    }

    @GetMapping("/daily-post-counts")
    public List<DailyPostCount> getDailyPostCounts(DailyPostCountRequest request) {
        return postReadService.getDailyPostCounts(request);
    }
//
//
//    @GetMapping("/members/{memberId}")
//    public Page<PostDto> getPosts(
//            @PathVariable Long memberId,
//            @RequestParam Integer page,
//            @RequestParam Integer size
//    ) {
//        return postReadService.getPostDtos(memberId, PageRequest.of(page, size));
//    }


//    @GetMapping("/members/{memberId}/timeline")
//    public PageCursor<PostDto> getTimeline(
//            @PathVariable Long memberId,
//            CursorRequest cursorRequest
//    ) {
////        return getTimelinePostsUsecase.execute(memberId, cursorRequest);
//        return getTimelinePostsUsecase.executeByTimeline(memberId, cursorRequest);
//    }


//    @PostMapping("/{postId}/like/v1")
//    public void like(@PathVariable Long postId) {
////        postWriteService.likePost(postId);
//        postWriteService.likePostByOptimisticLock(postId);
//    }
//
//    @PostMapping("/{postId}/like/v2")
//    public void like(
//            @PathVariable Long postId,
//            @RequestParam Long memberId
//    ) {
//        createPostLikeUsacase.execute(postId, memberId);
//    }

}
