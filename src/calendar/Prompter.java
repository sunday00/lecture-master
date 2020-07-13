package calendar;

import java.util.Scanner;

public class Prompter {
    public void show () {
        Scanner scanner = new Scanner(System.in);
        Calendar calendar = new Calendar();

        int month = 1;
        String command = null;
        while (true){
            System.out.println("\nInput number of month");
            System.out.print("SIMPLE CALENDAR >>> ");

            if( scanner.hasNextInt() ) month = scanner.nextInt();
            command = scanner.nextLine();

            if(month < 1 || 12 < month ){
                System.out.println("THIS IS NOT MONTH");
                continue;
            }

            if(command.equals("h")){
                System.out.println("q : exit");
                System.out.println("f : is yoon");
                System.out.println("v : version");
                continue;
            }

            if( command.equals("q") ){
                break;
            }



            calendar.print(2020, month);
        }
    }
}
