package patt.d16.dj.model;

import patt.d16.dj.observer.BPMObserver;
import patt.d16.dj.observer.BeatObserver;

import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.UnsupportedAudioFileException;
import java.io.IOException;

public interface BeatModelInterface {
    void initialize() throws LineUnavailableException, UnsupportedAudioFileException, IOException;

    void on();

    void off();

    void setBPM(int bpm);

    int getBPM();

    void registerObserver(BeatObserver o);

    void removeObserver(BeatObserver o);

    void registerObserver(BPMObserver o);

    void removeObserver(BPMObserver o);
}
