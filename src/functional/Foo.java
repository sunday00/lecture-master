package functional;

public class Foo {
    private String name;

    public Foo() {
    }

    public Foo(String name) {
        this.name = name;
    }

    public String hello (String name) {
        return "Hello " + name;
    }

    public String hello2 () {
        return "Hello " + name;
    }

    public static String hi (String name) {
        return "hi " + name;
    }
}
