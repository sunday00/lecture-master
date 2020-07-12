package ThreadPrac;

public class DaemonPrac extends Thread {

    @Override
    public void run() {
        while (true) {
            System.out.println("Daemon running");

            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }

        }
    }
    
}