package advance;

import java.util.Objects;

public class RootAncestor {
    int number;
    String name;
    int birth;

    @Override
    public String toString() {
        return "RootAncestor{" +
                "number=" + number +
                ", name='" + name + '\'' +
                ", birth=" + birth +
                '}';
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getBirth() {
        return birth;
    }

    public void setBirth(int birth) {
        this.birth = birth;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RootAncestor that = (RootAncestor) o;
        return number == that.number;
    }

    @Override
    public int hashCode() {
        return Objects.hash(number);
    }

    public static void main(String[] args) {
        RootAncestor student = new RootAncestor();
        RootAncestor student2 = new RootAncestor();

        student.setNumber(1111);
        student2.setNumber(1111);

        System.out.println( student.equals(student2) );
        System.out.println( student.hashCode() );
        System.out.println( student2.hashCode() );
    }
}
