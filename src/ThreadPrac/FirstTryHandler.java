package ThreadPrac;

public class FirstTryHandler {
    public String handle(){
        FirstTry firstTry1 = new FirstTry("DO multitask with Thread");
        FirstTry firstTry2 = new FirstTry("As Do another thing");

        firstTry1.start();
        firstTry2.start();

        return "done";
    }
}
