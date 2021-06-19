# import importlib  
# usefull = importlib.import_module("usefull")
# usefull.br()

# execfile("./facebook-clone/python/unframework-base/usefull.py")
# br()

import sys
sys.path.append('./facebook-clone/python/unframework-base')
# pyright: reportMissingImports=false
import usefull as u

u.br()

d = {
    'apple': 'red',
    'banana': 'yellow',
    'cherry' : 'dark red'
}

print(d['apple'])

d['durian'] = 'brown'

print(d)

d2 = dict( name='sunday00', age=35 )
print(d2)

print( dict( zip(['name', 'age'], ['monday', 36]) ) )

print( 'name' in d2 )
# key 검색 

u.br()

print( d.keys() )
print( d.values() )
print( d.items() )

print( d.get('apple'), d['apple'] )

def color (fruit):
    global d
    return d.get(fruit)

print(color('banana'))

ks = 'a', 'b', 'c'
vs = 1, 2, 3
dfk = dict.fromkeys(ks, vs)
print(dfk)
# 이건 그냥 키 만 매핑해주고 밸류는 매핑이 아니라 걍 다 때려박음
# {'a': 1, 'b': 2, 'c': 3} X
# {'a': (1, 2, 3), 'b': (1, 2, 3), 'c': (1, 2, 3)} O
# 키밸류 매핑을 하려면 zip 을 이용

dfk2 = dict(zip(ks, vs))
print( dfk2 )

d.update({'apple' : 'green'})
print(d)

del( d['cherry'] )
print(d)

u.br()

for k, v in d.items():
    print(k, v)
# for k, v in d: 이렇게 아님을 주의










