package AnnotationPrac;

public class AnnotationPractice {

    String str;

    public AnnotationPractice(String str) {
        this.str = str;
    }

    @Count100
    public void echo (){
        this.str = str;
        System.out.println(this.str);
    }
}
