package basic;

public class Car {
    String name;

    public Car(){
        this("Default name");
    }

    public Car(String name){
        this.name = name;
        // name = name; 하면 컴파일러는 변수 name을 필드(클래스 직속 속성)으로 생각하지 않음...
        // new Car().name 하면 null 찍힘. 인자와 필드가 같을떈 꼭 this!

    }

    public String getName(){
        return name;
    }
}
