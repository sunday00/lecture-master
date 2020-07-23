package queHeapPrac;

import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.stream.Collectors;

public class PriQue {
    public static void main(String[] args) {
        int[] scoville = {1, 2, 3, 9, 10, 12};
        int K = 7;

        System.out.println(new PriQue().solution(scoville, K));
    }

    public int solution (int[] scoville, int K) {
        int answer = 0;
        PriorityQueue<Integer> queue = Arrays.stream(scoville).boxed().collect(Collectors.toCollection(PriorityQueue::new));

        while (true){
            if( queue.size() == 1 && queue.peek() < K ) {
                answer = -1;
                break;
            }

            Integer n = queue.poll();
            Integer m = queue.poll();

            if( n > K) break;

            Integer o = n + (m * 2);

            queue.add(o);

            answer++;

        }

        return answer;
    }
}
