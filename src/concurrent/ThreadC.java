package concurrent;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.*;

public class ThreadC {
    public void start() throws ExecutionException, InterruptedException {
//        ExecutorService service = Executors.newSingleThreadExecutor();
//        service.execute(new Runnable() {
//            @Override
//            public void run() {
//                System.out.println("C : " + Thread.currentThread().getName());
//            }
//        });

//        service.submit(new Runnable() {
//            @Override
//            public void run() {
//                System.out.println("C : " + Thread.currentThread().getName());
//            }
//        });

//        service.submit(() -> System.out.println("C : " + Thread.currentThread().getName()));

//        ExecutorService service = Executors.newFixedThreadPool(2);
//        service.submit(() -> {
//            System.out.println(Thread.currentThread().getName());
//        });
//        service.submit(() -> {
//            System.out.println(Thread.currentThread().getName());
//        });
//        service.submit(() -> {
//            System.out.println(Thread.currentThread().getName());
//        });
//        service.submit(() -> {
//            System.out.println(Thread.currentThread().getName());
//        });
//        service.submit(() -> {
//            System.out.println(Thread.currentThread().getName());
//        });
//        service.submit(() -> {
//            System.out.println(Thread.currentThread().getName());
//        });
//        service.submit(() -> {
//            System.out.println(Thread.currentThread().getName());
//        });

//        service.shutdown(); // 모든 작업이 끝나면 알아서 죽음. gracefull
//        service.shutdownNow(); // 당연히 이건 지금 shutdownAbort

//        ScheduledExecutorService service = Executors.newScheduledThreadPool(2);
//        service.scheduleAtFixedRate(() -> {
//            System.out.println(Thread.currentThread().getName());
//        }, 1, 2, TimeUnit.SECONDS);
//        service.scheduleAtFixedRate(() -> {
//            System.out.println(Thread.currentThread().getName());
//        }, 1, 1, TimeUnit.SECONDS);

//        ExecutorService service = Executors.newSingleThreadExecutor();
//
////        Callable<String> callable = new Callable<String>() {
////            @Override
////            public String call() throws Exception {
////                Thread.sleep(200);
////                return "Hello : " + Thread.currentThread().getName();
////            }
////        };
//
//        Callable<String> callable = () -> {
//            Thread.sleep(2000);
//            return "Hello : " + Thread.currentThread().getName();
//        };
//
//        Future<String> future = service.submit(callable);
//        System.out.println("============");
//        System.out.println( future.isDone() );
////        future.cancel(true); // true 면 완전 캔슬. false면 일단 기다리되 리턴 없음. get 못함.
//        System.out.println(future.get()); // blocking call
//        System.out.println( future.isDone() );
//        System.out.println("============");
//
//        service.shutdown();

//        ExecutorService service = Executors.newSingleThreadExecutor();
        ExecutorService service = Executors.newFixedThreadPool(3);

        Callable<String> callable1 = () -> {
            Thread.sleep(3000);
            return "php : " + Thread.currentThread().getName();
        };

        Callable<String> callable2 = () -> {
            Thread.sleep(2000);
            return "java : " + Thread.currentThread().getName();
        };

        Callable<String> callable3 = () -> {
            Thread.sleep(1000);
            return "python : " + Thread.currentThread().getName();
        };

//        List<Future<String>> langs = service.invokeAll( Arrays.asList(callable1, callable2, callable3) );
//        for ( Future<String> lang: langs ) {
//            System.out.println(lang.get());
//        }
        String lang = service.invokeAny( Arrays.asList(callable1, callable2, callable3) );
        System.out.println(lang);

        service.shutdown();
    }
}
