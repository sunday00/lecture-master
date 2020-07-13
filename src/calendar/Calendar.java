package calendar;

public class Calendar {
    int[] MAX_DAYS = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    public void print(int year, int month){
        System.out.printf("\n     <<%3d%2d>>\n", year, month);
        System.out.println("SU MO TU WE TH FR ST");
        System.out.println("====================");
        for(int i=1; i<=MAX_DAYS[month - 1]; i++) {
            if( i < 10 ) {
                System.out.printf("0%d ", i);
            } else {
                System.out.printf("%d ", i);
            }
            if (i % 7 == 0 || i == MAX_DAYS[month  - 1]) System.out.print("\n");
        }
    }
}
