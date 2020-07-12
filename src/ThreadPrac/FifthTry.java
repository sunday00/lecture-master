package ThreadPrac;

public class FifthTry {
    public void handle () throws InterruptedException {
        Waitable waitable = new Waitable();
        waitable.start();

        synchronized(waitable){
            System.out.println("wait");
            waitable.wait();
            System.out.println(waitable.total);
        }
    }
}