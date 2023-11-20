package patt.d15.duckSim.factory;

import patt.d15.duckSim.AbstractDuckFactory;
import patt.d15.duckSim.DuckLike.DuckCall;
import patt.d15.duckSim.DuckLike.MallardDuck;
import patt.d15.duckSim.DuckLike.RedHeadDuck;
import patt.d15.duckSim.DuckLike.RubberDuck;
import patt.d15.duckSim.Quackable;

public class DuckFactory extends AbstractDuckFactory {
    public Quackable createMallardDuck() {
        return new MallardDuck();
    }

    @Override
    public Quackable createRedHeadDuck() {
        return new RedHeadDuck();
    }

    @Override
    public Quackable createDuckCall() {
        return new DuckCall();
    }

    @Override
    public Quackable createRubberDuck() {
        return new RubberDuck();
    }

}
