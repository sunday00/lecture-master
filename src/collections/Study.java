package collections;

public class Study {
    private String name;
    private String lang;
    private boolean open;
    private int attend;

    public Study(String name, String lang, boolean open, int attend) {
        this.name = name;
        this.lang = lang;
        this.open = open;
        this.attend = attend;
    }

    public Study(String name, String lang) {
        this.name = name;
        this.lang = lang;
        this.open = true;
        this.attend = 4;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isOpen() {
        return open;
    }

    public void setOpen(boolean open) {
        this.open = open;
    }

    public int getAttend() {
        return attend;
    }

    public void setAttend(int attend) {
        this.attend = attend;
    }

    public String getLang() {
        return lang;
    }

    public void setLang(String lang) {
        this.lang = lang;
    }

    @Override
    public String toString() {
        return "Study{" +
                "name='" + name + '\'' +
                ", lang='" + lang + '\'' +
                ", open=" + open +
                ", attend=" + attend +
                '}';
    }
}
