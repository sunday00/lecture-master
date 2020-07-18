package functional;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Comparator;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.function.UnaryOperator;

public class ImplRun {
    public static void main(String[] args) {
        RunSomething runSomething = new RunSomething() {
            @Override
            public void doIt() {
                System.out.println("run!!");
            }
        };

        RunSomething runSomething2 = () -> System.out.println("run!!");

        runSomething.doIt();
        runSomething2.doIt();

        Retuner retuner = (num) -> num+10;

        System.out.println(retuner.getNumber(10));
        System.out.println(retuner.getNumber(10));
        System.out.println(retuner.getNumber(10));
        System.out.println(retuner.getNumber(10));

        int ref = 17;
        int finalRef = ref;
        Retuner retuner2 = (num) -> num + finalRef;

        ref = 18;

        Function <Integer, Integer> function = (arg) -> arg + 17;
        System.out.println(function.apply(10));

        Function <Integer, Integer> function2 = arg -> arg * 2;
        System.out.println(function2.apply(10));

        System.out.println( function.compose(function2).apply(10) );
        System.out.println( function.andThen(function2).apply(10) );

        UnaryOperator<String> hi = Foo::hi;
        System.out.println(hi.apply("sunday"));

        Foo foo = new Foo();
        UnaryOperator<String> hello = foo::hello;
        System.out.println(hello.apply("monday"));

        Supplier<Foo> foo2 = Foo::new;
        System.out.println(foo2.get().hello("tuesday"));

        Function<String, Foo> foo3 = Foo::new;
        System.out.println(foo3.apply("wednesday").hello2());

        String[] names = {"thursday", "friday", "laravel"};
        Arrays.sort(names, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return Integer.compare(o1.length(), o2.length());
            }
        });
        for(String name : names){
            System.out.println(name);
        }

        Arrays.sort( names, (o1, o2) -> Integer.compare(o2.length(), o1.length()) );
        for(String name : names){
            System.out.println(name);
        }

        Arrays.sort(names, String::compareToIgnoreCase);
        System.out.println(Arrays.toString(names));
    }
}
