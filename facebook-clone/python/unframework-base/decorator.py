import sys
sys.path.append('./facebook-clone/python/unframework-base')
# pyright: reportMissingImports=false
import usefull as u

isAuth = True
# isAuth = False

def auth (func):
    def wrapper (n) :
        if isAuth == False: 
            print('auth check fail')
            return None
        print('auth check OK')
        print( func(n) )
        return 'req done'
    return wrapper

@auth
def view(n):
    return f'view {n}th article'

print( view(4) )