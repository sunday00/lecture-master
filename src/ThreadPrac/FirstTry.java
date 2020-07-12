package ThreadPrac;

public class FirstTry extends Thread {

    private String str;

    public FirstTry(String str) {
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
