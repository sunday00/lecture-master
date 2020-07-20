package date;

import java.time.LocalDate;
import java.time.Month;
import java.time.temporal.ChronoUnit;

public class Period {
    public void handle () {
        LocalDate today = LocalDate.now();
        LocalDate birth = LocalDate.of(2021, Month.JUNE, 6);

        java.time.Period period = java.time.Period.between(today, birth);
        System.out.println(today);
        System.out.println(birth);
        System.out.println(period);

        java.time.Period period2 = today.until(birth);
        System.out.println(period2.getDays());
        System.out.println(period2.get(ChronoUnit.DAYS));
    }
}
