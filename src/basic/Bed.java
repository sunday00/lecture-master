package basic;

public class Bed  extends Furniture{
    @Override
    public void setPrice(int price) {
        this.price = price;
    }

    public void lying () {
        System.out.println("lying on the bed");
    }
}
