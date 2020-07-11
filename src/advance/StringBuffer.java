package advance;

//import java.time.LocalDateTime;

public class StringBuffer {
    public static void main(String[] args) {
        java.lang.StringBuffer sb = new java.lang.StringBuffer();
        sb.append("hello");
        sb.append(" ");
        sb.append("string");
        sb.append(" ");
        sb.append("Buffer");

        System.out.println( sb.toString() );

        java.lang.StringBuffer sb2 = sb.append("!");
        System.out.println(sb2 == sb);

        sb.append(" ").append("My ").append("name ").append("is ").append("sunday00");

        System.out.println(sb);

        new StringBuffer().forString();
        new StringBuffer().forStringBuffer();
    }

    public void forString () {
//        int before = LocalDateTime.now().getNano();
        Long before = System.currentTimeMillis();
        String str = "";
        for(int i=0; i < 9000; i ++){
            str += "!";
            // string 을 loop 로 concat하면 내부적으로 매 loop마다 new stringBuffer를 생성하게 되므로 느려진다.
            // IDE도 이거때문에 loop로 string더하기하면 경고로 표시해준다.
        }
        System.out.println(str);
//        int after = LocalDateTime.now().getNano();
        Long after = System.currentTimeMillis();
        System.out.println(after - before);
    }

    public void forStringBuffer () {
//        int before = LocalDateTime.now().getNano();
        Long before = System.currentTimeMillis();
        java.lang.StringBuffer sb = new java.lang.StringBuffer();
        for(int i=0; i < 9000; i ++){
            sb.append("!");
        }
        System.out.println(sb.toString());
//        int after = LocalDateTime.now().getNano();
        Long after = System.currentTimeMillis();
        System.out.println(after - before);
    }
}
