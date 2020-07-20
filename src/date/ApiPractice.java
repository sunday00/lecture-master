package date;

import java.time.Duration;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Date;

public class ApiPractice {
    public void instant(){
        Instant instant1 = Instant.now();

        Instant instant2 = Instant.ofEpochMilli((new Date()).getTime()+(1000 * 60 * 60 * 24 * 10));

        System.out.println(instant1);
        System.out.println(instant2);

        ZoneId zoneId = ZoneId.systemDefault();
        System.out.println(zoneId);
        ZonedDateTime zonedDateTime = instant1.atZone(zoneId);
        System.out.println(zonedDateTime);

        Instant plus = instant1.plus(10, ChronoUnit.SECONDS);
        Duration bet = Duration.between(instant1, plus);
    }
}
