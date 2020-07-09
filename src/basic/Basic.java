package basic;

import java.lang.reflect.Array;

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

        new Basic().str();

        new Basic().staticTest();

        new Basic().strict();

        ClassPractice classPractice = new ClassPractice();
        System.out.println("+=====++=====++==++=======+");
        classPractice.doFunc();


        int[][] board = {
                {0, 0, 0, 0, 0},
                {0, 0, 1, 0, 3},
                {0, 2, 5, 0, 1},
                {4, 2, 4, 4, 2},
                {3, 5, 1, 3, 1}
        };
        int[] moves = {1, 5, 3, 5, 1, 2, 1, 4};
        KakaoToyCrain kakaoToyCrain = new KakaoToyCrain();
        System.out.println(kakaoToyCrain.solution(board, moves));

        System.out.println("+=====++=====++==++=======+");

        Bed bed = new Bed();
        bed.setPrice(100);
        System.out.println(bed.getPrice());
//        Furniture furniture = new Furniture();
        // abstract 는 상속/타입 전용.
        Furniture bed2 = new Bed();

        bed.lying();
//        bed2.lying(); // 부모 클래스 타입으로 호출하면 사실상 부모클래스 인스턴스임.
        ((Bed) bed2).lying(); // 형변환 해주면 됨.

        System.out.println("+=====++=====++==++=======+");

        DefaultMethodIncludedInterface defaultMethodIncludedInterface = new DefaultMethodPractice();
        defaultMethodIncludedInterface.echo("echo");
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

    private void str() {
        System.out.println("==================");
        String str1 = "hello";
        String str2 = "hello";
        String str3 = new String("hello");
        String str4 = new String("hello");

        System.out.println(str1 == str2);
        System.out.println(str3 == str4);
    }

    static int num;
    private void staticTest () {
        Basic a = new Basic();
        Basic b = new Basic();

        a.num = 10;
        b.num = 20;

        System.out.println(a.num + ":" + b.num); // not 10:20 // 20:20
        // static is allow store value one. this is not instance value scope;
        System.out.println(Basic.num); // so, this is called "variable of class" and using from not instance, directly from Class.
    }

    public static final String Male = "MALE";
    public static final String Female = "FEMALE";

    private enum Gender {MALE, FEMALE};

    private void strict (){
        String gender = this.Male;
        System.out.println(gender);

        gender = "boy";
        System.out.println(gender);

        Gender gender2;
        gender2 = Gender.FEMALE;
//        gender2 = "girl"; //not work
        System.out.println(gender2);
    }


}
