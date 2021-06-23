import sys
import random

sys.path.append('./facebook-clone/python/unframework-base')
# pyright: reportMissingImports=false
import usefull as u

aaa = [
    random.randint(0, 20),
    random.randint(0, 20),
    random.randint(0, 20),
    random.randint(0, 20),
    random.randint(0, 20),
    random.randint(0, 20),
    random.randint(0, 20),
    random.randint(0, 20),
    random.randint(0, 20),
]
for i, j in enumerate( sorted( aaa) ) :
    print(i, j)

bbb = [
    [
        'foo','bar','baz'
    ],
        '123'
    ,[
        random.randint(0, 20),
        random.randint(0, 20),
        random.randint(0, 20),
    ]
]

print( list( zip( bbb[0], bbb[1], bbb[2],) ) )

def addZero(arg : int) -> str :
    str_arg = str(arg)
    if len(str_arg) < 2:
        return f'0{str_arg}'
    return str_arg

print( list( map(addZero, bbb[2]) ) )

def isEven(n: int) -> bool:
    return n % 2 == 0

print( list( filter(isEven, bbb[2]) ) )

