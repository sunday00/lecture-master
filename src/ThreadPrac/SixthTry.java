package ThreadPrac;

public class SixthTry {
    public void handle () throws InterruptedException {
        Thread thread = new Thread(new DaemonPrac());
        thread.setDaemon(true);
        thread.start();

        Thread.sleep(2000);

        System.out.println("main is fin");
    }
}