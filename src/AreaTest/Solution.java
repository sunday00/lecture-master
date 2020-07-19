package AreaTest;

import java.lang.reflect.Array;
import java.util.*;

class Solution {
    public static void main(String[] args) {
        int[][] picture = {{1, 1, 1, 0}, {1, 2, 2, 0}, {1, 0, 0, 1}, {0, 0, 0, 1}, {0, 0, 0, 3}, {0, 0, 0, 3}};
        new Solution().solution(6, 4, picture);
    }

    public int[] solution(int m, int n, int[][] picture) {
        class Cell {
            int x, y;

            public Cell(int x, int y) {
                this.x = x;
                this.y = y;
            }
        }

        Queue<Cell> q = new LinkedList<>();
        int[] dx = { 0, 0, 1, -1 };
        int[] dy = { 1, -1, 0, 0 };
        boolean[][] visited = new boolean[m][n];
        int numberOfArea = 0;
        int maxSizeOfOneArea = 0;

        for (int i = 0; i < picture.length; i++) {
            for (int j = 0; j < picture[i].length; j++) {
                int tmpSize = 0;
                if (picture[i][j] != 0 && !visited[i][j]) {
                    q.add(new Cell(i, j));
                    visited[i][j] = true;
                    tmpSize++;

                    while (!q.isEmpty()) {

                        Cell current = q.poll();

                        for (int k = 0; k < 4; k++) {

                            int nextX = current.x + dx[k];
                            int nextY = current.y + dy[k];

                            if (nextX < 0 || nextY < 0 || nextX >= m || nextY >= n || visited[nextX][nextY]
                                    || picture[current.x][current.y] != picture[nextX][nextY])
                                continue;

                            else {
                                visited[nextX][nextY] = true;
                                q.add(new Cell(nextX, nextY));
                                tmpSize++;
                            }
                        }
                    } // end of while

                    numberOfArea++;
                    maxSizeOfOneArea = maxSizeOfOneArea < tmpSize ? tmpSize : maxSizeOfOneArea;

                }

            }
        }

        int[] answer = new int[2];
        answer[0] = numberOfArea;
        answer[1] = maxSizeOfOneArea;

        return answer;
    }
}