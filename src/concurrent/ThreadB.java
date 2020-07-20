package concurrent;

public class ThreadB implements Runnable{
    @Override
    public void run() {
        System.out.println("B is now running");

        System.out.println("if A is sleeping, B is always first");
    }

    public void start() {
        Thread thread = new Thread(new ThreadB());
        thread.start();
        System.out.println(thread.getName());
    }
}
