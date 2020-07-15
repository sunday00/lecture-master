package mapper;

public class Solution {

    public Solution () {

    }

    public int[] solution(int[] prices){
        int l = prices.length;
        int[] answer = new int[l];

        int i = 0;
        int t = 0;
        for( int p : prices ){
            next:for( int y=i+1; y<l; y++ ){
                t++;
                if ( p > prices[y] || l-1 == y){
                    answer[i] = t;
                    t=0;
                    break next;
                }
            }
            i++;
        }
        return answer;
    }
}