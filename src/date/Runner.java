package date;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class Runner {
    public static void main(String[] args) {
        Date date = new Date();
        Calendar calendar = new GregorianCalendar();
        SimpleDateFormat formDate = new SimpleDateFormat();

//        ApiPractice apiPractice = new ApiPractice();
//        apiPractice.instant();

        LocalDateTimePractice practice = new LocalDateTimePractice();
        practice.handle();

//        Period period = new Period();
//        period.handle();
    }
}
