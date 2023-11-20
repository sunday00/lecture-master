package patt.d15.duckSim;

import patt.d15.duckSim.adapter.GooseAdapter;
import patt.d15.duckSim.composit.Flock;
import patt.d15.duckSim.decorator.QuackCounter;
import patt.d15.duckSim.factory.CountingQuackDuckFactory;
import patt.d15.duckSim.observable.Quckologist;

public class DuckSim {
    public static void main(String[] args) {
        DuckSim sim = new DuckSim();
        AbstractDuckFactory factory = new CountingQuackDuckFactory();

        sim.simulate(factory);
    }

    private void simulate(AbstractDuckFactory factory) {
//        Quackable mallardDuck = new QuackCounter(new MallardDuck());
//        Quackable redheadDuck = new QuackCounter(new RedHeadDuck());
//        Quackable duckCall = new QuackCounter(new DuckCall());
//        Quackable rubberDuck = new QuackCounter(new RubberDuck());

        Quackable mallardDuck = factory.createMallardDuck();
        Quackable redheadDuck = factory.createRedHeadDuck();
        Quackable duckCall = factory.createDuckCall();
        Quackable rubberDuck = factory.createRubberDuck();

        Quackable goose = new GooseAdapter(new Goose());

        System.out.println("\n\n Duck simulator!! \n\n");

//        simulate(mallardDuck);
//        simulate(redheadDuck);
//        simulate(duckCall);
//        simulate(rubberDuck);
//
//        simulate(goose);

        Flock flocks = new Flock();
        flocks.add(mallardDuck);
        flocks.add(redheadDuck);
        flocks.add(duckCall);
        flocks.add(rubberDuck);
        flocks.add(goose);
//
//        Flock flockOfMallards = new Flock();
//        flockOfMallards.add(factory.createMallardDuck());
//        flockOfMallards.add(factory.createMallardDuck());
//        flockOfMallards.add(factory.createMallardDuck());
//        flockOfMallards.add(factory.createMallardDuck());
//
//        flocks.add(flockOfMallards);

        Quckologist quckologist  = new Quckologist();
        flocks.registerObserver(quckologist);

        System.out.println("\n\nAllDuck\n\n");
        simulate(flocks);

//        System.out.println("\n\nMallardDuck\n\n");
//        simulate(flockOfMallards);

        System.out.println(QuackCounter.getQuacks());
    }

    private void simulate(Quackable duck) {
        duck.quack();
    }


}
