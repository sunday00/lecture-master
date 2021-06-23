def ex():
    pass

ex()

def printNumber (n) :
    print(1)
    print(2)
    a = n
    print(3)
    print(4)
print('first')

printNumber(5)

def mul (n : int = 0) -> int: 
    '''
    this function can return multiple
    Parameters:
        n (int): can be any number
    '''
    return (n ** 2)

print( mul(3) )
print( mul.__doc__ )
print( mul(n=3) )

def manyArg (x=1, y=2) -> str :
    return f"good {x} and {y:0>5}"

print( manyArg(y=8) )

g = 1

def addG () :
    global g
    return g + 1

print( addG() )

ar = [1,2,3]
def chgArrAttr (arr, i=0, aft=None):
    arr[i] = aft

chgArrAttr(ar, 0, 4)
print( ar )

# def chgArrAttr2 (arr : str, i=0, aft=''):
#     arr[i] = aft

st = 'string!!'
# chgArrAttr2(st, 0, 'S')
print( st[0] )

def recursion (n) :
    print(n)
    if n > 300:
        return
    recursion(n + 1)

recursion(1)

def any_howMany_args( *args ) -> list:
    l = []
    for a in args:
        l.append(type(a))
    return l

print( any_howMany_args(10, True, None, ex, 'asd') )

def any_howMany_args2( n:int, *args ) -> list:
    l = []
    i = 0
    for a in args:
        i+=1
        if i > n:
            break
        l.append(type(a))
    return l

print( any_howMany_args2(3, True, None, ex, 'asd') )

def any_howMany_args3( n:int, **args ) -> list:
    l = [n]
    for k, v in args.items():
        l.append({k:v})
    return l

print( any_howMany_args3( 3, name="sunday", age="35" ) )

