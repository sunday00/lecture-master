package ThreadPrac;

public class Waitable extends Thread {

    int total;

    @Override
    public void run() {
        synchronized (this) {
            for (int i = 0; i < 5; i++) {
                System.out.println("+");
                total++;

                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }

            notify();
        }
    }
    
}