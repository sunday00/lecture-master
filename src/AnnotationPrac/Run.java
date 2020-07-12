package AnnotationPrac;

public class Run {
    public static void main(String[] args) throws NoSuchMethodException {
        AnnotationPractice annotationPractice = new AnnotationPractice("Hello, annotation");
        Count100Handler.handle(annotationPractice);
    }
}
