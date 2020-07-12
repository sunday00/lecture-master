package AnnotationPrac;

import java.lang.reflect.Method;

public class Count100Handler {
    public static void handle(AnnotationPractice annotationPractice) throws NoSuchMethodException {
//        for( Method m : annotationPractice.getClass().getDeclaredMethods() ){
//            System.out.println(m);
//        }
//        Method method = annotationPractice.getClass().getDeclaredMethod("echo", String.class);
        Method method = annotationPractice.getClass().getDeclaredMethod("echo");
        if( method.isAnnotationPresent(Count100.class) ){
            for(int i = 0 ; i < 100; i++){
                annotationPractice.echo();
                System.out.println(i);
            }
        } else {
            annotationPractice.echo();
        }
    }
}
