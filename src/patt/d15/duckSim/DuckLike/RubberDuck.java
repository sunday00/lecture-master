package patt.d15.duckSim.DuckLike;

import patt.d15.duckSim.Quackable;
import patt.d15.duckSim.observable.Observable;
import patt.d15.duckSim.observable.Observer;

public class RubberDuck implements Quackable {
    Observable observable;

    public RubberDuck() {
        this.observable = new Observable(this);
    }

    @Override
    public void quack() {
        System.out.println("Pick~ pick~");
        notifyObservers();
    }

    @Override
    public void registerObserver(Observer observer) {
        observable.registerObserver(observer);
    }

    @Override
    public void notifyObservers() {
        observable.notifyObservers();
    }
}
