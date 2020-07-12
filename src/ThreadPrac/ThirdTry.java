package ThreadPrac;

public class ThirdTry {
    public void handle(){
        MusicBox musicBox = new MusicBox();
        MusicPlayer player = new MusicPlayer(1, musicBox);
        MusicPlayer player2 = new MusicPlayer(2, musicBox);
        MusicPlayer player3 = new MusicPlayer(3, musicBox);

        player.start();
        player2.start();
        player3.start();
    }
}