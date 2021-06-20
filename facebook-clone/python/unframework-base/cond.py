import sys
sys.path.append('./facebook-clone/python/unframework-base')
# pyright: reportMissingImports=false
import usefull as u

a = int( input('input integer : ') )

if a > 10 :
    print('bigger then 10') 
elif a == 5 :
    print('It\' 5')
else :
    u.console.error(msg='error')

