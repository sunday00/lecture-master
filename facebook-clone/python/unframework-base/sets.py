import sys
sys.path.append('./facebook-clone/python/unframework-base')
# pyright: reportMissingImports=false
import usefull as u

s = {1,2,3}

s.add(4)
print(s)

s.update([4,5,6])
print(s)

d = {3,4,7,8}

print ( s.difference(d) )
print( s - d )
print( d - s )

print( s.intersection(d) )
print( s & d )

print( set.union(s, d) )
print( s | d )

s.remove(1)
print(s)

s.discard(2)
s.discard(2)
s.discard(2)
print(s)

print( set.symmetric_difference(s, d) )
print( s ^ d)

u.br()
s = {1,2,3,4}
d = {3,4,5,6}
e = {5,6,7,8}
print( s.issubset({1,2,3,4,5}) )
print( s.issubset({4,6,7,8}) )
print( s.isdisjoint(d), s.isdisjoint(e) )





