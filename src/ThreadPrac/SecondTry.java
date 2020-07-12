package ThreadPrac;

public class SecondTry implements Runnable{

    String str;

    public SecondTry(String str) {
        this.str = str;
    }

    @Override
    public void run() {
        for(int i=0; i<10; i++){
            System.out.println(this.str);
            try {
                Thread.sleep( (long)(Math.random() * 1000) );
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
