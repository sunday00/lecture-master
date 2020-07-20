package concurrent;

public class Runner {
    public static void main(String[] args) throws InterruptedException {
        new ThreadA().start();
        new ThreadB().start();
    }
}
