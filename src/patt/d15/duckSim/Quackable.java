package patt.d15.duckSim;

import patt.d15.duckSim.observable.QuackObservable;

public interface Quackable extends QuackObservable {
    public void quack();
}
