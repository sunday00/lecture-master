package lambda;

public class Basic2 {
    public static void exec(Compare compare) {
        int k = 10;
        int m = 20;
        int value = compare.compare(k, m);
        System.out.println(value);
    }

    public void doRun() {
        exec( (i,j) -> i - j );
    }
}