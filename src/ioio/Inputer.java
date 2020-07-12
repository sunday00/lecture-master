package ioio;

import java.io.*;

public class Inputer {
    public static void main(String[] args) throws IOException {
        new Inputer().brPrac();
    }

    public void brPrac() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // 키보드로 입력을 받는게 시스템.in이고, 이건 그냥 못 받으므로 인풋스트림리더를 이용해야 한다.
        // 이렇게 해당 동작을 위해 여러 기능을 조합하여 생성하는 방식을 데코레이터패턴이라고 한다.
        // 솔직히 초짜가 이해하기에는 너무 벅차다. ...
        System.out.println("ready");
        System.out.println( "<><><>" + br.readLine() + "<><><>" );

        BufferedReader br2 = new BufferedReader(new FileReader("src/ioio/test2.txt"));
        PrintWriter pw = new PrintWriter(new FileWriter("src/ioio/test4.txt"));
        // 다른 언어를 하다 오면 이런게 너무 괴뢀해 보임...;;
        // 당최 자바 개발자들은 이걸 어떻게 외워서 쓰는거지...??
        String line;
        while ( (line = br2.readLine()) != null){
            pw.println(line);
        }
        pw.println( br.readLine() );

        br2.close();
        pw.close();
    }
}
