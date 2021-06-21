import sys
sys.path.append('./facebook-clone/python/unframework-base')
# pyright: reportMissingImports=false
import usefull as u

class Car(object): 
    maxSpeed = 300
    maxPeople = 5
    names = []
    # 여기는 신기하게 같은 인스턴스까리 공유영역이다.

    def __init__(self, name:str):
        # super().__init__()
        self.name = name
        self.names.append(name)

    def __add__(self, obj):
        return (f'{self.name} and {obj.name} are crash~!')

    def __str__(self):
        return (f'{self.name}~')
        #toString

    def move(self, x):
        print(f'now, {self.name} is running {x} km/h.')

    def stop(self):
        print('now is stop')

    @staticmethod
    def getManufactor() :
        return 'HD'

c1 = Car('avante')
c2 = Car('tucsson')

c1.move(100)
c2.move(200)

print(c1.names)

print( c1 + c2 )
# __add__ run

print(c1)

print(Car.getManufactor())

