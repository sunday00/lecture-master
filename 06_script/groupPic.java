import java.util.*;

public class Solution {

    public static int cnt;
    
    public static ArrayList<List<String>> targets; 
    
    public static int solution(int n, String[] data) {
        cnt = 0;
        targets = new ArrayList<List<String>>();
        
        String[] placeholder = {"A", "C", "F", "J", "M", "N", "R", "T"};

        List<String> members = new ArrayList<String>(Arrays.asList(placeholder));
        List<String> currentState = new ArrayList<String>(Arrays.asList(placeholder));
        
        for(String d : data){
            List<String> targetList = new ArrayList<String>();
            targetList.add(""+d.charAt(0));
            targetList.add(""+d.charAt(2));
            targetList.add(""+d.charAt(4));
            targetList.add(""+d.charAt(3));
            
            targets.add(targetList);
        }
        
        permutation(members, currentState, 0);
        
        return cnt;
    }
    
    public static void permutation (List<String> members, List<String> currentState, int currentIdx) {
        
        for (String c : members){
            
            currentState.set(currentIdx, c);
            List<String> remains = new ArrayList<String>(members);
            remains.remove(c);
            
            if( remains.size() == 0 ){
                Boolean resultBool = true;
                for( List<String> t: targets ){
                    resultBool = isTrue(resultBool, t.get(0), t.get(1), t.get(2), t.get(3), currentState);
                    if( resultBool == false ) return;
                }
                
                if( resultBool ) cnt++;
                
                return; 
            }
            
            permutation(remains, currentState, currentIdx+1);
            
        }
    }
    
    public static Boolean isTrue (Boolean beforeBool, String t1, String t2, String d, String op, List<String> test){
        String strTest = String.join("",test);
        int off1 = strTest.indexOf(t1);
        int off2 = strTest.indexOf(t2);
        
        if( op.equals("=") ){
            return beforeBool && Math.abs(off1 - off2) == Integer.parseInt(d) + 1;
        } else if( op.equals("<") ){
            return beforeBool &&  Math.abs(off1 - off2) < Integer.parseInt(d) + 1;
        } else if( op.equals(">") ){
            return beforeBool && Math.abs(off1 - off2) > Integer.parseInt(d) + 1;
        }
        
        return false; 
    }
}