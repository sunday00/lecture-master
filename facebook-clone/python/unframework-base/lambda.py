import sys
sys.path.append('./facebook-clone/python/unframework-base')
# pyright: reportMissingImports=false
import usefull as u

l = lambda arg : arg + 5
print( l(5) )

print(  list( map( lambda att : att ** 2, [1, 2, 3, 4] ) )  )
print(  (lambda att : att ** 2)(4)  )

print(  list( filter( lambda att : att % 2 == 0, [1, 2, 3, 4] ) )  )


