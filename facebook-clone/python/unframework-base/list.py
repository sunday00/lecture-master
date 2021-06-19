import random

a = [1,2,3,4,5]
b = [6,7,8,9,0]
c = [11, 11, 11, 23, 653, 23, 44, 2, 12, 54, random.randrange(1,100), random.randrange(1,100)]

print(a[0])
print(a[2:4])

def br():
    print("\n\n\n\n\n\n")
    print("============")
    print("\n\n\n\n\n\n")

br()

print(a + c)

# print(a * b)
print(a * 3)

a.append(11)
print( a )
# a + [11] 과는 다르다. 이건 [1,2,3,4,5,11]이라는 새로운 list를 만드는 거고,
# a.append() 는 a를 직접 수정한다.

a.clear()

a.copy() # d = a 라고 직접 할당하게 되면 d 가 a를 가르키므로
# 나중에 d를 수정하게 되면 a도 바뀐다. 주의.
# 이처럼 같은 주소를 바라보지 않고, 
# 값복사만 하는 경우 copy 를 사용한다.

a = [1,2,3,4,5]
print( a.count(1) )
print( len(a) )

a.extend([6,7,8])
print(a)

br()

print( a.index(3) )

a.insert(2, 1000)
print(a)

print( a.pop() )
print( a )

print( a.pop(2) )
print( a )

br()

print( a.remove(1) )
print( a )

c.reverse()
print( c )

d = c.copy()

c.sort()
print( c )

print( sorted(d) )
print( d )
print( list( reversed(d) ) )

br()

n = 3 # scala
a = [1,2,3] #vector
aa = [[1,2,3], [4,5,6], [7,8,9]] #matrix
aaa = [
    [[1,2,3], [4,5,6], [7,8,9]],
    [[10,11,12], [13,14,15], [16,17,18]],
    [[19,20,21], [22,23,24], [25,26,27]]
] #tensor


print(aaa)
print( type(aaa) )

print( max(aaa) ) # 전체적으로 비교하는 게 아니라, 0번 인덱스끼리만 비교

br()

print( type( range(100) ) )
print( list( range(100) ) )

br()

print( list( range(7,30,5) ) )

br() 

na = [i for i in range(1, 101)]
print(na)

br()

ca = [i for i in range(1, 101) if i % 3 == 0 and i % 5 == 0 ]

print(ca)

br()















