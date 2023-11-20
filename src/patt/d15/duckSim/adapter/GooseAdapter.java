package patt.d15.duckSim.adapter;

import patt.d15.duckSim.Goose;
import patt.d15.duckSim.Quackable;
import patt.d15.duckSim.observable.Observable;
import patt.d15.duckSim.observable.Observer;

public class GooseAdapter implements Quackable {

    Observable observable;
    Goose goose;

    public GooseAdapter(Goose goose) {
        this.goose = goose;
        observable = new Observable(this);
    }

    @Override
    public void quack() {
        this.goose.honk();
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
