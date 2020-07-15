package calendar;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

public class Calendar {

    Map<LocalDate, String> schedules;

    int[] MAX_DAYS = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    public Calendar() {
        this.schedules = new HashMap<>();
    }

    public static boolean is_lib (int year) {
        return year % 400 == 0 || year % 4 == 0  && year % 100 != 0;
    }

    private int getEmptyPrepend(int year, int month){
        LocalDate localDate = LocalDate.of(year, month, 1);
        return localDate.getDayOfWeek().getValue() % 7;
    }

    public void print(int year, int month){
        if( is_lib(year) ) this.MAX_DAYS[1] = 29;

        System.out.printf("\n     <<%3d%2d>>\n", year, month);
        System.out.println("SU MO TU WE TH FR ST");
        System.out.println("====================");

        int emptyPrepend = getEmptyPrepend(year, month);
        for(int i=0; i<emptyPrepend; i++){
            System.out.print("   ");
        }

        for(int i=1; i<=MAX_DAYS[month - 1] ; i++) {
            if( i < 10 ) {
                System.out.printf("0%d ", i);
            } else {
                System.out.printf("%d ", i);
            }
            if ((i + emptyPrepend) % 7  == 0) System.out.print("\n");
        }
        System.out.print("\n");
    }

    public void registerPlan(int year, int month, int date, String schedule) {
        LocalDate localDate = LocalDate.of(year, month, date);
        this.schedules.put(localDate, schedule);
    }


    public String checkPlan(int year, int month, int date) {
        LocalDate localDate = LocalDate.of(year, month, date);
        return schedules.keySet().contains(localDate) ? schedules.get(localDate) : "No schedule";
    }
}
