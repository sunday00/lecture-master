package patt.d15.duckSim.decorator;

import patt.d15.duckSim.Quackable;
import patt.d15.duckSim.observable.Observable;
import patt.d15.duckSim.observable.Observer;

public class QuackCounter implements Quackable {
    Quackable duck;
    Observable observable;
    static int numberOfQuacks;

    public QuackCounter (Quackable duck) {
        this.duck = duck;
        observable = new Observable(this);
    }

    public void quack() {
        duck.quack();
        numberOfQuacks++;
    }

    public static int getQuacks() {
        return numberOfQuacks;
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
