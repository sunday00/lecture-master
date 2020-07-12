package ThreadPrac;

public class FourthTry  {

    public void handle() throws InterruptedException {

        System.out.println("start");

        Joinner joinner = new Joinner();
        joinner.start();
        joinner.join();

        System.out.println("end");
    }
}