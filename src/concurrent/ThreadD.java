package concurrent;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class ThreadD {
    public void start() throws ExecutionException, InterruptedException {
        CompletableFuture<String> future = new CompletableFuture<String>();
        future.complete("Hello new future?");

        System.out.println(future.get());

        CompletableFuture<Void> future2 = CompletableFuture.runAsync(() -> {
            System.out.println("Hello async");
        });
        future2.get();

        CompletableFuture<String> future3 = CompletableFuture.supplyAsync(() -> "hello async returnable");
        System.out.println(future3.get());

        System.out.println("==================");

        CompletableFuture<String> future4 = CompletableFuture.supplyAsync(() -> "hello async returnable")
                .thenApply(String::toUpperCase);
        System.out.println(future4.get());

        CompletableFuture<Void> future5 = CompletableFuture.supplyAsync(() -> "hello consumer Callback")
                .thenAccept((s) -> {
                    System.out.println(s.toUpperCase());
                });
        future5.get();

        System.out.println("==================");

        CompletableFuture<String> future6 = CompletableFuture.supplyAsync(() -> "aaa")
                .thenApply(String::toUpperCase);

        System.out.println(future6.thenCompose(ThreadD::getFuture7).get());

        CompletableFuture<String> future8 = CompletableFuture.supplyAsync(() -> "ccc")
                .thenApply(String::toUpperCase);

        System.out.println(future6.thenCombine(future8, (x, y) -> {
            return x + " " + y;
        }).get());
    }

    private static CompletableFuture<String> getFuture7(String m) {
        return CompletableFuture.supplyAsync(() -> "bbb")
                .thenApply(s -> m + s.toUpperCase());
    }

}
