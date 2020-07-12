package advance;

import java.util.*;

public class ListPrac {
    public static void main(String[] args) {
        List<String> a = new ArrayList<>();
        a.add("php");
        a.add("java");
        a.add("node");
        a.add("deno");
        a.add("python");

        System.out.println(a.size());

        for( String n : a ){
            System.out.println(n);
        }

        System.out.println("============");

        System.out.println(a.get(1));
        System.out.println(a.get(2));
        System.out.println(a.get(3));

        new ListPrac().HashMapPrac();
    }

    public void HashMapPrac () {
        Map<String, String> hm = new HashMap<>();

        hm.put("apple", "green");
        hm.put("banana", "yellow");
        hm.put("cherry", "darkred");
        hm.put("durian", "brown");
        hm.put("egg", "fresh");
        hm.put("fig", "purple");

        System.out.println(hm.size());

        Set<String> kyes = hm.keySet();
        System.out.println(kyes.toString());

        for ( String x : hm.keySet() ) {
            System.out.println(x + " : " + hm.get(x));
        }
    }
}
