package basic;

public interface DefaultMethodIncludedInterface {
    public String eat ();
    public void setColor (String color);
    public String getColor ();

    default void echo(String val){
        System.out.println(val);
    }
}
