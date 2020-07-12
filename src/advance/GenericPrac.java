package advance;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class GenericPrac {
    public static void main(String[] args) {
        Box<String> box = new Box<>();
        box.setObj("Some string");

        System.out.println( box.getObj() );

        Set<String> set1 = new HashSet<>();
        set1.add("Hello");
        set1.add("Hello");
        set1.add("World");
        set1.add("Im");
        set1.add("Im");
        set1.add("You");

        System.out.println(set1.size()); // set은 중복 안됨

        Iterator<String> iter = set1.iterator();
        while (iter.hasNext()){
            System.out.println(iter.next());
        }

        for (String s : set1) {
            System.out.println(s);
        }
    }
}
