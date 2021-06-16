greet = "hello type of python"

l = list(greet)

print(l)

name = 'sunday00'
age = 35

a = ('name', name)
b = ('age', age)
print( type(a), a )

c = [a, b]
print( type(c), c )

d = dict(c)
print( type(d), d )

print( d['name'] )

s = set(greet)
print( type(s), s )

print( bool([]), bool({}), bool(()) )
print( bool([0]), bool({0}), bool((0)) )
print( bool([1]), bool({1}), bool((1)) )
# bool 체크는 타입별로 0 처리가 다르므로 주의

def brHr () :
    print("\n\n\n\n\n\n\n\n\n\n\n\n")
    print("========================")
    print("\n\n\n\n\n\n\n\n\n\n\n\n")

brHr()

x = 10
y = 3

print( x/y, x//y )
# // 정수로 연산. 이거땜에 //가 주석이 아니다.

print( x ** y )

print('A' < 'b')
# ascii order

t = True
f = False

print( t and f, t or f, not f )

brHr()

print(100 == 100 , 100 is 100)
print(1000000000000000000000000000000000000000000000000000000000000000000 == 1000000000000000000000000000000000000000000000000000000000000000000 ,
 1000000000000000000000000000000000000000000000000000000000000000000 is 1000000000000000000000000000000000000000000000000000000000000000000)

print([1,2,3] == [1,2,3], [1,2,3] is [1,2,3])
print([1,2,3][0] is [1,2,3][0])

print( 2 in [1,2,3], [2,3] in [1,2,3] )
print( 'a' in 'apple', 'pp' in 'apple' )

print( 'k' in {'k':'v', 'k2':'v2'} )
print( 'v' in {'k':'v', 'k2':'v2'} )
# print( {'k':'v'} in {'k':'v', 'k2':'v2'} )
print( ('k','k2') in {'k':'v', 'k2':'v2'} )


