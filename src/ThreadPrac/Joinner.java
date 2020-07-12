package ThreadPrac;

public class Joinner extends Thread {
    @Override
    public void run() {
        for (int i=0; i<5; i++){
            System.out.println("my thread : " + i);
            try {
                Thread.sleep(500);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}