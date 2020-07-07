package basic;

public class Basic {
    public static void main(String[] args) {

        final int NUM = 3;

        long a = 123;
        long b = 123L;
        int c = 123;

        System.out.println("hello");
        System.out.println(a);
        System.out.println(b);
        System.out.println(a == b);
        System.out.println(c == b);

//        static::oper();
        new Basic().oper();

        new Basic().arr();
    }

    private void cast () {
        int a = 5;
        long b = a;
        // 묵시적 형변환

        long c = 10;
//        int d = c; // compile err
        int d = (int) c;
        // forced type change
    }

    private void oper () {
        int a = 10;
        int b = -a;

        String phone_number = "01033334444";
        String answer = "";

        int len = phone_number.length();
        System.out.println(len - 4);
        String show = phone_number.substring(len - 4, len);
        String hide = phone_number.substring(0, len - 4);
        hide = hide.replaceAll("\\d", "*");
        System.out.println(hide + show);

        System.out.println(b);
    }

    private void arr () {
        int[] arr1 = {1,3,5,7,9};

        int[][] arr2 = new int[3][];
        /*
        arr2[0][0] = 3;
        System.out.println(arr2[0][0]);
        */ // null point exception. arr2의 [0][0] 이 가리키는 레퍼런스 메모리가 없다. 여기에는 값을 넣을 수 없다.

        arr2[0] = new int[1];
        arr2[0][0] = 3;
        System.out.println(arr2[0][0]);

        arr2[1] = new int[3];
        arr2[2] = new int[7];
        arr2[1][1] = 3;
        arr2[1][2] = 11;
        arr2[2][4] = 77;

        System.out.println(arr2[2][4]); // 일단 2차원 배열선언, 하위배열은 나중에 선언할때는 길이가 달라도 된다.

        int[] arr3 = {1,2,3,4};

        for( int a : arr3 ){
            System.out.println("for each : " + a);
        }
    }
}
