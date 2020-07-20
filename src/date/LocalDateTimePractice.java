package date;

import java.time.*;
import java.time.format.DateTimeFormatter;

public class LocalDateTimePractice {
    public void handle () {
        LocalDateTime now = LocalDateTime.now();
        System.out.println(now);

        LocalDateTime birth = LocalDateTime.of(1986, Month.JUNE, 6, 18, 30);

        ZonedDateTime nowInNewYork = ZonedDateTime.now( ZoneId.of( "America/New_York") );
        System.out.println(nowInNewYork);

        LocalDateTime now2 = LocalDateTime.now();
        String strTime1 = now2.format(DateTimeFormatter.ISO_DATE_TIME);
        System.out.println(strTime1);
        strTime1 = now2.format(DateTimeFormatter.ISO_TIME);
        System.out.println(strTime1);
        strTime1 = now2.format(DateTimeFormatter.ofPattern("yyyy-MM-dd // HH:mm:ss"));
        System.out.println(strTime1);
        strTime1 = LocalDate.parse("20190801", DateTimeFormatter.ofPattern("yyyyMMdd")).toString();
        System.out.println(strTime1);
    }
}
