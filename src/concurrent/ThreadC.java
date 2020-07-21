package concurrent;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class ThreadC {
    public void start(){
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

        ScheduledExecutorService service = Executors.newScheduledThreadPool(2);
        service.scheduleAtFixedRate(() -> {
            System.out.println(Thread.currentThread().getName());
        }, 1, 2, TimeUnit.SECONDS);
        service.scheduleAtFixedRate(() -> {
            System.out.println(Thread.currentThread().getName());
        }, 1, 1, TimeUnit.SECONDS);


    }
}
