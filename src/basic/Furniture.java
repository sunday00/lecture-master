package basic;

public abstract class Furniture {
    protected int price;
    public abstract void setPrice(int price);
    public int getPrice(){
        return this.price;
    }
}
