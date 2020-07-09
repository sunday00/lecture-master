package basic;

import java.util.Arrays;

public class KakaoToyCrain {

    public int solution(int[][] board, int[] moves){
        int answer = 0;
        int[] outs = {};

        for ( int m : moves ) {
            int candidate = 0;
            int x = -1;
            int y = -1;

            for ( int idx = 0; idx < board.length; idx++ ){
                if ( board[idx][m - 1] == 0) continue;
                if ( candidate != 0) continue;

                candidate = board[idx][m - 1];
                x = idx;
                y = m - 1;
            }

            if( x < 0 || y < 0 ) continue;

            board[x][y] = 0;

            if( outs.length == 0 ){
                outs = new int[1];
                outs[0] = candidate;
            }else if (outs[ outs.length - 1 ] == candidate ){
                int[] newOuts = new int[ outs.length - 1 ];
                for( int j = 0 ; j < outs.length - 1; j ++ ){
                    newOuts[j] = outs[j];
                }
                outs = newOuts;
                answer++;
            } else {
                int[] newOuts = new int[ outs.length + 1 ];
                for( int j = 0 ; j < outs.length; j ++ ){
                    newOuts[j] = outs[j];
                }
                newOuts[ outs.length ] = candidate;
                outs = newOuts;
            }
        }

        return answer * 2;
    }

}
