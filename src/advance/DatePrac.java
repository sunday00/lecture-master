package advance;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Month;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class DatePrac {
    public static void main(String[] args) {
        new DatePrac().defautDate();
        System.out.println("=*=*=*=*=*==*=*=*=*=*==*=*=*=*=*==*=*=*=*=*=");
        System.out.println("=*=*=*=*=*==*=*=*=*=*==*=*=*=*=*==*=*=*=*=*=");
        new DatePrac().calendarPrac();
        System.out.println("=*=*=*=*=*==*=*=*=*=*==*=*=*=*=*==*=*=*=*=*=");
        System.out.println("=*=*=*=*=*==*=*=*=*=*==*=*=*=*=*==*=*=*=*=*=");
        new DatePrac().dateTimePrac();
    }

    public void defautDate () {
        Date d = new Date();
        System.out.println(d);
        System.out.println( d.toString() );

        System.out.println("========");

        SimpleDateFormat dd = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss a zzz");
        System.out.println(dd.format(d));

        System.out.println("========");

        System.out.println(d.getTime());

        System.out.println("========");

        System.out.println( System.currentTimeMillis() );
    }

    public void calendarPrac(){
        Calendar calendar = Calendar.getInstance();
        // 캘린더는 new 로 생성하지 못한다 (추상클래스)
//        Calendar calendar = new GregorianCalendar();
        // 내부적으로 그레고리안이 new 로 생성되어 리턴되지만, 굳이 이렇게는 하지 말자.
        // 이런 방식의 추상클래스는 표준이 되는 디폴트 서브 클래스가 바뀌면 자동으로 다른 서브클래스를 생성하여 리턴할 것이다.
        // 일부러 그렇게 하라고 만든 클래스이므로 getInstance를 사용하고,
        // 이러한 패턴도 연습하여 나중에 커스텀 클래스도 만들어 보자.

        System.out.println( calendar.get(Calendar.YEAR) );
        System.out.println( calendar.get(Calendar.DAY_OF_WEEK) );
        System.out.println( calendar.get(Calendar.HOUR) ); //12
        System.out.println( calendar.get(Calendar.HOUR_OF_DAY) ); //24

        calendar.add(Calendar.HOUR_OF_DAY, 5);
        System.out.println( calendar.get(Calendar.HOUR_OF_DAY) );

    }

    public void dateTimePrac(){
        LocalDateTime ldt = LocalDateTime.now();
        System.out.println(ldt);

        LocalDateTime ldt2 = LocalDateTime.of(2019, Month.APRIL, 11, 12, 11);
        System.out.println(ldt2);

        System.out.println("=====");

        LocalTime lt = LocalTime.parse("10:45");
        System.out.println(lt);
        System.out.println(lt.getHour());
        System.out.println(lt.getMinute());

        System.out.println("=====");

        String M = LocalDate.now().getMonth().toString();
        System.out.println(M);
    }
}
