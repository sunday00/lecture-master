while(1) :
    x = str(input('input>>> : '))

    if x == 'q' :
        break

    x = int(x)

    # print('output>>> : ' + str( x + x ))
    # print(f'output>>> : {x + x}')
    # print('output>>> : {0}'.format(x + x))
    print('output>>> : %d' % (x + x))
    

print(11, 22, 33, sep=':') #사이사이에 

print('a','b','c',end=' ')
print('d','e','f',end=' ')
print('g','h', 'i')

bb = 0b110
print(bb)
print(int(bb))

bc = int(bb)
print(bc)

bd = bin(bc)
print(bd)
# print(int(bd)) #err
print(int(bd, 2))

print( bd[2:] )

print('==================')

print(1.2 - 1.0)
print(11 * 0.03)
print(4.3 - 2.7)
print(1.5 * 1.1)
print(1.5 * 2.1)

dir(bb)