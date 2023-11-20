package patt.d16.dj.model;

import patt.d16.dj.observer.BPMObserver;
import patt.d16.dj.observer.BeatObserver;

public interface HeartModelInterface {
    int getHeartRate();
    void registerObserver(BeatObserver o);
    void removeObserver(BeatObserver o);
    void registerObserver(BPMObserver o);
    void removeObserver(BPMObserver o);
}
