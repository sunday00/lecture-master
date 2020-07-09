package basic;

public class DefaultMethodPractice implements DefaultMethodIncludedInterface{
    private String color;

    @Override
    public String eat() {
        return "eat " + this.color + " fruit";
    }

    @Override
    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String getColor() {
        return this.color;
    }
}
