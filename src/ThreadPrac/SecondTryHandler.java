package ThreadPrac;

public class SecondTryHandler {

    public String handle(){
        SecondTry secondTry1 = new SecondTry("DO multitask with Thread222");
        SecondTry secondTry2 = new SecondTry("As Do another thing222");

//        firstTry1.start();
//        firstTry2.start();

        Thread thread1 = new Thread(secondTry1);
        Thread thread2 = new Thread(secondTry2);

        thread1.start();
        thread2.start();

        return "done";
    }


}
