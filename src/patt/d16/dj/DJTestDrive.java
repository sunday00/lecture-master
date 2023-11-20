package patt.d16.dj;

import patt.d16.dj.controller.BeatController;
import patt.d16.dj.controller.ControllerInterface;
import patt.d16.dj.model.BeatModel;
import patt.d16.dj.model.BeatModelInterface;

import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.UnsupportedAudioFileException;
import java.io.IOException;

public class DJTestDrive {
    public static void main (String[] args) throws UnsupportedAudioFileException, LineUnavailableException, IOException {
        BeatModelInterface model = new BeatModel();
        ControllerInterface controller = new BeatController(model);
    }
}
