package patt.d15.duckSim.factory;

import patt.d15.duckSim.AbstractDuckFactory;
import patt.d15.duckSim.DuckLike.DuckCall;
import patt.d15.duckSim.DuckLike.MallardDuck;
import patt.d15.duckSim.DuckLike.RedHeadDuck;
import patt.d15.duckSim.DuckLike.RubberDuck;
import patt.d15.duckSim.Quackable;
import patt.d15.duckSim.decorator.QuackCounter;

public class CountingQuackDuckFactory extends AbstractDuckFactory {
    public Quackable createMallardDuck() {
        return new QuackCounter(new MallardDuck());
    }

    @Override
    public Quackable createRedHeadDuck() {
        return new QuackCounter(new RedHeadDuck());
    }

    @Override
    public Quackable createDuckCall() {
        return new QuackCounter(new DuckCall());
    }

    @Override
    public Quackable createRubberDuck() {
        return new QuackCounter(new RubberDuck());
    }

}
