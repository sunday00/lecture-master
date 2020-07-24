package arrayhelp;

import java.util.Arrays;
import java.util.Random;
import java.util.stream.IntStream;

public class Runner {
    public static void main(String[] args) {
        int size = 10;
        int[] numbers = new int[size];
        Random random = new Random();

        IntStream.range(0, size).forEach(i -> numbers[i] = random.nextInt());
        System.out.println(Arrays.toString(numbers));
        Arrays.sort(numbers);
        System.out.println(Arrays.toString(numbers));

        IntStream.range(0, size).forEach(i -> numbers[i] = random.nextInt());
        System.out.println(Arrays.toString(numbers));
        Arrays.parallelSort(numbers);
        System.out.println(Arrays.toString(numbers));
    }
}
