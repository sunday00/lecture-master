class ScoreBoard :
    __pingpong = 0
    __soccer = 0

    def __call__(self):
        return "soccer: {}, pingpong: {}".format(self.__soccer, self.__pingpong)
    
    def __str__(self):
        return self()

    @property
    def soccer(self):
        return self.__soccer

    @property
    def pingpong(self):
        return self.__pingpong

    @soccer.setter
    def soccer (self, score) :
        self.__soccer = score

    @pingpong.setter
    def pingpong (self, score) :
        self.__pingpong = score

scores = ScoreBoard()
scores.pingpong = 5
scores.soccer = 11

print( scores() )
print( str(scores) )