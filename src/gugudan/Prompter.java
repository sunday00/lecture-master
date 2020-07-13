package gugudan;

import java.util.Scanner;

public class Prompter {
    public void run(){
        Scanner scanner = new Scanner(System.in);

        int repeater = 1;
        System.out.print(">>>");
        while (repeater != -1){
            if( !scanner.hasNextInt() ){
               break;
            }
            System.out.print(">>>");
            repeater = scanner.nextInt();
            System.out.println(repeater);
        }
    }
}
