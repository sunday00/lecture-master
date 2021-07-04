import sys
sys.path.append('./facebook-clone/python/unframework-base')
# pyright: reportMissingImports=false
import usefull as u

def sumFactory (n) :
    def sumN (m) :
        return n + m
    return sumN

s = sumFactory(1)

print( s(2) )
print( s(3) )
print( s(4) )
print( s(5) )

def sumFactory2 (n):
    return lambda m : n + m

s2 = sumFactory2(1)
print( s2(2) )
print( s2(3) )
print( s2(4) )
print( s2(5) )

x = 1
y = 3
def fun1():
    x = 10
    y = 30
    def fun2():
        nonlocal x, y # local 에 없으니 한단계 위 변수에서 갖고와
                        # local로 만든 후 사용한다.
        x += 1
        y += 2
        return x + y
    return fun2()

print(fun1())

