package lambda;

public class Basic {
    public void doRun () {
        // new Thread(new Runnable(){
        //     @Override
        //     public void run () {
        //         for(int i=0; i < 10; i++){
        //             System.out.println("Hello Thread");
        //         }
        //     }
        // }).start();

        new Thread(() -> {
            for(int i=0; i < 10; i++){
                System.out.println("Hello Thread");
            }
        }).start();

    }
}