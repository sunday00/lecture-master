package patt.d15.duckSim.observable;

public class Quckologist implements Observer {
    @Override
    public void update(QuackObservable duck) {
        System.out.println("Scientist: " + duck.getClass() + " said right before.");
    }
}
