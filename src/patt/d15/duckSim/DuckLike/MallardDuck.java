package patt.d15.duckSim.DuckLike;

import patt.d15.duckSim.Quackable;
import patt.d15.duckSim.observable.Observable;
import patt.d15.duckSim.observable.Observer;

public class MallardDuck implements Quackable {
    Observable observable;

    public MallardDuck() {
        observable = new Observable(this);
    }

    @Override
    public void quack() {
        System.out.println("Quack! Quack!!");
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
