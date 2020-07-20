package concurrent;

public class ThreadA implements Runnable{
    @Override
    public void run() {
        System.out.println("A is now running");
        while (true){
            try {
                Thread.sleep(1500);
                System.out.println("A is now sleeping");
            } catch (InterruptedException e) {
//            e.printStackTrace();
                System.out.println("WAKE EARLY");
                return ;
            }
        }
    }

    public void start() throws InterruptedException {
        Thread thread = new Thread(new ThreadA());
        thread.start();
        System.out.println(thread.getName());

        Thread.sleep(5000);
        thread.interrupt();
    }
}
