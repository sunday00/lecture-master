package mapper;

import java.util.List;
import java.util.OptionalInt;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.Arrays;

public class Solution {

    public Solution () {

    }

    public int[] solution(int[] prices){
        int[] answer = new int[prices.length];
        
        List<Integer> pricesList = Arrays.stream(prices).boxed().collect(Collectors.toList());

        int i = 0;
        while( pricesList.size() > 0 ){
            Integer cur = pricesList.get(0);
            pricesList.remove(0);
            OptionalInt lowerPoint = IntStream.range(0, pricesList.size()).filter(y -> pricesList.get(y) < cur ).findFirst();

            answer[i] = lowerPoint.isPresent() ? lowerPoint.getAsInt() + 1 : pricesList.size();
            i++;
        }

        for(int z=0; z<answer.length; z++){
            System.out.println(answer[z]);
        }
        
        return answer;
    }
}