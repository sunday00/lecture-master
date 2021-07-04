import sys
sys.path.append('./facebook-clone/python/unframework-base')
# pyright: reportMissingImports=false
import usefull as u

x = [1,2,3]
try:
    print(x[4])
except: 
    print('err')

try:
    print(x[1])
except IndexError: 
    print('err')
except ZeroDivisionError:
    print('err')
else :
    print('done')
finally:
    print('end')

try:
    # raise
    raise ZeroDivisionError
except ZeroDivisionError :
    print('forced zero')
except:
    print('forced')

try:
   raise ZeroDivisionError
except (SyntaxError, IndexError, ZeroDivisionError) as E:  # specific exceptions
   print(type(E))
   print(dir(E))
   print(E.__str__())
except :
   print('Other error !')
else:
   print('No error')
finally:
   print('Done')