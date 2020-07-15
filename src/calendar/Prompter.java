package calendar;

import java.util.Scanner;

public class Prompter {
    public void show () {
        Scanner scanner = new Scanner(System.in);
        Calendar calendar = new Calendar();

        int year = 2020;
        int month = 1;
        String command = null;
        while (true){
            System.out.println("\nInput number of year");
            System.out.print("SIMPLE CALENDAR (year) >>> ");
            if( scanner.hasNextInt() ) year = scanner.nextInt();

            System.out.println("\nInput number of month");
            System.out.print("SIMPLE CALENDAR (month) >>> ");
            if( scanner.hasNextInt() ) month = scanner.nextInt();

            if(month < 1 || 12 < month ){
                System.out.print("\nTHIS IS NOT MONTH\n");
                continue;
            }

            System.out.println("\nInput string of command");
            System.out.print("SIMPLE CALENDAR (READY TO RUN. PRESS e and return key) >>> ");
            command = scanner.next();

            System.out.println(command);
            if(command.equals("h")){
                System.out.print("\nq : exit\n");
                System.out.print("f : is leap\n");
                System.out.print("s : register plan\n");
                System.out.print("c : check plan\n");
                System.out.print("e | r : exec\n");
                System.out.print("v : version\n");
                continue;
            } else if( command.equals("f") ){
                if (Calendar.is_lib(year)) System.out.print("\ntrue. " + year + " is leap.\n");
                else System.out.print("\nfalse. " + year + " is normal\n");
                continue;
            } else if( command.equals("s") ){
                System.out.println("\nInput Date for schedule\n");
                int date = 1;
                if( scanner.hasNextInt() ) date = scanner.nextInt();
                else continue;
                System.out.println("\nInput some text for schedule.\n");
                System.out.println("\n\\c! is cancel.( Warring! Dont command now. The command will be register as schedule )\n");
                String schedule = scanner.next();
                if( !schedule.equals("\\c!") ) calendar.registerPlan(year, month, date, schedule);
                else continue;
            } else if( command.equals("c") ){
                System.out.println("\nInput Date for check schedule\n");
                int date = scanner.nextInt();
                System.out.print("\n"+Calendar.ANSI_YELLOW+calendar.checkPlan(year, month, date)+Calendar.ANSI_RESET+"\n");
                continue;
            } else if( command.equals("e") || command.equals("r") ){
                calendar.print(year, month);
                continue;
            } else if( command.equals("q") ){
                break;
            }
        }
    }
}
