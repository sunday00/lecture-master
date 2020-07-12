package ioio;

import java.io.*;

public class FileIoPrac {
    public static void main(String[] args) throws IOException {
        new FileIoPrac().defaultPrac();
        new FileIoPrac().typePrint();
    }

    public void defaultPrac () throws IOException {

        FileInputStream fis = null;
        FileOutputStream fos = null;

        fis = new FileInputStream("src/ioio/test.txt");
        fos = new FileOutputStream("src/ioio/test2.txt");

        int readCnt = -1;
        byte[] buffer = new byte[512];
        while ( (readCnt = fis.read(buffer)) != -1 ){
            System.out.write(buffer, 0, readCnt);
            fos.write(buffer);
        }

        fis.close();
        fos.close();
    }

    public void typePrint () throws IOException {
        try (
                DataOutputStream dos = new DataOutputStream(new FileOutputStream("src/ioio/test3.txt"))
        ){
            dos.writeInt(100);
            dos.writeInt(200);
            dos.writeInt(300);
            dos.writeBoolean(true);
        } catch (IOException e) {
            e.printStackTrace();
        }

        try(
            DataInputStream dis = new DataInputStream(new FileInputStream("src/ioio/test3.txt"))
        ){
            System.out.println(dis.readInt());
            System.out.println(dis.readInt());
            System.out.println(dis.readInt());
            System.out.println(dis.readBoolean());
        }
    }
}
