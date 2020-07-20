package optional;

import collections.Study;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class Runner {
    public static void main(String[] args) {
        List<Study> studies = new ArrayList<>();

        studies.add(new Study("laravel", "php", true, 4));
        studies.add(new Study("phalcon", "php", true, 3));
        studies.add(new Study("spring", "java", false, 4));
        studies.add(new Study("jpa", "java", true, 5));
        studies.add(new Study("django", "python", false, 2));
        studies.add(new Study("flask", "python", false, 6));

        Optional<Study> openStudy1 = studies.stream().filter(s -> s.isOpen()).findFirst();
        System.out.println(openStudy1.getClass());
        System.out.println(openStudy1.isPresent());
        System.out.println(openStudy1.get()); //if openStudy is empty, then runtime exception is occurable.

        //not recommended. if you are familiar with this, why we use optional?
        if ( openStudy1.isPresent() ) System.out.println(openStudy1.get());

        openStudy1.ifPresent(System.out::println);

    }
}
