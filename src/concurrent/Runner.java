package concurrent;

import java.util.concurrent.ExecutionException;

public class Runner {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        new ThreadA().start();
        new ThreadB().start();
        new ThreadC().start();
    }
}
