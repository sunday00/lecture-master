package collections;

import java.util.ArrayList;
import java.util.List;
import java.util.Spliterator;
import java.util.stream.Collectors;

public class Runner {
    public static void main(String[] args) {

        List<String> names = new ArrayList<>();
        names.add("sunday");
        names.add("monday");
        names.add("tuesday");
        names.add("wednesday");

        names.forEach(System.out::println);

        System.out.println("=================================");

        Spliterator<String> spliterator1 = names.spliterator();
        Spliterator<String> spliterator2 = spliterator1.trySplit(); // 만들어진 리스트를 반으로 쪼갬;
        while (spliterator1.tryAdvance(System.out::println));
        System.out.println("=================================");
        while (spliterator2.tryAdvance(System.out::println));


        System.out.println("=========stream=============");


        names.stream().map(s -> {
            System.out.println(s);
            return s.toUpperCase();
        }); // 실행되지 않는다. 결과 값이 새로 만들어지지 않을 뿐 아니라, 결과형메소드(종료형 메소드, terminal method)가 없으면
        //  아애 실행하지 않고 대기한다.

        List<String> uppers = names.stream().map((s) -> {
            System.out.println(s);
            return s.toUpperCase();
        }).collect(Collectors.toList());

        uppers.forEach(System.out::println);

        List<String> uppers2 = names.parallelStream().map((s) -> {
            System.out.println(Thread.currentThread().getName());
            System.out.println(s);
            return s.toUpperCase();
        }).collect(Collectors.toList());

        uppers2.forEach(System.out::println);

    }
}
