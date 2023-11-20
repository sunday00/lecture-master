package patt.d16.dj;

import patt.d16.dj.controller.ControllerInterface;
import patt.d16.dj.controller.HeartController;
import patt.d16.dj.model.HeartModel;

import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.UnsupportedAudioFileException;
import java.io.IOException;

public class HearTestDrive {
    public static void main (String[] args) throws UnsupportedAudioFileException, LineUnavailableException, IOException {
        HeartModel model = new HeartModel();
        ControllerInterface controller = new HeartController(model);
    }
}
