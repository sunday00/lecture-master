package gugudan;

import java.util.Scanner;

public class Gugudan {
    public void max9 () {
        System.out.println("input What number will be multiply");
        Scanner scanner = new Scanner(System.in);

        int number = scanner.nextInt();

        System.out.println("now " + number + " will be multiply");

        for ( int i = 1; i < 10; i++ ) {
            System.out.println(i * number);
        }
    }
}
