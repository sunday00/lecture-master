<?php

class VideoPlayer
{
    public function play($file)
    {
        # code...
    }
}

class AviVideoPlayer extends VideoPlayer
{
    public function play($file)
    {
        if ( pathinfo($file, PATHINFO_EXTENSION) !== 'avi' ) {
            throw new Exception;
        } // this is LSP violation. So, this check should done in constructor or, parent class do it also.
    }
}