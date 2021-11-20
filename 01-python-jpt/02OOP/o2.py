import gc
import sys

class Car :
    fuel: str = "gasoline"
    
    def __init__(self, name, price=1000, age=0):
        self.__name=name
        self.__price=price
        self.__age=age
    
    def get_name(self):
        return self.__name

    @property
    def price(self):
        return self.__price

    @price.setter
    def price(self, newAge: int):
        self.__price = newAge

    @staticmethod
    def get_shops() :
        print(["KIA", "HYUNDAI"])

    @classmethod
    def get_fuel(cls) :
        print(cls.fuel)

    def __del__(self):
        print("destroyed " + self.__name)

class Diesel_car (Car) :
    fuel: str = "diesel"

print( sys.getrefcount(Car) )

car = Car("Morning")

print( sys.getrefcount(Car) )

print(car.get_name())

del car

print( sys.getrefcount(Car) )

print( gc.collect() )

print( sys.getrefcount(Car) )

Car.get_shops()

bmw = Diesel_car("d302")
avante = Car("avante")

bmw.get_fuel()
avante.get_fuel()

print("\n=========\n")

Diesel_car.get_shops()
Diesel_car.get_fuel()

print("\n=========\n")

print( avante.price )
avante.price = 1100
print( avante.price )