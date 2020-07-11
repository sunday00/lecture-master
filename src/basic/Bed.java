package basic;

public class Bed  extends Furniture{

    private class NestedClass {
        public void addBlanket(){
            System.out.println("added");
        }
    }

    @Override
    public void setPrice(int price) {
        this.price = price;
    }

    public void lying () {
        System.out.println("lying on the bed");
        (new NestedClass()).addBlanket();
    }
}
