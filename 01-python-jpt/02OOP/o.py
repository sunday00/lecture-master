class Human:
    __age: int
    __height: int
    __weight: int = 72

    def __init__(self, height, age):
        self.__height = height
        self.__age = age
    
    def __eq__(self, other):
        if isinstance(other, Human):
            return self.__dict__ == other.__dict__
        return False

    def __ne__(self, other):
        return not self.__eq__(other)

    def get_height(self):
        return self.__height
    
    def get_age(self):
        return self.__age

    def get_weight(self):
        return self.__weight

h = Human(171, 36)
print(h.get_height())
print(h.get_age())


print(h.get_weight())

print( Human.get_height(h) )

h2 = Human(171, 36)

print( h == h2 )


h.jo = 1
print(h.jo)