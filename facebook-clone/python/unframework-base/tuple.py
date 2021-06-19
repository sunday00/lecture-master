t = (1,2,3)

print( t[0] )

def br():
    print("\n\n\n\n\n\n")
    print("============")
    print("\n\n\n\n\n\n")

# t[0] = 4 #err



tt = ( [1], 2, 3 )
tt[0][0] = 4
print(tt)
# 튜플은 참조값을 바꿀수는 없지만, 참조내에서는 수정이 된다

tt = ((1,2,3), (4,5,6), (7,8,9))
print(tt)

it = 1,2,3,4,5
print( type(it), it )

rt = tuple(range(1,5))
print(rt)

br()

nOrT = (1)
print(nOrT, type(nOrT))

nOrT2 = (1,)
print(nOrT2, type(nOrT2)) #하나만 넣으면 튜플이 아니라 괄호로 인식하므로 주의.
# 콤마 넣어주면 된다.
print(nOrT2[0])
print(nOrT2[1])



