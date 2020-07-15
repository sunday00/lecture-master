package calendar;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

public class Calendar {

    public static final String ANSI_RESET = "\u001B[0m";
    public static final String ANSI_BLACK = "\u001B[30m";
    public static final String ANSI_RED = "\u001B[31m";
    public static final String ANSI_GREEN = "\u001B[32m";
    public static final String ANSI_YELLOW = "\u001B[33m";
    public static final String ANSI_BLUE = "\u001B[34m";
    public static final String ANSI_PURPLE = "\u001B[35m";
    public static final String ANSI_CYAN = "\u001B[36m";
    public static final String ANSI_WHITE = "\u001B[37m";
    public static final String ANSI_BLACK_BACKGROUND = "\u001B[40m";
    public static final String ANSI_RED_BACKGROUND = "\u001B[41m";
    public static final String ANSI_GREEN_BACKGROUND = "\u001B[42m";
    public static final String ANSI_YELLOW_BACKGROUND = "\u001B[43m";
    public static final String ANSI_BLUE_BACKGROUND = "\u001B[44m";
    public static final String ANSI_PURPLE_BACKGROUND = "\u001B[45m";
    public static final String ANSI_CYAN_BACKGROUND = "\u001B[46m";
    public static final String ANSI_WHITE_BACKGROUND = "\u001B[47m";

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
        LocalDate now = LocalDate.now();
        int today = -1;
        if( now.getYear() == year && now.getMonthValue() == month) today = now.getDayOfMonth();

        System.out.printf("\n   <<%4d%3d>>\n", year, month);
        System.out.println("SU MO TU WE TH FR ST");
        System.out.println("====================");

        int emptyPrepend = getEmptyPrepend(year, month);
        for(int i=0; i<emptyPrepend; i++){
            System.out.print("   ");
        }

        for(int i=1; i<=MAX_DAYS[month - 1] ; i++) {
            String color = today == i ? ANSI_CYAN_BACKGROUND : "";
            String resetColor = ANSI_RESET;
            if (!this.checkPlan(year, month, i).equals("No schedule")) {
                color += ANSI_YELLOW;
            }
            if( i < 10 ) {
                System.out.printf("%s0%d%s ", color, i, resetColor);
            } else {
                System.out.printf("%s%d%s ", color, i, resetColor);
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
