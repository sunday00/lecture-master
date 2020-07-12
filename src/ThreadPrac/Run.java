package ThreadPrac;

public class Run {
    public static void main(String[] args) {
        FirstTryHandler firstTryHandler = new FirstTryHandler();
        firstTryHandler.handle();

        SecondTryHandler secondTryHandler = new SecondTryHandler();
        secondTryHandler.handle();

    }
}
