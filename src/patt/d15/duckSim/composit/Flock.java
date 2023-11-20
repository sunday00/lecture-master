package patt.d15.duckSim.composit;

import patt.d15.duckSim.Quackable;
import patt.d15.duckSim.observable.Observer;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Flock implements Quackable {
    Observer observer;
    List<Quackable> quackables = new ArrayList<>();

    public Flock() {

    }

    public void add(Quackable quackable) {
        quackables.add(quackable);
    }


    @Override
    public void quack() {
        Iterator<Quackable> iterator = quackables.iterator();

        while (iterator.hasNext()) {
            Quackable quackable = iterator.next();
            quackable.quack();
//            notifyObservers();
            this.observer.update(quackable);
        }
    }

    @Override
    public void registerObserver(Observer observer) {
//        observable.registerObserver(observer);
        this.observer = observer;
    }

    @Override
    public void notifyObservers() {

    }
}
