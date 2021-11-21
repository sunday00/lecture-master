class Job :
    def __init__(self, name: str):
        self.__name = name

    @property
    def name (self):
        return self.__name

    def _do_work(self):
        print("now working...")

class Teacher (Job):
    pass
