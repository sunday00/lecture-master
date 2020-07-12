package ThreadPrac;

public class MusicBox {
    public synchronized void playMusicA() {
        for (int i = 0; i < 10; i++) {
            System.out.println("Funnnnn!");
            try {
                Thread.sleep((int) (Math.random() * 1000));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
    public void playMusicB() {
        System.out.println("Gloomy is running");
        for (int i = 0; i < 10; i++) {
            synchronized (this) {
                System.out.println("Gloomy");
            }
            try {
                Thread.sleep((int) (Math.random() * 1000));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
    public void playMusicC() {
        for (int i = 0; i < 10; i++) {
            System.out.println("Jazz~~~!!");
            try {
                Thread.sleep((int) (Math.random() * 1000));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}