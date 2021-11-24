class A:
    def m1 (self) :
        return "a"

class B(A):
    def m1 (self) :
        return "b"

class C(B):
    def m1(self) :
        return super().m1()

c = C()

print(c.m1())
