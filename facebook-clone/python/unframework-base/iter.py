import sys
sys.path.append('./facebook-clone/python/unframework-base')
# pyright: reportMissingImports=false
import usefull as u

i = iter([1,2,3,4])
print(i.__next__())
print(i.__next__())
print(i.__next__())
print(i.__next__())

def numsGenerator(n) :
    yield n
    yield n+1
    yield n+2
    yield n+3
    yield n+4
    yield n+5
    yield n+6

for i in numsGenerator(1):
    print(i)

ml = map( lambda x: x+1, [1,2,3] )
print(ml)
print(list(ml))

print( type(ml) )



